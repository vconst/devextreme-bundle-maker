const _ = require('lodash');
const components = require('./components.json').components;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_TO_JQUERY = './playground/jquery/';
const PATH_TO_TEST_BUNDLES = PATH_TO_JQUERY + 'testBundles/';

const configTemplate = {
  mode: 'development',
  output: {
    path: __dirname + '/playground/jquery/testBundles/',
  },
  optimization: {
    minimize: false
  }
};

module.exports = components.reduce((files, component) => {
  files.push(_.merge({}, configTemplate, {
    entry: PATH_TO_JQUERY + component.name + '.js',
    output: {
      filename: component.name + '.test.js',
    },
  }));

  files.push(_.merge({}, configTemplate, {
    entry: PATH_TO_JQUERY + component.name + '.js',
    output: {
      filename: component.name + '.test.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: component.name + '-basic.html',
            template: PATH_TO_TEST_BUNDLES + component.name + '-basic.html'
        }),
        new HtmlWebpackPlugin({
            filename: component.name + '-renovated.html',
            template: PATH_TO_TEST_BUNDLES + component.name + '-renovated.html'
        }),
   ]
  }));

  return files;
},
  []
);
