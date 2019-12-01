var body = document.body;

var 후보군 = Array(45);
// [1,2,3,4,5]  배열에 크기가 클때
// undefine 45개가 배열에 들어가 있다.
// Array(45) 라고 선언하면 45만큼의 크기의 배열이 선언이되는거고 요소에는 아무것도 안들어가 있다.
// 그래서 반복문을 돌려서 배열을 출력해도 아무것도 출력이 안된다.

var fill = 후보군.fill();
// fill() 이라는 함수를 사용하게 되면 undefine으로 배열에 45개 만큼 요소가 들어가게 된다.

[undefined, undefined, undefined, undefined, undefined]
[1, 2, 3, 4, 5]
// mapping, 맵

// var map = fill.map(function (element, index) {
//     return index + 1;
// });
//map 을 사용하여 배열에 요소를 채워주는 역활
//배열에 1부터 45까지 

var Numbers = Array(45).fill().map(function (elements, index) {
    return index + 1;
});

//한번에 1 부터 45까지 맵핑을 하는 방법


console.log(Numbers);
// while 기준값이 바뀔때, 몇번을 반복을 해야할지 모를때 while문이 좋음
// for 몇번을 반복을 할지 알때
var shuffle = [];
while (Numbers.length > 0) {
    var Random = Numbers.splice(Math.floor(Math.random() * Numbers.length), 1)[0];
    shuffle.push(Random);
}
// 1 부터 45 까지 랜덤으로 섞는 방법 
// random 함수는 random 이 아님

console.log(shuffle);

var bonus = shuffle[shuffle.length - 1];
//보너스 숫자는 맨 마지막 숫자
var lottery = shuffle.slice(0, 6);
//slice(시작, 끝) 로또번호 첫번째 부터 다섯째 까지 자르는 함수

var lottery = shuffle.slice(0, 6).sort(function (p, c) {
    return p - c;
});
//오름 차순으로 정렬 
// 0 보다 작으면 순서를 안바꿈 0보다 크면 순서를 바꿈 
console.log('당첨숫자들', lottery, '보너스', bonus)
//sort() 정렬 :  1 22 27 3 47 이런식으로 정렬이 됨
//sort() 오름차순으로 정렬 : sort(function (p, c){return p - c;})
//sort() 내림차순으로 정렬 : sort(function (p, c){return c - c;})

var result = document.getElementById('result');

// for (var i = 0; i < lottery.length; i++){
//     setTimeout(function 비동기콜백함수(params) {        
//         var ball = document.createElement('div');
//         ball.textContent = lottery[i];    
//         result.appendChild(ball);    
//     }, 1000); // 
// }
//java 에 timer 와 똑같음
//하지만 for문에서는 사용못함 클로저와 관련된거라 함 그래서 for문 안에 사용못함
//지금은 이런식으로 하는 방식으로 사용

// js을 통해서 css 조작 하는 방법
//html 객체 아이디 가져오는 부분
// var result = document.getElementById('result');
// querySelector html에 아이디를 가져오는 부분
// 앞에 #을 붙인다.
var result = document.querySelector('#result');


function ballCSS(number, result) {
    var ball = document.createElement('div');
    ball.textContent = number;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '10px';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center'
    ball.style.marginRight = '10px';
    ball.style.fontSize = '15px';
    ball.className = '공아이디' + number;
    var bgColor;
    if (number <= 10) {
        bgColor = 'red';
    } else if (number >= 10 && number <= 20) {
        bgColor = 'orange';
    } else if (number >= 20 && number <= 30) {
        bgColor = 'yellow';
    } else if (number >= 30 && number <= 40) {
        bgColor = 'blue';
    } else if (number >= 40 && number <= 50) {
        bgColor = 'green';
    }
    ball.style.background = bgColor;
    result.appendChild(ball);
}
setTimeout(function 비동기콜백함수() {
    ballCSS(lottery[0], result);
}, 1000);
setTimeout(function 비동기콜백함수() {
    ballCSS(lottery[1], result);
}, 2000);
setTimeout(function 비동기콜백함수() {
    ballCSS(lottery[2], result);
}, 3000);
setTimeout(function 비동기콜백함수() {
    ballCSS(lottery[3], result);
}, 4000);
setTimeout(function 비동기콜백함수() {
    ballCSS(lottery[4], result);
}, 5000);
setTimeout(function 비동기콜백함수() {
    ballCSS(lottery[5], result);
}, 6000);

setTimeout(function 비동기콜백함수() {
    //getElementsByTagName 태그 이름으로 찾기
    // var bonusResult = document.getElementsByClassName('bonus')[0];
    // class 이름 가져올떄는 .을 앞에 붙인다.
    var bonusResult = document.querySelector('.bonus');
    
    ballCSS(bonus, bonusResult);
}, 7000);








