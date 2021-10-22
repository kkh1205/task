var data = [{
        team: 'TeamA',
        sort: 0,
        man: 5,
        woman: 5,
        a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
        b: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
        c: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
    },
    {
        team: 'TeamB',
        sort: 1,
        man: 2,
        woman: 8,
        a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
        b: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
        c: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
    },
    {
        team: 'TeamC',
        sort: 2,
        man: 8,
        woman: 2,
        a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
        b: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
        c: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
    },
]

// ------------- all check 함수 ----------------
var ckItem = new Array();

$(function () {
    $('#all').click(function () {
        ckItem = [];
        if ($('#all').prop('checked')) {
            $('input[type=checkbox]').prop('checked', true);
            $('input[type=checkbox]:checked').each(function () {
                var ckv = $(this).val();
                ckItem.push(ckv);
            });
            ckItem.splice(ckItem.indexOf('all'), 1);
        } else {
            $('input[type=checkbox]').prop('checked', false);
            ckItem = [];
        }
    });
});

// --------------- 테이블에 각 항목 총합 구하는 함수 ----------------
function sumcal(dt, cate, ct) {
    var sum = 0;
    if (cate == 'man' || cate == 'woman') {
        for (var i = 0; i < dt.length; i++) {
            if (ckItem.includes(dt[i].team)) {
                var dataint;
                if (cate == 'man') {
                    dataint = dt[i].man;
                } else if (cate == 'woman') {
                    dataint = dt[i].woman;
                }
                sum += dataint;
            }
        }
    } else if (cate == 'a' || cate == 'b' || cate == 'c') {
        if (cate == 'a') {
            for (var i = 0; i < dt.length; i++) {
                if (ckItem.includes(dt[i].team)) {
                    var dataint = dt[i].a[ct];
                    sum += dataint;
                }
            }
        } else if (cate == 'b') {
            for (var i = 0; i < dt.length; i++) {
                if (ckItem.includes(dt[i].team)) {
                    var dataint = dt[i].b[ct];
                    sum += dataint;
                }
            }
        } else if (cate == 'c') {
            for (var i = 0; i < dt.length; i++) {
                if (ckItem.includes(dt[i].team)) {
                    var dataint = dt[i].c[ct];
                    sum += dataint;
                }
            }
        }
    }
    var sumString = sum.toString();
    return sumString;
}

