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

var tmpColor;
var tmpValue;

var divs = document.querySelectorAll('#wrap div');

function changBg(e){
  if (tmpValue != null) {
    tmpValue.style.backgroundColor = tmpColor;
  }

  console.log('changBg');

  console.log(e.currentTarget);
  console.log(e.target);
  tmpValue = e.target;
  tmpColor = e.currentTarget.style.backgroundColor;

  e.currentTarget.style.backgroundColor = "red";
}

for(var i = 0; i < divs.length; i++){
  divs[i].addEventListener('click',changBg);
}
