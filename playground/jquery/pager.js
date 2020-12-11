import Tester from './tester';

const tester = new Tester('dxPager', 200, { });

tester.addPerformanceTest('Minimum options', {
    initialOptions: { }
});
