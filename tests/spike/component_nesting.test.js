const { testPerformance, logResults } = require('../helpers/performance');

describe('Component Nesting', () => {
  afterAll(logResults);
  [
    'inline', 
    'one level',
    'two level',
    'three level',
  ].forEach((name) => {
     ['jquery', 'react', 'vue'].forEach((framework) => {
      it(`${name} ${framework}`, async () => {
        await testPerformance(name, framework, ['component_nesting_page']);
      });
    });
  })
});