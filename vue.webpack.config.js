const _ = require('lodash');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const components = require('./components.json').components;

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const configTemplate = {
  devtool: false,
  output: {
    path: __dirname + '/bundles/vue',
    libraryTarget: 'commonjs2'
  },
  optimization: {
    minimize: false 
  },
  externals: {
    'vue': 'vue',
  },
};

module.exports = components.reduce((bundles, component) => {
  if(!component.private) {
    bundles.push(_.merge({}, configTemplate, {
      name: component.name + '-wrapper',
      entry: './devextreme-vue/packages/devextreme-vue/npm/' + component.wrapperName + '.js',
      output: {
        filename: component.name + '-wrapper.js',
      },
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: false,
          reportFilename: component.name + "-wrapper.html"
        })
      ],
    }));
    bundles.push(_.merge({}, configTemplate, {
      name: component.name + '-renovated',
      entry: './devextreme-vue-renovated/packages/devextreme-vue/npm/' + component.wrapperName + '.js',
      output: {
        filename: component.name + '-renovated-wrapper.js',
      },
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: false,
          reportFilename: component.name + "-renovated-wrapper.html"
        })
      ],
    }));
  }

  if(component.ignoreFrameworks && component.ignoreFrameworks.indexOf('vue') >= 0) return bundles;

  const nativePostfix = component.spike ? '' : '-native';

  bundles.push(_.merge({}, configTemplate,{
    name: component.name + '-native',
    entry: './devextreme-renovated/artifacts/vue/renovation/' + component.path + '.vue',
    output: {
      filename: component.name + nativePostfix + '.js',
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: component.name + nativePostfix + ".html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] }
        },
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          options: {
            plugins: ["@babel/plugin-proposal-nullish-coalescing-operator", "@babel/plugin-proposal-optional-chaining"]
          }
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ],
    resolve: {
      extensions: ['.vue', '.js']
    },
  }));
  
  return bundles;
}, []);
