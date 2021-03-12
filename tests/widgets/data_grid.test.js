const { testPerformance, logResults } = require('../helpers/performance');

describe('DataGrid', () => {
  afterAll(logResults);
  [
    'Empty',
    '1 column with 100 items',
    '10 columns with 100 items',
    'Cold 10 columns with 100 items',
    '1 column with pager options',
    'Cold 1 column with pager options',
  ].forEach((name) => {
    ['jquery'].forEach((framework) => {
      it(`${name} ${framework}`, async () => {
        await testPerformance(name, framework, ['data_grid-basic', 'data_grid-renovated']);
      });
    });
  })
});