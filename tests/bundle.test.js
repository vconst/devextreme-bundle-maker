const { logResults, log } = require('./helpers/performance');

const fs = require("fs");

log(['name', 'basic', 'renovated', 'native', 'renovated %', 'native %']);

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

  log([widgetName + ' size ' + framework].concat(times));
}

describe('Bundle sizes', () => {
  afterAll(logResults);
  [
    'button', 
    'check_box',
    'pager'
  ].forEach((widget) => {
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