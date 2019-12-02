var Numbers;

var Shuffle = [];

var bonus;
var Lottery;

var input = document.querySelector('#input');
var result = document.querySelector('#result');
var form = document.querySelector('#form')
input.length = 19;



function Start() {
     $('.공아이디').remove();
    Numbers = [];
    Shuffle = [];
    Lottery = [];
    Numbers = Array(45).fill().map(function (elements, index) {
        return index + 1;
    });
    while (Numbers.length > 0) {
        var Random = Numbers.splice(Math.floor(Math.random() * Numbers.length), 1)[0];
        Shuffle.push(Random);
    }

    bonus = Shuffle[Shuffle.length - 1];
    Lottery = Shuffle.slice(0, 6).sort(function (p, c) {
        return p - c;
    });
}

function ballCSS(number, result) {   
    var ball = document.createElement('div');
    ball.textContent = number;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '10px';
    ball.style.width = '20px';
    ball.style.height = '20px'
    ball.style.textAlign = 'center';
    ball.style.marginRight = '10px';
    ball.style.fontSize = '15px'
    ball.className = '공아이디';
    var bgColor;
    if (number <= 10) {
        bgColor = 'red';
    } else if (number > 10 && number <= 20) {
        bgColor = 'orange';
    } else if (number > 20 && number <= 30) {
        bgColor = 'yellow';
    } else if (number > 30 && number <= 40) {
        bgColor = 'blue';
    } else if (number > 40 && number <= 50) {
        bgColor = 'green';
    }
    ball.style.background = bgColor;
    result.appendChild(ball);
}



form.addEventListener('submit', function (event) {
    event.preventDefault();
    Start();
    var answer = input.value;
    setTimeout(() => {
        ballCSS(Lottery[0], result);
    }, 1000);
    setTimeout(() => {
        ballCSS(Lottery[1], result);
    }, 2000);
    setTimeout(() => {
        ballCSS(Lottery[2], result);
    }, 3000);
    setTimeout(() => {
        ballCSS(Lottery[3], result);
    }, 4000);
    setTimeout(() => {
        ballCSS(Lottery[4], result);
    }, 5000);
    setTimeout(() => {
        ballCSS(Lottery[5], result);
    }, 6000);
    setTimeout(() => {
        //보너스 번호
        var bonusResult = document.querySelector('.bonus');
        ballCSS(bonus, bonusResult);
    }, 7000);
    if (answer == Lottery.join(' ')) {
        alert('로또 당첨 !!');
        input.value = '';
        input.focus();     
        Start();
    } else {
        alert('로또 망함 한강행~~~~');
        input.value = '';
        input.focus();    
        Start();
    }
});





