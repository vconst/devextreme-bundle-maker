const _ = require('lodash');
const components = require('./components.json').components;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_TO_TEMPLATE = './playground/jquery/template.html';
const PATH_TO_TEST_BUNDLES = '../../playground/jquery/testBundles/';

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
      if (/renderer$/.test(request)){
        return callback(null, 'window.jQuery');
      }

      callback();
    }
  ],
};

module.exports = components.reduce((bundles, component) => {
  bundles.push(_.merge({}, configTemplate, {
    name: component.name + '-renovated',
    entry: './devextreme/artifacts/transpiled-renovation-npm/renovation/ui/' + component.name + '.j.js',
    output: {
      filename: component.name + '-renovated.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
            filename: PATH_TO_TEST_BUNDLES + component.name + '-renovated.html',
            template: PATH_TO_TEMPLATE
        }),
   ]
  }));
  bundles.push(_.merge({}, configTemplate,{
      name: component.name + '-basic',
      entry: './devextreme/artifacts/transpiled/ui/' + component.name + '.js',
      output: {
        filename: component.name + '-basic.js',
      },
      plugins: [
          new HtmlWebpackPlugin({
              minify: false,
              filename: PATH_TO_TEST_BUNDLES + component.name + '-basic.html',
              template: PATH_TO_TEMPLATE
          }),
    ]
  }));
  
  return bundles;
}, []);
