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

var count = 0;
var failCount = 0;

var numberArray;
var numberCArray;

//반복되는 부분 함수화 시키기
function newNumber() {
   numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   numberCArray = [];
   for (var i = 0; i < 4; i++) {
      var random = numberArray.splice((Math.random() * (9 - i)), 1)[0];
      numberCArray.push(random);
   }
}

newNumber();

console.log(numberCArray);


//이벤트 리스너를 사용하면 비동기식이기 반복문을 사용안해도 된다.
form.addEventListener('submit', function 비동기(event) {
   event.preventDefault();
   //세로고침 안하는것 비동기식 이벤트처리
   var answer = input.value;
   var answerArray = answer.split('');
   if (answer == numberCArray.join('')) {//답이맞으면            
      result.textContent = '홈런';
      input.value = '';
      input.focus();
      newNumber();
      failCount = 0;
   } else {//답이틀리면
      var strike = 0;
      var ball = 0;
      failCount++;
      console.log(failCount);
      if (failCount >= 10) {
         result.textContent = "Game Over 답 은 : " + numberCArray.join('');
         input.value = '';
         input.focus();
         newNumber();
         failCount = 0;
      } else {
         for (var i = 0; i < answerArray.length; i++) {
            if (answerArray[i] == numberCArray[i]) {//같은자리 같은숫자확인
               strike++;
            } else if (answerArray[i].indexOf(numberCArray[i]) > -1) {//같은자리 같은숫자는 아니지만 숫자가 겹치는경우일때
               ball++;
            }
         }
         input.value = '';
         input.focus();
         result.textContent = '스트라이크 : ' + strike + ' 볼 : ' + ball;
      }

   }

});





