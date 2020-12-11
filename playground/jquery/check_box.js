import Tester from './tester';

const tester = new Tester('dxCheckBox', 200, { value: true });

tester.addPerformanceTest('Minimum options', {
    initialOptions: { value: true }
});

tester.addPerformanceTest('Maximum options', {
    initialOptions: {
        value: true,
        text: 'checkBox',
        accessKey: 'c',
        activeStateEnabled: true,
        disabled: false,
        elementAttr: { 'data-fake': 123 },
        hint: 'text hint',
        value: true,
        onValueChanged: () => undefined,
        onContentReady: () => undefined,
        rtlEnabled: true,
        tabIndex: 1,
        width: 100,
        height: '40'
    }
});

tester.addPerformanceTest('With validation message', {
    initialOptions: {
        validationErrors: [{
            message: 'required',
        }],
        isValid: false,
        validationStatus: 'invalid',
        validationMessage: 'it is required'
    }
});

tester.addPerformanceTest('Option text change', {
    updateOptions: { text: 'New CheckBox Text' }
});

tester.addPerformanceTest('Option value change', {
    updateOptions: { value: false }
});

tester.addPerformanceTest('Option useInkRipple change', {
    updateOptions: { useInkRipple: true }
});

tester.addPerformanceTest('Options full set change', {
    updateOptions: {
        text: 'checkBox',
        accessKey: 'c',
        activeStateEnabled: true,
        disabled: false,
        elementAttr: { 'data-fake': 123 },
        hint: 'text hint',
        value: true,
        onValueChanged: () => undefined,
        onContentReady: () => undefined,
        rtlEnabled: true,
        tabIndex: 1,
        width: 100,
        height: '40'
    }
});