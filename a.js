var body = document.body;
var word = document.createElement('div');
word.textContent = '제로초';
document.body.append(word);
var input = document.createElement('input');
document.body.append(input);
var button = document.createElement('button');
button.textContent = "전송"
document.body.append(button);
var result = document.createElement('div');
document.body.append(result);

button.addEventListener('click', function () {
   if(word.textContent[word.textContent.length - 1] == input.value[0]){
       result.textContent = '딩동댕';
       word.textContent = input.value;
   }else{
       result.textContent = '땡';
   }
});

