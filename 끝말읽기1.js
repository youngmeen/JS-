var 바디 = document.body;

var 폼 = document.createElement('form');
바디.append(폼);

var 단어 = document.createElement('div');
단어.textContent = '세로초';
폼.append(단어);

var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '전송';
폼.append(버튼);

var 결과창 = document.createElement('div');
폼.append(결과창);


폼.addEventListener('submit', function 비동기(event) {
  //현제 이벤트의 기본 동작을 중단한다.
  event.preventDefault();
  if (단어.textContent[단어.textContent.length - 1] == 입력창.value[0]) {
    결과창.textContent = '딩동댕';
    단어.textContent = 입력창.value;
    입력창.value = '';
    입력창.focus();
  } else {
    결과창.textContent = '땡';
  }
});

// 버튼.addEventListener('submit', function 비동기(event) {
//   event.preventDefault();
//   console.log('확인');
//   if (단어.textContent[단어.textContent.length - 1] == 입력창.value[0]) {
//     결과창.textContent = '딩동댕';
//     단어.textContent = 입력창.value;
//   } else {
//     결과창.textContent = '땡';
//   }
// });
