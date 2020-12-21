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
  let max = 0;

  if(name === 'Memory leaks') {
    await page.evaluate(executeAction, 'create');
    await page._client.send('HeapProfiler.collectGarbage');
    max = await page.evaluate(getMemory);
    await page.evaluate(executeAction, 'clear');
  } else {
    await page.evaluate(executeAction, name.replace('Memory ', ''));
  }
  await page._client.send('HeapProfiler.collectGarbage');

  const end = await page.evaluate(getMemory);
  const diff = end - start;
  return max ? diff / (max - start) : diff;
}

const measureAction = async (name) => {
  let times = [];
  const isMemoryTest = name.indexOf('Memory ') === 0;

  if(isMemoryTest) {
    await page._client.send('HeapProfiler.enable');
  }

  for(var i = 0; i < (isMemoryTest ? 5 : 20); i++) {
    await page.evaluate(executeAction, 'clear');
    if(name.indexOf('Option') === 0 || name.indexOf('Method') === 0) {
      await page.evaluate(executeAction, 'create');
    }
    let val;
    if(isMemoryTest) {
      val = await meeasureMemory(name);
      if(val < 0) {
        continue;
      }
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

exports.testPerformance = async (name, framework, demoNames) => {
  const times = [];
  for(let i = 0; i < demoNames.length; i++) {
    let port;
    if(framework === 'react') {
      port = 8001;
    } else if(framework === 'vue') {
      port = 8002;
    }
    let url = 'file:///' + path.resolve(`playground/jquery/html/${demoNames[i]}.html`);
    if(port) {
      url = `http://127.0.0.1:${port}/#/${demoNames[i].replace('-', '/')}`;
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

exports.logResults = () => {
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