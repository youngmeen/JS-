var word = prompt('제시어를 입력해주세요.');

while (true) {
  var answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    word = answer;
    alert('딩동댕');
  } else {
    alert('땡');
  }
}
