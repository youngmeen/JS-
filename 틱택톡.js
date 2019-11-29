var body = document.body;
var table = document.createElement('table');
var result = document.createElement('div');

// var first = document.createElement('tr');

// var ffirst = document.createElement('td');
// var fsecond = document.createElement('td');
// var fthird = document.createElement('td');

// first.append(ffirst);
// first.append(fsecond);
// first.append(fthird);

// var second = document.createElement('tr');

// var sfirst = document.createElement('td');
// var ssecond = document.createElement('td');
// var sthird = document.createElement('td');

// second.append(sfirst);
// second.append(ssecond);
// second.append(sthird);

// var third = document.createElement('tr');

// var tfirst = document.createElement('td');
// var tsecond = document.createElement('td');
// var tthird = document.createElement('td');

// third.append(tfirst);
// third.append(tsecond);
// third.append(tthird);


var rawArray = [];
var cellArray = [];
var turn = 'X';

//event.target === 클릭된 거
//event.target.parentNode ===  클릭된 애 부모 태그
var 비동기콜백 = function (event) {
    var wRaws = rawArray.indexOf(event.target.parentNode);
    console.log('몇줄', wRaws);
    var wCell = cellArray[wRaws].indexOf(event.target);
    console.log('몇칸', wCell);

    if (cellArray[wRaws][wCell].textContent != '') {
        console.log('빈칸아닙니다.');
    } else {//빈칸이면
        console.log('빈칸입니다.');
        cellArray[wRaws][wCell].textContent = turn;

        // 세칸 다 체워졌나?
        var Success = false;
        //가로줄 검사
        if (cellArray[wRaws][0].textContent == turn &&
            cellArray[wRaws][1].textContent == turn &&
            cellArray[wRaws][2].textContent == turn) {
            Success = true;
        }
        //세로줄 검사
        if (cellArray[0][wCell].textContent == turn &&
            cellArray[1][wCell].textContent == turn &&
            cellArray[2][wCell].textContent == turn) {
            Success = true;
        }
        //대각선 검사

        if (wRaws - wCell == 0) {//대각선 검사 필요할 경우
            if (cellArray[0][0].textContent == turn &&
                cellArray[1][1].textContent == turn &&
                cellArray[2][2].textContent == turn) {
                Success = true
            }
        }

        if (Math.abs(wRaws - wCell) == 2) {//역대각선 검사 필요할 경우
            if (cellArray[0][2].textContent == turn &&
                cellArray[1][1].textContent == turn &&
                cellArray[2][0].textContent == turn) {
                Success = true
            }
        }

        //다 찼으면
        if (Success) {
            //console.log(turn + '님이 승리');
            alert(turn + ' 님이 승리!!');
            // result.textContent = turn + ' 님이 승리!!';
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


};


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
body.append(result);

console.log(rawArray, cellArray)




