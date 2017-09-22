// var log = document.getElementById('log');
// console.log(log);
// log.innerHTML = "익전이";

// var log = document.getElementById('log');
// console.log(log);
//
// // var a= document.querySelectorAll('#log a')
// // console.log(a.length, a[0]);
//
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// document.body.appendChild(div);
//
//
// log.innerHTML +='<div style = "color : red">hello</div>';

var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function(){
    console.log("click");
});
