const path  = require('path');

const testResults = [];

const executeAction = (text) => {
  var $button = $('input[value="' + text + '"]');
  if(!$button.length) {
    throw 'Action Button "' + text + '" is not found';
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
    const url = 'file:///' + path.resolve(`playground/jquery/${demoNames[i]}.html`);
    await page.goto(url);
    const time = await measureAction(name);
    times.push(+time.toFixed(3));
  }

  for(let i = 1; i < demoNames.length; i++) {
    times.push(+(times[0] / times[i]).toFixed(3));
  }

  if(!testResults.length) {
    testResults.push(['name'].concat(demoNames).concat(demoNames.slice(1).map((name) => name + ' ratio')));
  }
  testResults.push([name].concat(times));

  // await expect(times).toEqual('[basic,renovated,ratio]');
}


describe('Button', () => {
  afterAll(() => {
    const names = testResults[0];
    console.table(testResults.slice(1).map((times) => {
      const result = {};
      names.forEach((name, index) => {
        result[name] = times[index];
      })
      return result;
    }));
  });
  [
    'Minimum options', 
    'Maximum options', 
    'With template',
    'Option icon',
    'Option text',
    'Option useInkRipple',
    'Method onFocus'
  ].forEach((name) => {
    it(name, async () => {
      await testPerformance(name, ['button-basic', 'button-renovated']);
    });
  })
});