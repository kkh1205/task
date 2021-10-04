
const Excel = require('exceljs');

// 관리 객체
const workbook = new Excel.Workbook();
// 엑셀 시트 생성
const sheet = workbook.addWorksheet('Test1');
// 열 정의
sheet.columns = [
    {header:'maker'},
    {header:'1월'},
    {header:'2월'},
    {header:'3월'},
    {header:'4월'},
    {header:'5월'},
    {header:'6월'},
    {header:'7월'},
    {header:'8월'},
    {header:'9월'},
    {header:'10월'},
    {header:'11월'},
    {header:'12월'},
];
// 행 생성
sheet.addRows([
    ['현대',2500,3000,4000,3000,3700,2800,5000,7500,3400,2200,1300,1000],
    ['기아',2400,2500,3000,2800,4000,3200,4800,6100,2800,2000,1400,1200]
]);
// 파일로 출력
workbook.xlsx.writeFile('./Test.xlsx').then(_=>{
    console.log('완료');
}).catch(_=>{
    console.log('실패');
});

// node .\exceltest.js 실행 시 엑셀파일 생성