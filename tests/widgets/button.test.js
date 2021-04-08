const { testPerformance, logResults } = require('../helpers/performance');

describe('Button', () => {
  afterAll(logResults);
  [
    'Minimum options',
    'Cold Minimum options',
    'Maximum options',
    'Cold Maximum options',
    'With template',
    'Cold With template',
    'Option icon change',
    'Option text change',
    'Option useInkRipple change',
    'Options full set change',
    'Method onFocus',
    'Memory create',
    'Memory leaks',
  ].forEach((name) => {
    ['jquery', 'react', 'vue', 'angular'].forEach((framework) => {
      it(`${name} ${framework}`, async () => {
        await testPerformance(name, framework, ['button-basic', 'button-renovated']);
      });
    });
  })
});
