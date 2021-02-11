import Tester from './tester';

const tester = new Tester('dxBullet', 200, {
    startScaleValue: 0,
    endScaleValue: 35,
    value: 23,
    target: 20,
    color: '#ebdd8f'
});

tester.addPerformanceTest('Minimum options', {
    initialOptions: {
        startScaleValue: 0,
        endScaleValue: 35,
        value: 23,
        target: 20,
        color: '#ebdd8f'
    }
});
