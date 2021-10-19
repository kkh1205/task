var Data = [
    // grid data
    {
        id: '1Htree',
        CarMaker: "현대",
        M1: 2500,
        M2: 3000,
        M3: 4000,
        M4: 3000,
        M5: 3700,
        M6: 2800,
        M7: 5000,
        M8: 7500,
        M9: 3400,
        M10: 2200,
        M11: 1300,
        M12: 1000
    }, {
        id: '2Ktree',
        CarMaker: "기아",
        M1: 2400,
        M2: 2500,
        M3: 3000,
        M4: 2800,
        M5: 4000,
        M6: 3200,
        M7: 4800,
        M8: 6100,
        M9: 2800,
        M10: 2000,
        M11: 1400,
        M12: 1200
    }, {
        id: '3Ttree',
        CarMaker: "테슬라",
        M1: 2800,
        M2: 3000,
        M3: 2900,
        M4: 3100,
        M5: 2500,
        M6: 3400,
        M7: 5000,
        M8: 5500,
        M9: 6700,
        M10: 7000,
        M11: 7700,
        M12: 6500
    }, {
        id: '4Htree1',
        CarMaker: "현대1",
        M1: 2500,
        M2: 3000,
        M3: 4000,
        M4: 3000,
        M5: 3700,
        M6: 2800,
        M7: 5000,
        M8: 7500,
        M9: 3400,
        M10: 2200,
        M11: 1300,
        M12: 1000
    }, {
        id: '5Ktree1',
        CarMaker: "기아1",
        M1: 2500,
        M2: 3000,
        M3: 4000,
        M4: 3000,
        M5: 3700,
        M6: 2800,
        M7: 5000,
        M8: 7500,
        M9: 3400,
        M10: 2200,
        M11: 1300,
        M12: 1000
    }, {
        id: '6Ttree1',
        CarMaker: "테슬라1",
        M1: 2500,
        M2: 3000,
        M3: 4000,
        M4: 3000,
        M5: 3700,
        M6: 2800,
        M7: 5000,
        M8: 7500,
        M9: 3400,
        M10: 2200,
        M11: 1300,
        M12: 1000
    }, {
        id : '7Mtree',
        CarMaker: "반도체",
        M1: 9800,
        M2: 9500,
        M3: 9750,
        M4: 7000,
        M5: 6830,
        M6: 6000,
        M7: 3200,
        M8: 3100,
        M9: 2840,
        M10: 2700,
        M11: 2230,
        M12: 1400
    },

    // tree data

    {
        id: 'Korea',
        parent: '#',
        text: '국산차',
        state: 
        {
            selected: true
        }
    }, 
    {
        id: 'import',
        parent: '#',
        text: '수입차',
        state: {
            selected: true
        }
    }, 
    {
        id: '1Htree',
        parent: 'Korea',
        text: '현대'
    }, {
        id: '2Ktree',
        parent: 'Korea',
        text: '기아'
    }, {
        id: '3Ttree',
        parent: 'import',
        text: '테슬라'
    }, {
        id: '4Htree1',
        parent: 'Korea',
        text: '현대1'
    }, {
        id: '5Ktree1',
        parent: 'Korea',
        text: '기아1'
    }, {
        id: '6Ttree1',
        parent: 'import',
        text: '테슬라1'
    }, {
        id : '7Mtree',
        parent: '#',
        text: '반도체',
        state: {
            selected: true
        }
    },

    // chart data

    {
        id : '1Htree',
        type: 'column',
        name: '현대',
        color: 'skyblue',
        sort: 0,
        data: [2500, 3000, 4000, 3000, 3700, 2800, 5000, 7500, 3400, 2200, 1300, 1000],
        stack: '0' /* stack이 데이터값을 분류해줍니다. */
    }, {
        id : '2Ktree',
        type: 'column',
        name: '기아',
        color: 'gray',
        sort: 1,
        data: [2400, 2500, 3000, 2800, 4000, 3200, 4800, 6100, 2800, 2000, 1400, 1200],
        stack: '0'
    }, {
        id : '3Ttree',
        type: 'column',
        name: '테슬라',
        color: '#E70D00',
        sort:2,
        data: [2800, 3000, 2900, 3100, 2500, 3400, 5000, 5500, 6700, 7000, 7700, 6500],
        stack: '0'
    }, {
        id : '4Htree1',
        type: 'column',
        name: '현대1',
        color: 'skyblue',
        sort:3,
        data: [2500, 3000, 4000, 3000, 3700, 2800, 5000, 7500, 3400, 2200, 1300, 1000],
        stack: '1',
        // showInLegend: true /* false : 범례에 표시하지 않음. */
    }, {
        id : '5Ktree1',
        type: 'column',
        name: '기아1',
        color: 'gray',
        sort:4,
        data: [2500, 3000, 4000, 3000, 3700, 2800, 5000, 7500, 3400, 2200, 1300, 1000],
        stack: '1',
        //showInLegend: true
    }, {
        id : '6Ttree1',
        type: 'column',
        name: '테슬라1',
        color: '#E70D00',
        sort:5,
        data: [2500, 3000, 4000, 3000, 3700, 2800, 5000, 7500, 3400, 2200, 1300, 1000],
        stack: '1',
        //showInLegend: true
    }, {
        id : '7Mtree',
        type: 'line',
        name: '아날로그 반도체',
        color: '#5062FF',
        sort:6,
        yAxis: 1,
        /* 두번째 y축 선택 */
        data: [9800, 9500, 9750, 7000, 6830, 6000, 3200, 3100, 2840, 2700, 2230, 1400],
        tooltip: {
            valueSuffix: ' EA'
        },
        dataLabels: {
            enabled: true /* 데이터라벨 표시 */
        },
        label: {
            enabled: false /* 라인그래프에 라벨 숨기기 */
        },
        zIndex: 1
    }
];

