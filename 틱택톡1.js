var body = document.body;
var table = document.createElement('table');
var rawArray = [];
var cellArray = [];

var turn = 'X';

var 비동기콜백 = function (event) {
    var wRaw = rawArray.indexOf(event.target.parentMode);
    var wCell = rawArray.indexOf(event.target);

    if (cellArray[wRaw][wCell].textContent != '') {
        console.log('빈칸이 아닙니다.');
    } else {
        cellArray[wRaw][wCell].textContent = turn;
        var Success = false;
        //검증 과정
        if (cellArray[wRaw][0].textContent == turn && cellArray[wRaw][1] == turn && cellArray[wRaw][2] == turn) {
            Success = true;
        }
        if (cellArray[0][wCell].textContent == turn && cellArray[0][wCell] == turn && cellArray[0][wCell] == turn) {
            Success = true;
        }
        if (wRaw - wCell == 0) {
            if (cellArray[0][0].textContent == turn && cellArray[1][1].textContent == turn && cellArray[2][2].textContent == turn) {
                Success = true;
            }
        }
        if (Math.abs(wRaw - wCell) == 2) {
            if (cellArray[0][2].textContent == turn && cellArray[2][0].textContent == turn) {
                Success = true;
            }
        }

        if (Success) {
            alert(turn + ' 님이 승리!!');
            turn = 'X';
            cellArray.forEach(function (raw) {
                raw.forEach(function (cell) {
                    cell.textContent = '';
                });
            });
        } else {
            if (turn == 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            }
        }
    }


}

for (var i = 0; i < 3; i++) {
    var raw = document.createElement('tr');

    rawArray.push(raw);
    cellArray.push([]);

    for (var j = 0; j < 3; j++) {
        var cell = document.createElement('td');
        cell.addEventListener('click', 비동기콜백);
        cellArray[i].push(cell);
        raw.appendChild(cell);
    }

    table.appendChild(raw);
}
body.appendChild(table);
