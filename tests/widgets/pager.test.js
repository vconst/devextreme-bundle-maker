const { testPerformance, logResults } = require('../helpers/performance');

describe('Pager', () => {
  afterAll(logResults);
  [
    'Minimum options', 
  ].forEach((name) => {
    ['jquery'].forEach((framework) => {
      it(`${name} ${framework}`, async () => {
        await testPerformance(name, framework, ['pager-basic', 'pager-renovated']);
      });
    });
  })
});