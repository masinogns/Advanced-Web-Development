var wrap = document.getElementById('wrap');

var str = '';
var check = true;

for (var i = 0; i < 16; i++) {
  var className = '';

  if (i % 4 == 0) {
    check = !check;
  }

  if (check) {
    className = "white";
    check = false;
  }else {
    className = "black";
    check = true;
  }

  str = "<div id ="+className+">"+"</div>"
  wrap.innerHTML += str;

}
