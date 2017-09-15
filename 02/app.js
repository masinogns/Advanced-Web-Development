// var src = 'hello world';
// console.log(src)
//
// var nick = 'my nick is \'aji\'';
// console.log(nick);
// console.log(nick == "");
//
// var IkjeonisMan = true;
// console.log(IkjeonisMan);
//
// // log라는 이름의 function을 생성하고
// // 밑에서  test 변수를 넣음으로써 log function을 실행한다.
// function log(str){
//   console.log(str);
// }
//
// var test = "test";
// log(test);
//
// // var ikjeonDied 라는 함수 이름으로 함수를 정의
// var ikjeonDied = function(str){
//   console.log(str);
// };
//
// ikjeonDied("No I`m alive !!")
//
// // 우와 빡시다
// function call(set){
//   set();
// }
//
// var hi = function(){
//   console.log("Function call");
// }
//
// call(hi);
//
//
// var sum = function(x){
//   var y = 1;
//   return x+y;
// }
//
// console.log(sum(11));

// JSON ( Javascript Object Notation )
//A method is a piece of code that is called by a name that is associated with an object.
//A function is a piece of code that is called by name.
// Object
// var person = {
//   name : "kihoon",
//   friend : "ikik",
//   age : 2012,
//   area : "hell",
//   cry : function(area){
//     console.log(area);
//   }
// };
//
// console.log(person);
// console.log(person.cry("I Love N"));
//
// // Array
// var arr = ["ikjeon","kyungho","kihoon"];
// console.log(arr);
//
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//
// (function(){
//   console.log("auto exe function");
// });

// // 1부터 100까지 출력
// for (var i = 1; i < 101; i++) {
//   console.log(i);
// }

// // 1부터 100까지 짝수 or 홀수
// for (var i = 0; i < 100; i++) {
//   if (i%2 == 0) {
//       console.log(i);
//   }
// }


//
// // 구구단
// var arr = [];
// var index = 0;
//
// while (true) {
//   var input = prompt("숫자를 입력하세요");
//
//   if (input == null) {
//     break;
//   }else {
//     arr[index++] = input;
//   }
// }
//
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += parseInt(arr[i]);
// }
//
// console.log(sum);
