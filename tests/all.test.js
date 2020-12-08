const path  = require('path');

let testResults = [];

const getMemory = () => {
  return performance.memory.totalJSHeapSize;
}

const executeAction = (text) => {
  const button = document.querySelector('input[value="' + text + '"]');
  if(text && !button) {
    throw 'Action Button "' + text + '" is not found';
  }

  const start = performance.now();
  button.click();
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      resolve(performance.now() - start);
    })
  });
};

const meeasureMemory = async (name) => {
  await page._client.send('HeapProfiler.collectGarbage');
  const start = await page.evaluate(getMemory);

  if(name === 'Memory leaks') {
    await page.evaluate(executeAction, 'create');
    await page.evaluate(executeAction, 'clear');
  } else {
    await page.evaluate(executeAction, name.replace('Memory ', ''));
  }
  await page._client.send('HeapProfiler.collectGarbage');

  const end = await page.evaluate(getMemory);
  return end - start;
}

const measureAction = async (name) => {
  let times = [];
  const isMemoryTest = name.indexOf('Memory ') === 0;

  if(isMemoryTest) {
    await page._client.send('HeapProfiler.enable');
  }

  for(var i = 0; i < (isMemoryTest ? 3 : 20); i++) {
    await page.evaluate(executeAction, 'clear');
    if(name.indexOf('Option') === 0 || name.indexOf('Method') === 0) {
      await page.evaluate(executeAction, 'create');
    }
    let val;
    if(isMemoryTest) {
      val = await meeasureMemory(name);
    } else if(name === 'Clear') {
      await page.evaluate(executeAction, 'create');
      val = await page.evaluate(executeAction, 'clear');
    } else {
      val = await page.evaluate(executeAction, name);
    }
    times.push(val);
  }
  times.sort((a, b) => a - b);

  return times[0];
}

const testPerformance = async (name, framework, demoNames) => {
  const times = [];
  for(let i = 0; i < demoNames.length; i++) {
    let url = 'file:///' + path.resolve(`playground/jquery/html/${demoNames[i]}.html`);
    if(framework === 'react') {
      url = `http://localhost:8001/#/${demoNames[i].replace('-', '/')}`;
    }
    console.log(name, url);
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
  testResults.push([name + ' ' + framework].concat(times));
}

const logResults = () => {
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
  afterAll(logResults);
  [
    'Minimum options', 
    'Maximum options', 
    'With template',
    'Option icon change',
    'Option text change',
    'Option useInkRipple change',
    'Options full set change',
    'Method onFocus',
    'Memory create',
    'Memory leaks',
  ].forEach((name) => {
    ['jquery', 'react'].forEach((framework) => {
      it(`${name} ${framework}`, async () => {
        await testPerformance(name, framework, ['button-basic', 'button-renovated']);
      });
    });
  })
});

describe('CheckBox', () => {
  afterAll(logResults);
  [
    'Minimum options', 
    'Maximum options', 
    'With validation message',
    'Option text change',
    'Option useInkRipple change',
    'Method onFocus',
    'Options full set change',
    'Memory create',
    'Memory leaks',
  ].forEach((name) => {
    ['jquery'].forEach((framework) => {
      it(`${name} ${framework}`, async () => {
        await testPerformance(name, framework, ['check_box-basic', 'check_box-renovated']);
      });
    });
  })
});