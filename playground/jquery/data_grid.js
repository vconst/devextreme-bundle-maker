import Tester from './tester';

const tester = new Tester('dxDataGrid', 5, { });

const generateData = (rowCount, columnCount) => {
    const items = [];
    for(var i = 0; i < rowCount; i++) {
        items.push({ id: i });
    
        for(var j = 0; j < columnCount - 1; j++) {
            items[i]['column' + j] = i + j;
        }
    }
    return items;
}


tester.addPerformanceTest('Empty', {
    initialOptions: { 
        loadingTimeout: 0
    }
});

tester.addPerformanceTest('1 column with 100 items', {
    initialOptions: {
        loadingTimeout: 0,
        dataSource: generateData(100, 1)
    }
});

tester.addPerformanceTest('10 columns with 100 items', {
    initialOptions: {
        loadingTimeout: 0,
        dataSource: generateData(100, 10)
    }
});

tester.addPerformanceTest('1 column with pager options', {
    initialOptions: {
        loadingTimeout: 0,
        dataSource: generateData(100, 1),
        pager: {
            visible: true,
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        }
    }
});