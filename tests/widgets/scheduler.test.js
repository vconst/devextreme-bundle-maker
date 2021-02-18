const { testPerformance, logResults } = require('../helpers/performance');

describe('Scheduler', () => {
  afterAll(logResults);
  [
    '10 resources without renovatedRender',
    '10 resources with renovatedRender',
    'Memory create',
    'Memory leaks',
  ].forEach((name) => {
    ['jquery'].forEach((framework) => {
      it(`${name} ${framework}`, async () => {
        await testPerformance(name, framework, [
          'scheduler-basic'
        ]);
      });
    });
  })
});