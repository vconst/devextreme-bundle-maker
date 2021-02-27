const { testPerformance, logResults } = require('../helpers/performance');

describe('Bullet', () => {
  afterAll(logResults);
  [
    'Minimum options',
    'Memory create',
    'Memory leaks',
  ].forEach((name) => {
    ['jquery', 'react', /*'vue', 'angular'*/].forEach((framework) => {
      it(`${name} ${framework}`, async () => {
        await testPerformance(name, framework, ['bullet-basic', 'bullet-renovated']);
      });
    });
  })
});