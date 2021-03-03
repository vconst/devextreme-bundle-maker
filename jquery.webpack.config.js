const _ = require('lodash');
const components = require('./components.json').components;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PATH_TO_TEMPLATE = './playground/jquery/template.html';
const PATH_TO_HTML = '../../playground/jquery/html/';

const configTemplate = {
  devtool: false,
  output: {
    path: __dirname + '/bundles/jquery',
  },
  optimization: {
     minimize: false
  },
  externals: [
    function(context, request, callback) {
      if (/renderer$/.test(request) && !/renderers/.test(request)){
        return callback(null, 'window.jQuery');
      }

      callback();
    }
  ],
};

module.exports = components.reduce((bundles, component) => {
  const pathToComponent =  PATH_TO_HTML + component.name;
  const renovatedPostFix = component.spike ? '' : '-renovated';

  if(component.renovated !== false) {
    bundles.push(_.merge({}, configTemplate, {
      name: component.name + '-renovated',
      entry: './devextreme-renovated/artifacts/transpiled-renovation-npm/renovation/' + component.path + '.j.js',
      output: {
        filename: component.name + renovatedPostFix + '.js',
      },  
      plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            minify: false,
            filename: pathToComponent + renovatedPostFix + '.html',
            template: PATH_TO_TEMPLATE
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: false,
          reportFilename: component.name + renovatedPostFix + ".html"
        })
    ]
    }));
  }
  if(!component.spike) {
    bundles.push(_.merge({}, configTemplate,{
        name: component.name + '-basic',
        entry: './devextreme/artifacts/transpiled/' + (component.path?.indexOf('viz') === 0 ? 'viz/' : 'ui/') + component.name + '.js',
        output: {
          filename: component.name + '-basic.js',
        },
        plugins: [
          new HtmlWebpackPlugin({
              minify: false,
              filename: pathToComponent + '-basic.html',
              template: PATH_TO_TEMPLATE
          }),
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
            reportFilename: component.name + "-basic.html"
          })
      ]
    }));
  }
  
  return bundles;
}, []);
