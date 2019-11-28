// var num1 = Math.ceil((Math.random() * 9) + 1);
// var num2 = Math.ceil((Math.random() * 9) + 1);
// var result = num1 * num2;

// var condition = true;
// var answer = prompt(num1 + 'X' + num2 +'= ');

// if (result == answer) {
//     alert('정답입니다.')
// } else {
//     alert('땡')
// }

var body = document.body;
var num1 = Math.ceil((Math.random() * 9) + 1);
var num2 = Math.ceil((Math.random() * 9) + 1);
var result = num1 * num2;

var answer = document.createElement('div');
answer.textContent = num1 + " X " + num2;
document.body.append(answer);
var input = document.createElement('input');
document.body.append(input);
var button = document.createElement('button');
button.textContent = '전송';
document.body.append(button);
var 결과창 = document.createElement('div');
결과창.textContent = result;
document.body.append(결과창);


button.addEventListener('click', function () {
    if(input.value == result){
        결과창.textContent = "정답";
        num1 = Math.ceil((Math.random() * 9) + 1);
        num2 = Math.ceil((Math.random() * 9) + 1);
        answer.textContent = num1 + " X " + num2;
        input.value = '';
        input.focus();
        result = num1 * num2;
    }else{
        결과창.textContent = "땡";
        input.value = '';
        input.focus();
    }    
});


