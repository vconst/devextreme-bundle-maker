const { testPerformance, logResults } = require('../helpers/performance');

describe('Plugins', () => {
  afterAll(logResults);
  [
    'without plugins', 
    'with plugins',
    'without plugins with postfix',
    'with plugins with postfix'
  ].forEach((name) => {
    [
      // 'jquery',
      'react', 
      // 'vue',
      // 'angular',
    ].forEach((framework) => {
      it(`${name} ${framework}`, async () => {
        await testPerformance(name, framework, ['plugins_page']);
      });
    });
  })
});