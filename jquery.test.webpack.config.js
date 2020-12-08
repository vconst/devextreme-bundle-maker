const _ = require('lodash');
const components = require('./components.json').components;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_TO_JQUERY = './playground/jquery/';
const PATH_TO_HTML = PATH_TO_JQUERY + 'html/';

const configTemplate = {
  mode: 'development',
  output: {
    path: __dirname + '/playground/jquery/html',
  },
  optimization: {
    minimize: false
  }
};

module.exports = components.reduce((files, component) => {
  const pathToComponent = PATH_TO_HTML + component.name;
  const entry = PATH_TO_JQUERY + component.name + '.js';
  const filename = component.name + '.test.js'; 

  files.push(_.merge({}, configTemplate, {
    entry,
    output: {
      filename,
    },
  }));

  files.push(_.merge({}, configTemplate, {
    entry,
    output: {
      filename,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: component.name + '-basic.html',
            template: pathToComponent + '-basic.html'
        }),
        new HtmlWebpackPlugin({
            filename: component.name + '-renovated.html',
            template: pathToComponent + '-renovated.html'
        }),
   ]
  }));

  return files;
},
  []
);
