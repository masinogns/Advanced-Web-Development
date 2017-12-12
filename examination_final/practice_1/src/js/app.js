
console.log('my-note app.js');
// var FileSaver = require('file-saver');

// 버튼 객체 참조
var newnote = document.querySelector(".btn-newnote");
var savenote = document.querySelector(".btn-savenote");
var filesave = document.querySelector(".btn-filesave");
var about = document.querySelector(".btn-about");
var fullscreen = document.querySelector(".btn-fullscreen");

var div = document.getElementById('about');
var memo = document.getElementById('memo');

// 최초 진입시 localStorage에 저장된 내용이 있으면 textarea에 표시
window.onload = onloadFunction;
function onloadFunction(e){
  if (localStorage.length != 0) {
    memo.value = localStorage.getItem(1);
  }
};

// 새노트: textarea(#memo)내용이 모두 지워짐
newnote.addEventListener('click', clickedNewnote);
function clickedNewnote(e){
    memo.value = '';
};

// 노트저장: localStorage에 textarea내용 저장
savenote.addEventListener('click', clickedSavenote);
function clickedSavenote(e){
  if (typeof(localStorage) == 'undefined') {
    alert('localStorage 사용을 위해 브라우저 업그레이드를 권장합니다.')
  }else {
    try {
      localStorage.setItem("1", memo.value);
    } catch (e) {
      if (e == QUATA_EXCEEDED_ERR) {
        alert('localStorage 할당량 초과로 인하여 데이터를 저장할 수 없습니다.')
      }
    }
  }
};

filesave.addEventListener('click', clickedFilesave);
function clickedFilesave(e){
  var blob = new Blob([localStorage.getItem(1)], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "note-content-download.txt");
}

// about: 클릭하면 레이어(div)로 center에 어플리케이션정보 나오도록 처리
var flag = false;
about.addEventListener('click', clickedAbout);
function clickedAbout(e){
  flag = !flag;

  if (flag) {
    div.innerHTML = "<span>애플리케이션 정보 : 카카오트랙 고급 웹 기말 , 백기훈<span>";
  }else {
    div.innerHTML = "";
  }
};

// 전체화면
fullscreen.addEventListener('click', () => {
  if (screenfull.enabled) {
		screenfull.request();
	} else {
		// Ignore or do something else
	}
});
