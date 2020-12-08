import Tester from './tester';

const tester = new Tester('dxButton', 200, { text: 'button' });

tester.addPerformanceTest('Minimum options', {
    initialOptions: { text: 'button' }
});

tester.addPerformanceTest('Maximum options', {
    initialOptions: {
        text: 'button',
        icon: 'download',
        accessKey: 'c',
        activeStateEnabled: true,
        disabled: false,
        elementAttr: { 'data-fake': 123 },
        hint: 'text hint',
        onClick: () => undefined,
        rtlEnabled: true,
        tabIndex: 1,
        width: 100,
        height: '40'
    }
});

tester.addPerformanceTest('With template', {
    initialOptions: {
        text: 'button',
        template: function () {
            return $("<div>").text("Button Template");
        }
    }
});

tester.addPerformanceTest('Option icon change', {
    updateOptions: { icon: 'download' }
});

tester.addPerformanceTest('Option text change', {
    updateOptions: { text: 'New Button Text' }
});

tester.addPerformanceTest('Option useInkRipple change', {
    updateOptions: { useInkRipple: true }
});

tester.addPerformanceTest('Options full set change', {
    updateOptions: {
        text: 'button2',
        icon: 'download',
        accessKey: 'c',
        activeStateEnabled: true,
        disabled: false,
        elementAttr: { 'data-fake': 123 },
        hint: 'text hint',
        onClick: () => undefined,
        rtlEnabled: true,
        tabIndex: 1,
        width: 100,
        height: '40'
    }
});
