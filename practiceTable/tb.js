var data = [
    {
        team: 'teamA',
        man: 5,
        woman: 5,
        a:[1,2,3,4,5,6,7,8,9,0,1,2],
        b:[1,2,3,4,5,6,7,8,9,0,1,2],
        c:[1,2,3,4,5,6,7,8,9,0,1,2],
    },
    {
        team: 'teamB',
        man: 2,
        woman: 8,
        a:[1,2,3,4,5,6,7,8,9,0,1,2],
        b:[1,2,3,4,5,6,7,8,9,0,1,2],
        c:[1,2,3,4,5,6,7,8,9,0,1,2],
    },
    {
        team: 'teamC',
        man: 8,
        woman: 2,
        a:[1,2,3,4,5,6,7,8,9,0,1,2],
        b:[1,2,3,4,5,6,7,8,9,0,1,2],
        c:[1,2,3,4,5,6,7,8,9,0,1,2],
    },
]

function cret () {
    var ctb = document.createElement('table');
    ctb.setAttribute('id', 'ttb');
    ctb.setAttribute('cellpadding', '3px');
    var ctrth = document.createElement('tr');
    ctrth.setAttribute('id', 'thtr');
    var teamth = document.createElement('th');
    teamth.setAttribute('rowspan', '3');
    teamth.innerHTML = 'TEAM';
    var manth = document.createElement('th');
    manth.setAttribute('rowspan', '3');
    manth.innerHTML = 'MAN';
    var womanth = document.createElement('th');
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

    for(var i=0; i<12; i++){
        var mth = document.createElement('th');
        mth.setAttribute('colspan', '3');
        j = (i+1).toString();
        mth.innerHTML = j+'월'
        ctrth1.appendChild(mth);
    }

    //-------------

    var ctrth2 = document.createElement('tr');
    ctb.appendChild(ctrth2);

    for(var i=0; i<12; i++){
        var a = document.createElement('th');
        a.innerHTML = 'A';
        var b = document.createElement('th');
        b.innerHTML = 'B';
        var c =document.createElement('th');
        c.innerHTML = 'C';

        ctrth2.appendChild(a);
        ctrth2.appendChild(b);
        ctrth2.appendChild(c);
    }

    // ---------------

    for(var i=1; i<=data.length; i++) {
        var ctrtd = document.createElement('tr');
        var teamtd = document.createElement('td');
        var mantd = document.createElement('td');
        var womantd = document.createElement('td');

        var j = i.toString();
        teamtd.innerHTML = j + '. ' + data[i-1].team;
        mantd.innerHTML = data[i-1].man;
        womantd.innerHTML = data[i-1].woman;

        ctrtd.appendChild(teamtd);
        ctrtd.appendChild(mantd);
        ctrtd.appendChild(womantd);

        for(var k=0; k<12; k++) {
            var atd = document.createElement('td');
            var btd = document.createElement('td');
            var ctd = document.createElement('td');

            atd.innerHTML = data[i-1].a[k];
            btd.innerHTML = data[i-1].b[k];
            ctd.innerHTML = data[i-1].c[k];

            ctrtd.appendChild(atd);
            ctrtd.appendChild(btd);
            ctrtd.appendChild(ctd);
        }
        ctb.appendChild(ctrtd);
    }

    // ---------------

    var totaltr = document.createElement('tr');

    var totalth = document.createElement('th');
    totalth.innerHTML = 'TOTAL';

    var totalMan = document.createElement('td');
    var sumMan = sumcal(data, 'man');
    totalMan.innerHTML = sumMan;

    var totalWoman = document.createElement('td');
    var sumWoman = sumcal(data, 'woman');
    totalWoman.innerHTML = sumWoman;
    
    totaltr.appendChild(totalth);
    totaltr.appendChild(totalMan);
    totaltr.appendChild(totalWoman);

    var count = 0;
    for(i=0; i<12; i++) {
        var atd = document.createElement('td');
        atd.innerHTML = sumcal(data, 'a', count);
        var btd = document.createElement('td');
        btd.innerHTML = sumcal(data, 'b', count);
        var ctd = document.createElement('td');
        ctd.innerHTML = sumcal(data, 'c', count);

        totaltr.appendChild(atd);
        totaltr.appendChild(btd);
        totaltr.appendChild(ctd);
        count++;
    }
    count = 0;
    ctb.appendChild(totaltr);
}