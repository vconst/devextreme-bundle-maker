const _ = require('lodash');
const components = require('./components.json').components;

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    '@angular/platform-browser': '@angular/platform-browser',
    'devextreme-angular/core': './devextreme-angular-core.js'
  }
};

module.exports = components.reduce((bundles, component) => {
  if(!component.private) {
    bundles.push(_.merge({}, configTemplate, {
      name: component.name + '-wrapper',
      entry: './devextreme-angular/packages/devextreme-angular/npm/dist/fesm2015/devextreme-angular-ui-' + component.wrapperName + '.js',
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
      entry: './devextreme-angular-renovated/packages/devextreme-angular/npm/dist/fesm2015/devextreme-angular-ui-' + component.wrapperName + '.js',
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
  }

  if(component.ignoreFrameworks && component.ignoreFrameworks.indexOf('angular') >= 0) return bundles;
  if(component.renovated === false) return bundles;

  const nativePostfix = component.spike ? '' : '-native';
  bundles.push(_.merge({}, configTemplate,{
    name: component.name + '-native',
    entry: './devextreme-renovated/artifacts/angular/renovation/' + component.path + '.js',
    output: {
      filename: component.name + nativePostfix + '.js',
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: component.name + nativePostfix + '.html'
      })
    ]
  }));
  
  return bundles;
}, []);
