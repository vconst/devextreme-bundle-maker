const path  = require('path');

let testResults = [];

const executeAction = (text) => {
  var $button = $(`input[value="${text}"]`);
  if(!$button.length) {
    throw `Action Button "${text}" is not found`;
  }

  var startTime = performance.now();
  $button.click();
  return performance.now() - startTime;
};

const measureAction = async (name) => {
  const times = [];
  for(var i = 0; i < 20; i++) {
    await page.evaluate(executeAction, 'clear');
    if(name.indexOf('Option') === 0 || name.indexOf('Method') === 0) {
      await page.evaluate(executeAction, 'create');
    }
    const val = await page.evaluate(executeAction, name);
    times.push(val);
  }
  times.sort((a, b) => a - b);

  return times[0/*Math.floor(times.length / 2)*/];
}

const testPerformance = async (name, demoNames) => {
  const times = [];
  for(let i = 0; i < demoNames.length; i++) {
    const url = 'file:///' + path.resolve(`playground/jquery/testBundles/${demoNames[i]}.html`);
    await page.goto(url);
    const time = await measureAction(name);
    times.push(+time.toFixed(3));
  }

  for(let i = 1; i < demoNames.length; i++) {
    const ratio = +(times[i] / times[0]).toFixed(3);
    times.push(Math.round((ratio - 1) * 100));
  }

  if(!testResults.length) {
    testResults.push(['name'].concat(demoNames).concat(demoNames.slice(1).map((name) => name + ' diff %')));
  }
  testResults.push([name].concat(times));
}

const afterAllHandler = () => {
  const names = testResults[0];
  console.table(testResults.slice(1).map((times) => {
    const result = {};
    names.forEach((name, index) => {
      result[name] = times[index];
    })
    return result;
  }));

  testResults = [];
};

describe('Button', () => {
  afterAll(afterAllHandler);
  [
    'Minimum options', 
    'Maximum options', 
    'With template',
    'Option icon change',
    'Option text change',
    'Option useInkRipple change',
    'Method onFocus',
    'Options full set change'
  ].forEach((name) => {
    it(name, async () => {
      await testPerformance(name, ['button-basic', 'button-renovated']);
    });
  })
});

describe('CheckBox', () => {
  afterAll(afterAllHandler);
  [
    'Minimum options', 
    'Maximum options', 
    'With validation message',
    'Option text change',
    'Option useInkRipple change',
    'Method onFocus',
    'Options full set change'
  ].forEach((name) => {
    it(name, async () => {
        await testPerformance(name, ['check_box-basic', 'check_box-renovated']);
    });
  })
});