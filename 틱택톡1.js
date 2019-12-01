var body = document.body;
var table = document.createElement('table');

var rawArray = [];
var cellArray = [];
var turn = 'X';

var 비동기콜백 = function (event) {
    var wRaws = rawArray.indexOf(event.target.parentNode);
    console.log('몇줄', wRaws);
    var wCell = cellArray[wRaws].indexOf(event.target);
    console.log('몇칸', wCell);
};   


for (var i = 0; i < 3; i++) {
    var raw = document.createElement('tr');

    rawArray.push(raw);
    cellArray.push([]);
    for (var j = 0; j < 3; j++) {
        var cell = document.createElement('td');
        cell.addEventListener('click', 비동기콜백);
        cellArray.push(cell);
        raw.appendChild(cell);
    }
    table.appendChild(raw);
}

body.appendChild(table);