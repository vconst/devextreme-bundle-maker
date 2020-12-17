const { testPerformance, logResults } = require('../helpers/performance');

describe('CheckBox', () => {
  afterAll(logResults);
  [
    'Minimum options',
    'Option value change',
    //'Maximum options', 
    //'With validation message',
    //'Option text change',
    //'Option useInkRipple change',
    //'Method onFocus',
    //'Options full set change',
    'Memory create',
    'Memory leaks',
  ].forEach((name) => {
    ['jquery', 'react', 'vue'].forEach((framework) => {
      it(`${name} ${framework}`, async () => {
        await testPerformance(name, framework, ['check_box-basic', 'check_box-renovated']);
      });
    });
  })
});