var backUp = JSON.parse(JSON.stringify(Data));

// ----------------Tree Data-------------------

function isTreeF(element) {
    if (element.text == '국산차' || element.text == '수입차' || element.text == '현대' || element.text == '기아' || element.text == '테슬라' || element.text == '현대1' || element.text == '기아1' || element.text == '테슬라1' || element.text == '반도체') {
        return true;
    }
}

var isTree = Data.filter(isTreeF);

console.log(isTree);

// ------------- Chart Data --------------

function isChartF(element) {
    if(element.name == '현대' || element.name == '기아' || element.name == '테슬라' || element.name == '현대1' || element.name == '기아1' || element.name == '테슬라1' || element.name == '아날로그 반도체') {
        return true;
    }
}

var isChart = Data.filter(isChartF);

console.log(isChart);

function isChartHF(element) {
    if(element.name == '현대') {
        return true;
    }
}

function isChartKF(element) {
    if(element.name == '기아') {
        return true;
    }
}

function isChartTF(element) {
    if(element.name == '테슬라') {
        return true;
    }
}

function isChartH1F(element) {
    if(element.name == '현대1') {
        return true;
    }
}

function isChartK1F(element) {
    if(element.name == '기아1') {
        return true;
    }
}

function isChartT1F(element) {
    if(element.name =='테슬라1') {
        return true;
    }
}

function isChartMF(element) {
    if(element.name == '아날로그 반도체') {
        return true;
    }
}

var isChartH = Data.filter(isChartHF);
var isChartK = Data.filter(isChartKF);
var isChartT = Data.filter(isChartTF);
var isChartH1 = Data.filter(isChartH1F);
var isChartK1 = Data.filter(isChartK1F);
var isChartT1 = Data.filter(isChartT1F);
var isChartM = Data.filter(isChartMF);

// -------------- Grid Data --------------

function isGridF (element) {
    if(element.CarMaker == '현대' || element.CarMaker == '기아' || element.CarMaker == '테슬라' || element.CarMaker == '현대1' || element.CarMaker == '기아1' || element.CarMaker == '테슬라1' || element.CarMaker == '반도체') {
        return true;
    }
}

var isGrid = Data.filter(isGridF);

console.log(isGrid);

function isGridH(element) {
    if(element.CarMaker == '현대') {
        return true;
    }
}

function isGridK(element) {
    if(element.CarMaker == '기아') {
        return true;
    }
}

function isGridT(element) {
    if(element.CarMaker == '테슬라') {
        return true;
    }
}

function isGridH1(element) {
    if(element.CarMaker == '현대1') {
        return true;
    }
}

function isGridK1(element) {
    if(element.CarMaker == '기아1') {
        return true;
    }
}

function isGridT1(element) {
    if(element.CarMaker == '테슬라1') {
        return true;
    }
}

function isGridM(element) {
    if(element.CarMaker == '반도체') {
        return true;
    }
}

var isGridH = Data.filter(isGridH);
var isGridK = Data.filter(isGridK);
var isGridT = Data.filter(isGridT);
var isGridH1 = Data.filter(isGridH1);
var isGridK1 = Data.filter(isGridK1);
var isGridT1 = Data.filter(isGridT1);
var isGridM = Data.filter(isGridM);
