var body = document.body ; 
var table = document.createElement('table');
var tcell = document.createElement('td')
var trow = document.createElement('tr')
var thead = document.createElement('th')
var objArr = []
var arr = []
var arr2 = []
var titles = ['sl' , 'subj' , 'name' , 'phone']

body.appendChild(table)
table.style.border = '2px solid green'

//gernerate an array of objects
for(var i = 0 ; i < 100 ; i++){
    objArr.push({
        sl : i,
        subj : 'subj' + i
    })
}



console.log(objArr)
for(let i = 0 ; i < titles.length ; i++) {
    var thcell = document.createElement('th')
    thcell.innerHTML = `${titles[i]}`
    table.appendChild(thcell)
}

for(let i = 0 ; i < 100 ; i++) {
    arr.push(`&#x1F${600+i}`)
}

for (let i = 0; i < 100 ; i++) {
    arr2.push(i)
}

for (let i = 0; i < 100; i++) {
    var tcell = document.createElement('td')
    tcell.style.border = '1px dashed green'
    tcell.style.padding = '0px 20px'
    tcell.innerHTML = `${arr[i]}`
    var tcell2 = document.createElement('td')
    tcell2.style.border = '1px dashed green'
    tcell2.style.padding = '0px 40px'
    tcell2.innerHTML = `${arr2[i]}`
    var tcell3 = document.createElement('td')
    tcell3.style.border = '1px dashed green'
    tcell3.style.padding = '0px 40px'
    tcell3.innerHTML = `${objArr[i].subj}`
    var tcell4 = document.createElement('td')
    tcell4.style.border = '1px dashed green'
    tcell4.style.padding = '0px 40px'
    tcell4.innerHTML = `${objArr[i].sl}`
    var trow = document.createElement('tr')
    trow.appendChild(tcell)
    trow.appendChild(tcell2)
    trow.appendChild(tcell3)
    trow.appendChild(tcell4)
    table.appendChild(trow)
}



/*var arr = []
var titles = ['subject' , 'name' , 'mother' , "father"];
var data = []
var body = document.body;
var mamaGrid = document.createElement('div');
var titlos = document.createElement('div');
var grid1 = document.createElement('div');
var grid2 = document.createElement('div');
var grid4 = document.createElement('div');
var grid3 = document.createElement('div');
var child = document.createElement('h1');
var gridElm = document.createElement('h1');
var horiGrid = document.createElement('div');
var txt = document.createElement('h1');



gridElm.className = 'gridElms';
mamaGrid.className = 'mamaGrid';
mamaGrid.appendChild(titlos);
titlos.className = 'titles';
body.appendChild(mamaGrid);
mamaGrid.appendChild(horiGrid);
horiGrid.className = 'hori'
horiGrid.className = 'grid1';
mamaGrid.appendChild(grid1);
grid2.className = 'grid2';
horiGrid.appendChild(grid2);
grid3.className = 'grid3';
horiGrid.appendChild(grid3);
grid4.className = 'grid4';
horiGrid.appendChild(grid4);

for(let i = 0 ; i < 80 ; i++) {
    data.push(i);
}

for (let i = 0; i < data.length; i++) {
    var gridElm = document.createElement('h1')
    gridElm.innerHTML = `${data[i]}`
    grid1.appendChild(gridElm)
}
for(let i = 0 ; i < titles.length ; i++) {
    var gridElm = document.createElement('h1');
    gridElm.innerHTML = `${titles[i]}`
    titlos.appendChild(gridElm)
}

for (let i = 0; i < 100; i++) {
    arr.push(`&#x1F60${i}`)
}

for (let i = 0; i < arr.length; i++) {
    var gridElm = document.createElement('h1')
    gridElm.innerHTML = `${arr[i]}`;
    grid2.appendChild(gridElm)
}

for(let i = 0 ; i < 80 ; i++) {
    var gridElm = document.createElement('h1');

}*/