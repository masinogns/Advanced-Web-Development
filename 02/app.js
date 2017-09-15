var src = 'hello world';
console.log(src)

var nick = 'my nick is \'aji\'';
console.log(nick);
console.log(nick == "");

var IkjeonisMan = true;
console.log(IkjeonisMan);

// log라는 이름의 function을 생성하고
// 밑에서  test 변수를 넣음으로써 log function을 실행한다.
function log(str){
  console.log(str);
}

var test = "test";
log(test);

// var ikjeonDied 라는 함수 이름으로 함수를 정의
var ikjeonDied = function(str){
  console.log(str);
};

ikjeonDied("No I`m alive !!")

// 우와 빡시다
function call(set){
  set();
}

var hi = function(){
  console.log("Function call");
}

call(hi);


var sum = function(x){
  var y = 1;
  return x+y;
}

console.log(sum(11));
