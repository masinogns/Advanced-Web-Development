
// // 1부터 100까지 출력
// for (var i = 1; i < 101; i++) {
//   console.log(i);
// }

// // 1부터 100까지 짝수 or 홀수
// for (var i = 1; i < 101; i++) {
//   if (i%2 == 0) {
//       console.log(i);
//   }
// }



// 구구단
var arr = [];
var index = 0;

while (true) {
  var input = prompt("숫자를 입력하세요");

  if (input == null) {
    break;
  }else {
    arr[index++] = input;
  }
}

var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += parseInt(arr[i]);
}

console.log(sum);
