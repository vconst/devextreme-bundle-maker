const _ = require('lodash');
const components = require('./components.json').components;

const configTemplate = {
  devtool: false,
  output: {
    path: __dirname + '/bundles/angular',
    libraryTarget: 'commonjs2'
  },
  optimization: {
    minimize: false
  },
  externals: {
    'angular': 'window.angular',
    '@angular/core': '@angular/core',
    '@angular/common': '@angular/common',
    '@angular/forms': '@angular/forms',
    'devextreme-angular/core': './devextreme-angular-core.js'
  }
};

module.exports = components.reduce((bundles, component) => {
  if(component.private) {
    return;
  }
  bundles.push(_.merge({}, configTemplate, {
    name: component.name + '-wrapper',
    entry: './devextreme-angular/npm/dist/fesm2015/devextreme-angular-ui-' + component.wrapperName + '.js',
    output: {
      filename: component.name + '-wrapper.js',
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: /node_modules/,
          use: [{
            loader: 'ts-loader',
            options: {
                configFile: __dirname + '/angular.tsconfig.json'
            }
          }, {
            loader: 'angular2-template-loader',
          }],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
  }));
  bundles.push(_.merge({}, configTemplate, {
    name: component.name + '-renovated',
    entry: './devextreme-angular-renovated/npm/dist/fesm2015/devextreme-angular-ui-' + component.wrapperName + '.js',
    output: {
      filename: component.name + '-renovated-wrapper.js',
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: /node_modules/,
          use: [{
            loader: 'ts-loader',
            options: {
                configFile: __dirname + '/angular.tsconfig.json'
            }
          }, {
            loader: 'angular2-template-loader',
          }],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
  }));
  bundles.push(_.merge({}, configTemplate,{
      name: component.name + '-native',
      entry: './devextreme-renovated/artifacts/angular/renovation/' + component.path + '.js',
      output: {
        filename: component.name + '-native.js',
    },
  }));
  
  return bundles;
}, []);
