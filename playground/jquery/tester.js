const BUTTONS_ID = 'test-buttons';

export default class Tester {
    constructor(widgetName, instancesCount, defaultInitialOptions) {
        this.widgetName = widgetName;
        this.instancesCount = instancesCount;
        this.instances = [];

        this.addCommonTests(defaultInitialOptions);
    }

    addCommonTests(defaultInitialOptions) {
        this.addTest('clear', () => { this.clearWorkspace() });
    
        this.addTest('create', () => {
            this.createInstances(defaultInitialOptions);
        });
        
        this.addPerformanceTest('Method onFocus', {
            methodName: 'focus'
        });
    };

    clearWorkspace() {
        this.instances.forEach(instance => {
            instance.dispose();
        });
        this.instances = [];
        $(workspace).empty();
    }
    
    createInstances(initialOptions) {
        for (let i = 0; i < this.instancesCount; i++) {
            this.instances.push($('<div>')
                .appendTo(workspace)
                [this.widgetName](initialOptions)
                [this.widgetName]('instance')
            );
        }
    }
    
    performanceTest(testName, config) {
        const { initialOptions, updateOptions, methodName, runCustomCode } = config;
    
        if(initialOptions) {
            this.clearWorkspace();
            this.createInstances(initialOptions);
        }
            
        if (updateOptions) {
            this.instances.forEach((widget) => {
                widget.option(Object.assign(
                    updateOptions,
                ));
            });
        }
    
        if (methodName) {
            this.instances.forEach((widget) => {
                widget[methodName]();
            });
        }
    
        if (runCustomCode) {
            runCustomCode();
        }
    }
    
    addTest(text, handler) {
        $('<input type="button">')
            .val(text)
            .appendTo(`#${BUTTONS_ID}`)
            .on('click', handler);
    }
    
    addPerformanceTest(text, config) {
        this.addTest(text, () => {
            performance.mark("start");
            console.time(text);
            this.performanceTest(text, config);
            console.timeEnd(text);
            performance.mark("end")
            performance.measure(text, 'start', 'end');
        })
    }
};