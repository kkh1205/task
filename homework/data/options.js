// chart option. highcharts library가 참조되는 option이 많아 다 옮기지 못함.

var pline = [
    {
        /* 이벤트 발생 시 표시 할 라인입니다. */
        color: 'red',
        dashStyle: 'dot',
        width: 1,
        value: 3,
        label: 
        {
            rotation: 0,
            /* 라벨 회전 */
            y: 45,
            /* 라벨 위치 이동 */
            style: 
            {
                fontSize: '10px'
            },
            text: '코로나로 공장 정지'
        }
    },
    {
        color: 'red',
        dashStyle: 'dot',
        width: 1,
        value: 5,
        label: 
        {
            y: 20,
            style: 
            {
                fontSize: '10px'
            },
            text: '미국공장화재'
        }

    },
    {
        color: 'red',
        dashStyle: 'dot',
        width: 1,
        value: 6,
        label: 
        {
            y: 5,
            style:
            {
                fontSize: '10px'
            },
            text: '대만공장화재'
        }
    }
]


// -------------------- tree ---------------------

$(function treeset() {
    $('#tree').jstree({
        'core': 
        {
            'themes': 
            {
                'icons': false /* jstree적용 시 리스트마다 생성되는 폴더 아이콘 삭제 */
            },
            'data': isTree
        },
        'checbox': 
        {
            'keep_selected_style': false
        },
        'plugins': [
            'checkbox'
        ]
    });
});

// -------------- set grid -------------

$(function () {
    var grid =
        $("#jsGrid").jsGrid({
            width: "100%",
            sorting: true,
            autoload: true,
            headerRowRenderer: function () {
                var $result = $("<tr>").height(0)
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"))
                    .append($("<tr>").width("100/13%"));

                $result = $result.add($("<tr>")
                    .append($("<th class='jsgrid-cell'>").attr("rowspan", 2).text("메이커")
                        .height(40))
                    .append($("<th class='jsgrid-cell'>").attr("colspan", 3).text("1분기"))
                    .append($("<th class='jsgrid-cell'>").attr("colspan", 3).text("2분기"))
                    .append($("<th class='jsgrid-cell'>").attr("colspan", 3).text("3분기"))
                    .append($("<th class='jsgrid-cell'>").attr("colspan", 3).text("4분기")));

                $result = $result.add($("<tr>")
                    .append($("<th class='jsgrid-cell'>").text("1월"))
                    .append($("<th class='jsgrid-cell'>").text("2월"))
                    .append($("<th class='jsgrid-cell'>").text("3월"))
                    .append($("<th class='jsgrid-cell'>").text("4월"))
                    .append($("<th class='jsgrid-cell'>").text("5월"))
                    .append($("<th class='jsgrid-cell'>").text("6월"))
                    .append($("<th class='jsgrid-cell'>").text("7월"))
                    .append($("<th class='jsgrid-cell'>").text("8월"))
                    .append($("<th class='jsgrid-cell'>").text("9월"))
                    .append($("<th class='jsgrid-cell'>").text("10월"))
                    .append($("<th class='jsgrid-cell'>").text("11월"))
                    .append($("<th class='jsgrid-cell'>").text("12월"))
                );
                return $result;
            },
            fields: [
                {
                    name: "CarMaker",
                    type: "text",
                    width: "100/13%"
                },
                {
                    name: "M1",
                    type: "number",
                    width: "100/13%"
                },
                {
                    name: "M2",
                    type: "number",
                    width: "100/13%"
                },
                {
                    name: "M3",
                    type: "number",
                    width: "100/13%"
                },
                {
                    name: "M4",
                    type: "number",
                    width: "100/13%"
                },
                {
                    name: "M5",
                    type: "number",
                    width: "100/13%"
                },
                {
                    name: "M6",
                    type: "number",
                    width: "100/13%"
                },
                {
                    name: "M7",
                    type: "number",
                    width: "100/13%"
                },
                {
                    name: "M8",
                    type: "number",
                    width: "100/13%"
                },
                {
                    name: "M9",
                    type: "number",
                    width: "100/13%"
                },
                {
                    name: "M10",
                    type: "number",
                    width: "100/13%"
                },
                {
                    name: "M11",
                    type: "number",
                    width: "100/13%"
                },
                {
                    name: "M12",
                    type: "number",
                    width: "100/13%"
                },
            ],
            data: []
        });
});


// set excel export

function exportExcel() {
    // ArrayBuffer 만들어주는 함수
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
        var view = new Uint8Array(buf); //create uint8array as viewer
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
        return buf;
    }

    // workbook 생성
    var wb = XLSX.utils.book_new();

    // 문서 속성세팅 ( 윈도우에서 엑셀 오른쪽 클릭 속성 -> 자세히에 있는 값들
    // 필요 없으면 안써도 괜찮다.
    // wb.Props = {
    //     Title: "title",
    //     Subject: "subject",
    //     Author: "programmer93",
    //     Manager: "Manager",
    //     Company: "Company",
    //     Category: "Category",
    //     Keywords: "Keywords",
    //     Comments: "Comments",
    //     LastAuthor: "programmer93",
    //     CreatedDate: new Date()
    // };

    // sheet명 생성
    wb.SheetNames.push("sheet 1");
    // wb.SheetNames.push("sheet 2"); // 시트가 여러개인 경우

    // 데이터 뽑기 전역변수 excelData 사용

    let checkExData = [
        ['메이커', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
    ];
    excelData.forEach((item) => {
        checkExData.push([item.CarMaker,
            parseInt(item.M1), parseInt(item.M2), parseInt(item.M3), parseInt(item.M4),
            parseInt(item.M5), parseInt(item.M6), parseInt(item.M7), parseInt(item.M8),
            parseInt(item.M9), parseInt(item.M10), parseInt(item.M11), parseInt(item.M12)
        ]);
    });

    console.log(checkExData);

    // 이중 배열 형태로 데이터가 들어간다.
    var wsData = checkExData;
    // var wsData2 = [['가1' , '가2', '가3'],['나1','나2','나3']];	// 시트가 여러개인 경우

    // 배열 데이터로 시트 데이터 생성
    var ws = XLSX.utils.aoa_to_sheet(wsData);
    // var ws2 = XLSX.utils.aoa_to_sheet(wsData2); 	//시트가 여러개인 경우

    // 시트 데이터를 시트에 넣기 ( 시트 명이 없는 시트인경우 첫번째 시트에 데이터가 들어감 )
    wb.Sheets["sheet 1"] = ws;
    // wb.Sheets["sheet 2"] = ws2;	//시트가 여러개인 경우

    // 엑셀 파일 쓰기
    var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        type: 'binary'
    });

    // 파일 다운로드
    saveAs(new Blob([s2ab(wbout)], {
        type: "application/octet-stream"
    }), '엑셀_다운로드.xlsx');
}

var excelData = {}
excelData = isGrid;