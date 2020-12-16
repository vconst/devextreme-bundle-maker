const path  = require('path');
var fs = require("fs");

const testResults = [];

const testBundle = (widgetName, framework, bundlePostfixes) => {
  const times = [];

  for(let i = 0; i < 3; i++) {
    console.log(`./bundles/${framework}/${widgetName}${bundlePostfixes[i]}.js`);
    
    try {
      const stats = fs.statSync(`./bundles/${framework}/${widgetName}${bundlePostfixes[i]}.js`);
      times.push(stats.size);
    } catch(e) {
      times.push(0);
    }
  }

  for(let i = 1; i < 3; i++) {
    const ratio = +(times[i] / times[0]).toFixed(3);
    times.push(Math.round((ratio - 1) * 100));
  }

  if(!testResults.length) {
    testResults.push(['name', 'basic', 'renovated', 'native', 'renovated %', 'native %']);
  }
  testResults.push([widgetName + ' ' + framework].concat(times));
}

const logResults = () => {
  const names = testResults[0];
  console.log(testResults);
  console.table(testResults.slice(1).map((times) => {
    const result = {};
    names.forEach((name, index) => {
      result[name] = times[index] ?? 0;
    })
    return result;
  }));

  testResults = [];
};

describe('Bundle sizes', () => {
  afterAll(logResults);
  [
    'button', 
    'check_box',
    'pager'
  ].forEach((widget, widgetIndex) => {
    ['jquery', 'angular', 'react', 'vue'].forEach((framework) => {
      if(framework !== 'jquery' && widget === 'pager') {
        return;
      }
      it(`${widget} ${framework}`, () => {
        console.log(`${widget} ${framework}`);
        const bundlePostfixes = framework === 'jquery' 
          ? ['-basic', '-renovated'] 
          : ['-wrapper', '-renovated-wrapper', '-native'];
        testBundle(widget, framework, bundlePostfixes);
      });
    });
  })
});