const _ = require('lodash');
const components = require('./components.json').components;

const configTemplate = {
  devtool: false,
  output: {
    path: __dirname + '/bundles/react',
    libraryTarget: 'commonjs2'
  },
  optimization: {
     minimize: false
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
};

module.exports = components.reduce((bundles, component) => {
  if(component.private) {
    return;
  }

  bundles.push(_.merge({}, configTemplate, {
    name: component.name + '-wrapper',
    entry: './devextreme-react/npm/' + component.wrapperName + '.js',
    output: {
      filename: component.name + '-wrapper.js',
    },
  }));
  bundles.push(_.merge({}, configTemplate, {
    name: component.name + '-renovated',
    entry: './devextreme-react-renovated/npm/' + component.wrapperName + '.js',
    output: {
      filename: component.name + '-renovated-wrapper.js',
    },
  }));
  bundles.push(_.merge({}, configTemplate,{
      name: component.name + '-native',
      entry: './devextreme-renovated/artifacts/react/renovation/' + component.path + '.tsx',
      output: {
        filename: component.name + '-native.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [{
            loader: 'ts-loader',
            options: {
                configFile: __dirname + '/react.tsconfig.json'
            }
          }],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
  }));
  
  return bundles;
}, []);
