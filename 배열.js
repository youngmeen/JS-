// var li = ['a','b','c','d']
// var 숫자후보 = [1,2,3,4,5,6,7,8,9];
// var 숫자배열 = [];
// //숫자 배열
// for (var i = 0; i < 4; i++){    
//     // var 뽑은것 = 숫자후보.pop();
//     //마지막에 추가
//     // 숫자배열.push(뽑은것);
//     //마지막 것 뽑기
//     var 뽑은것 = 숫자후보.shift();
//     //처음것 뽑기    
//     숫자배열.unshift(뽑은것);
//     // 처음에 추가

// }

console.log(숫자배열);

//숫자함수 정리 Math.ceil: 올림처리 Math.random : 랜덤숫자를 뽑아내는것 정확하게는 랜덤은 아니다. Math.floor 버림처리
//splice(위치, 개수) 위치로부터 개수만큼 배열에서 뽑아내는것
var 숫자후보 = [1,2,3,4,5,6,7,8,9];
var 숫자배열 = [];


for (var i = 0; i < 4; i++) {    
    // var 뽑은것 = 숫자후보.splice(5,2);
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    //[0] 하는 이유? splice를 하면 배열로 뽑히기 때문에 배열안에 내용물을 뽑기 위해 [0]을 한다.
    숫자배열.push(뽑은것);
}

console.log(숫자배열);


//배열을 붙이는 문자로 할때는 join 문자를 배열로 짜를때 split
console.log(숫자배열.join(''));