// ----------------- 처음 로드될 때 실행되는 테이블 작성 함수 -----------------------
function cret() {
    $('input[type=checkbox]').prop('checked', true);
    $('input[type=checkbox]:checked').each(function () {
        var ckv = $(this).val();
        ckItem.push(ckv);
    });
    ckItem.splice(ckItem.indexOf('all'), 1)
    ckItem.sort();

    var ctb = document.createElement('table');
    ctb.setAttribute('id', 'ttb');
    ctb.setAttribute('cellpadding', '3px');
    var ctrth = document.createElement('tr');
    ctrth.setAttribute('id', 'thtr');
    var teamth = document.createElement('th');
    teamth.setAttribute('id', 'teamth');
    teamth.setAttribute('rowspan', '3');
    teamth.innerHTML = 'TEAM';
    var manth = document.createElement('th');
    manth.setAttribute('id', 'manth');
    manth.setAttribute('rowspan', '3');
    manth.innerHTML = 'MAN';
    var womanth = document.createElement('th');
    womanth.setAttribute('id', 'womanth');
    womanth.setAttribute('rowspan', '3');
    womanth.innerHTML = 'WOMAN'
    var yth = document.createElement('th');
    yth.setAttribute('id', 'year');
    yth.setAttribute('colspan', '36');
    yth.innerHTML = '2021'

    setdiv.appendChild(ctb);
    ctb.appendChild(ctrth);
    ctrth.appendChild(teamth);
    ctrth.appendChild(manth);
    ctrth.appendChild(womanth);
    ctrth.appendChild(yth);

    // -------------

    var ctrth1 = document.createElement('tr');
    ctb.appendChild(ctrth1);

    for (var i = 0; i < 12; i++) {
        var mth = document.createElement('th');
        mth.setAttribute('id', 'mth');
        mth.setAttribute('colspan', '3');
        j = (i + 1).toString();
        mth.innerHTML = j + '월'
        ctrth1.appendChild(mth);
    }

    //-------------

    var ctrth2 = document.createElement('tr');
    ctb.appendChild(ctrth2);

    for (var i = 0; i < 12; i++) {
        var a = document.createElement('th');
        a.innerHTML = 'A';
        var b = document.createElement('th');
        b.innerHTML = 'B';
        var c = document.createElement('th');
        c.innerHTML = 'C';

        ctrth2.appendChild(a);
        ctrth2.appendChild(b);
        ctrth2.appendChild(c);
    }

    // ---------------

    for (var i = 1; i <= data.length; i++) {
        var ctrtd = document.createElement('tr');
        ctrtd.setAttribute('class', 'ctrtd');
        var teamtd = document.createElement('td');
        teamtd.setAttribute('class', 'team');
        var mantd = document.createElement('td');
        var womantd = document.createElement('td');

        var j = i.toString();
        teamtd.innerHTML = data[i - 1].team;
        mantd.innerHTML = data[i - 1].man;
        womantd.innerHTML = data[i - 1].woman;

        ctrtd.appendChild(teamtd);
        ctrtd.appendChild(mantd);
        ctrtd.appendChild(womantd);

        for (var k = 0; k < 12; k++) {
            var atd = document.createElement('td');
            var btd = document.createElement('td');
            var ctd = document.createElement('td');

            atd.innerHTML = data[i - 1].a[k];
            btd.innerHTML = data[i - 1].b[k];
            ctd.innerHTML = data[i - 1].c[k];

            ctrtd.appendChild(atd);
            ctrtd.appendChild(btd);
            ctrtd.appendChild(ctd);
        }
        ctb.appendChild(ctrtd);
    }

    // ---------------

    var totaltr = document.createElement('tr');
    totaltr.setAttribute('id', 'totalRow');
    var totalth = document.createElement('th');
    totalth.innerHTML = 'TOTAL';

    var totalMan = document.createElement('td');
    totalMan.setAttribute('id', 'ttman');
    var sumMan = sumcal(data, 'man');
    totalMan.innerHTML = sumMan;

    var totalWoman = document.createElement('td');
    totalWoman.setAttribute('id', 'ttwoman');
    var sumWoman = sumcal(data, 'woman');
    totalWoman.innerHTML = sumWoman;

    totaltr.appendChild(totalth);
    totaltr.appendChild(totalMan);
    totaltr.appendChild(totalWoman);

    var count = 0;
    for (var i = 0; i < 12; i++) {
        var atd = document.createElement('td');
        atd.setAttribute('id', 'atd' + i.toString());
        atd.innerHTML = sumcal(data, 'a', count);
        var btd = document.createElement('td');
        btd.setAttribute('id', 'btd' + i.toString());
        btd.innerHTML = sumcal(data, 'b', count);
        var ctd = document.createElement('td');
        ctd.setAttribute('id', 'ctd' + i.toString());
        ctd.innerHTML = sumcal(data, 'c', count);

        totaltr.appendChild(atd);
        totaltr.appendChild(btd);
        totaltr.appendChild(ctd);
        count++;
    }
    count = 0;
    ctb.appendChild(totaltr);
}

// -------------- 개별 체크박스 변환시 작동 --------------
function cbf(target) {
    var cv = target.value;
    var cked = target.checked;

    if (cked == true) {
        ckItem.push(cv);
    } else {
        ckItem.splice(ckItem.indexOf(cv), 1);
        $('#all').prop('checked', false);
    }
}

// -------------- Filter button ----------------
function ftbt() {
    ckItem.sort();
    console.log(ckItem);
    $('.ctrtd').hide();
    $('.ctrtd').each(function () {
        var r = $(this);
        var rcthtml = r.find('.team').html();
        $(ckItem).each(function (index, cate) {
            if (rcthtml == cate) {
                r.show();
            }
        });
    });

    var tm = document.getElementById('ttman');
    var stm = sumcal(data, 'man');
    tm.innerHTML = stm;
    var twm = document.getElementById('ttwoman');
    var stwm = sumcal(data, 'woman');
    twm.innerHTML = stwm;

    var count = 0;
    for (var i = 0; i < 12; i++) {
        var a = document.getElementById('atd' + i.toString());
        a.innerHTML = sumcal(data, 'a', count);
        var b = document.getElementById('btd' + i.toString());
        b.innerHTML = sumcal(data, 'b', count);
        var c = document.getElementById('ctd' + i.toString());
        c.innerHTML = sumcal(data, 'c', count);
        count++;
    }
    count = 0;
}

//------------------------------------------------------------------

function setPage() {
    var page = document.location.pathname;
    var findval = 'table.html';
    var ival = page.indexOf(findval);
    var findval2 = 'index.html';
    var ival2 = page.indexOf(findval2)
    var title = document.getElementById('headerTitle');

    if (ival != -1) {
        document.getElementById('jqpage').style.borderBottom = '7px solid rgb(198, 232, 255)';
        title.innerHTML = 'JQUERY만 사용한 페이지'
    } else if (ival2 != -1) {
        document.getElementById('apipage').style.borderBottom = '7px solid rgb(198, 232, 255)';
        title.innerHTML = 'API 사용한 페이지'
    }
}
