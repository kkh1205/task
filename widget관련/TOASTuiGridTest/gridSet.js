const grid = new tui.Grid({
    el: document.getElementById('grid'),
    data: gridData,
    scrollX: false,
    scrollY: false,
    columns: [{
            header: 'Test별',
            name: 'tests'
        },
        {
            header: 'A기체',
            name: 'A'
        },
        {
            header: 'B기체',
            name: 'B'
        },
        {
            header: 'C기체',
            name: 'C'
        },
    ]
});