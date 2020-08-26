const _ = require('lodash');
const components = require('./components.json').components;

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
  }));
  bundles.push(_.merge({}, configTemplate,{
      name: component.name + '-basic',
      entry: './devextreme/artifacts/transpiled/ui/' + component.name + '.js',
      output: {
        filename: component.name + '-basic.js',
    },
  }));
  
  return bundles;
}, []);
