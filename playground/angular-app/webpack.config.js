module.exports = [
  {
  devtool: false,
  name: "current",
  entry: "./src/app/entry.ts",
  // optimization: {
  //    	minimize: false
  //  },
  output: {
      path: __dirname + '/src/app',
      filename: "current.js",
      libraryTarget: 'commonjs2'
  },
  externals: {
    'angular': 'window.angular',
    '@angular/core': '@angular/core',
    '@angular/common': '@angular/common'
  }
},
{
  devtool: false,
  name: "renovated",

  entry: "../DevExtreme/artifacts/angular/renovation/button.js",
  output: {
      path: __dirname + '/src/app',
      filename: "renovated.js",
      libraryTarget: 'commonjs2'
  },

  externals: {
    'angular': 'window.angular',
    '@angular/core': '@angular/core',
    '@angular/common': '@angular/common'
  }
},
{
  devtool: false,
  name: "renovated-wrapper",
  entry: "../devextreme-angular/npm/dist/fesm2015/devextreme-angular-ui-button.js",
  output: {
      path: __dirname + '/src/app',
      filename: "renovated-wrapper.js",
      libraryTarget: 'commonjs2'
  },

  externals: {
    'angular': 'window.angular',
    '@angular/core': '@angular/core',
    '@angular/common': '@angular/common'
  }
}
];




