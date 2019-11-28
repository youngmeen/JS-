$(function() {
  $("#testDatepicker").datepicker({
    showOn: "both",
    changeMonth: true,
    changeYear: true,
    dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
    dayNamesMin: ['월','화','수','목','금','토','일'],
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
  });
})

function checks()) {
  var regExp = /^[a-zA-Z0.9]{4,12}$/;
  if(!regExp.test($('id'))){
    alert("아이디를 다시 입력해주세요")
    $('id').value = "";
    $('id').focus();
    return false
  }
}
