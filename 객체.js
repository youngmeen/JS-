// var grades = new Object();
// grades['egoing'] = 10;
// grades['k8805'] = 20;
// grades['sorialgi'] = 30;

// var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
// for (key in grades){
//   document.write("key : "+key+" value : "+grades[key]+"<br />");
// }

var grades = {
  'list' : {
    'egoing': 10,
    'k8805': 6,
    'sorialgi': 20
  },
  'show' : function() {
    for (var name in this.list) {
      document.write(name + ':' + this.list[name] + "<br />");
    }
  }
}

grades.show();
