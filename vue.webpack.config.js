const _ = require('lodash');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const components = require('./components.json').components;

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
  bundles.push(_.merge({}, configTemplate, {
    name: component.name + '-wrapper',
    entry: './devextreme-vue/npm/' + component.wrapperName + '.js',
    output: {
      filename: component.name + '-wrapper.js',
    },
  }));
  bundles.push(_.merge({}, configTemplate, {
    name: component.name + '-renovated',
    entry: './devextreme-vue-renovated/npm/' + component.wrapperName + '.js',
    output: {
      filename: component.name + '-renovated-wrapper.js',
    },
  }));
  bundles.push(_.merge({}, configTemplate,{
      name: component.name + '-native',
      entry: './devextreme-renovated/artifacts/vue/renovation/ui/' + component.name + '.vue',
      output: {
        filename: component.name + '-native.js',
    },
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
