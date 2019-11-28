var body = document.body;
var form = document.createElement('form');
body.append(form);

var result = document.createElement('h1');
form.append(result);
var input = document.createElement('input');
input.type = 'number';
input.maxLength = 4;
form.append(input);

var button = document.createElement('button');
button.textContent = '전송';
form.append(button);

var failCount = 0;

var nArray;
var nCArray;


function createNumber() {
    nArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    nCArray = [];
    for (var i = 0; i < 4; i++) {
        var number = nArray.splice((Math.random() * (9 - i)), 1)[0];
        nCArray.push(number);
    }
}

createNumber();



form.addEventListener('submit', function 비동기(event) {
    event.preventDefault();
    
    var answer = input.value;
    var answerArray = answer.split('');
    if (answer == nCArray.join('')) {
        result.value = 'HOME RUN!!'        
        createNumber();
    } else {
        var strike = 0;
        var ball = 0;
        failCount++;
        console.log(failCount);

        if (failCount >= 10) {
            result.textContent = 'GAME OVER!! 답은 : ' + nCArray.join('');
            input.value = '';
            input.focus();            
            createNumber()
            failCount = 0;;            
        } else {
            for (var i = 0; i < answerArray.length; i++) {
                if (answerArray[i] == nCArray[i]) {
                    strike++;
                } else if (answerArray[i].indexOf(nCArray[i]) > -1) {
                    ball++;
                }
            }
            input.value = '';
            input.focus();
            result.textContent = 'STRIKE : ' + strike + ' BALL : ' + ball;
        }

    }

});