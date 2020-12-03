const RUN_COUNT = 200;
let widgets = [];

const clearWorkspace = () => {
    $(workspace).empty();
}

const performanceTest = (testName, initialOptions, updateOptions, methodName, runCustomCode) => {
    if(initialOptions) {
        clearWorkspace();
    }

    if(initialOptions) {
      for (let i = 0; i < RUN_COUNT; i++) {
            widgets.push($('<div>').appendTo(workspace).dxButton(initialOptions).dxButton('instance'));
        }
    }
        
    if (updateOptions) {
        widgets.forEach((widget) => {
            widget.option(Object.assign(
                updateOptions,
            ));
        });
    }

    if (methodName) {
        widgets.forEach((widget) => {
            widget[methodName]();
        });
    }

    if (runCustomCode) {
        runCustomCode();
    }
};

// ============================

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords); // console.log(изменения)
    console.timeLog('Time');
});

const startTime = () => {
    observer.observe(rootElement, {
        childList: true, // наблюдать за непосредственными детьми
        subtree: true, // и более глубокими потомками
        characterDataOldValue: true,// передавать старое значение в колбэк
        attributes: true,
    });
    console.time('Time');
};

const addTest = (text, handler) => {
    $('<input type="button">')
        .val(text)
        .appendTo('#test-buttons')
        .on('click', handler);
};

const addPerformanceTest = (text, updateOptions, methodName, runCustomCode) => {
    addTest(text, () => {
        performance.mark("start");
        console.time(text);
        performanceTest(text, updateOptions, methodName, runCustomCode);
        console.timeEnd(text);
        performance.mark("end")
        performance.measure(text, 'start', 'end');
    })
}

addTest('clear', clearWorkspace);

addTest('create', () => {
    for (let i = 0; i < RUN_COUNT; i++) {
        widgets.push($('<div>')
            .appendTo(workspace)
            .dxButton({ text: 'button' }).dxButton('instance'));
    }
});

// console.log(window.performance.memory);

addPerformanceTest('Minimum options', { text: 'button' });

addPerformanceTest('Maximum options', {
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
);

addPerformanceTest('With template', {
        text: 'button',
        template: function () {
            return $("<div>").text("Button Template");
        }
    }
);

addPerformanceTest('Option icon', null,/*{ text: 'button' },*/ { icon: 'download' });

addPerformanceTest('Option text', null,/*{ text: 'button' },*/ { text: 'New Button Text' });

addPerformanceTest('Option useInkRipple', null,/*{ text: 'button' },*/ { useInkRipple: true });

addPerformanceTest('Method onFocus', null,/*{ text: 'button' },*/ undefined, 'focus');

