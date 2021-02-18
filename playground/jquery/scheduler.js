import Tester from './tester';

function generateResources(count) {
    var resources = [];

    for(var i = 0; i < count; ++i) {
        resources.push({
        id: i,
        text: `Resource ${i}`,
        });
    }

    return resources;
};

function getSchedulerOptions(resourceCount, renovatedRender) {
    return {
        height: 600,
        renovateRender: renovatedRender,
        views: [{
            type: "workWeek",
            groupOrientation: "vertical"
        }],
        currentView: "workWeek",
        showAllDayPanel: false,
        groups: ["resourceId"],
        resources: [{
            fieldExpr: "resourceId",
            dataSource: generateResources(resourceCount)
        }],
        scrolling: {
            // mode: renovatedRender ? 'virtual' : 'standard'
        },
    }
}

const tester = new Tester('dxScheduler', 1, { });

tester.addPerformanceTest('10 resources without renovatedRender', {
    initialOptions: getSchedulerOptions(10, false)
});

tester.addPerformanceTest('10 resources with renovatedRender', {
    initialOptions: getSchedulerOptions(10, true)
});

