
/*
nav의 li들을 클릭했을 때,
전에 active한 class네임은 ""으로 바꿔주고
현재 클릭된 li를 active로 바꿔주는 함수
*/
document.write('<script type="text/javascript" src="./jsonp.js"></script>')

var trendingURL = 'http://1boon.kakao.com/ch/trending.json';
var issueURL = 'http://1boon.kakao.com/ch/issue.json';
var enterURL = 'http://1boon.kakao.com/ch/enter.json';

var tag = document.querySelector(".nav");

getJSON(trendingURL,done);

tag.addEventListener('click', activeNav);

function activeNav(e){
  var findIndexOfActive = 0;

  for (var i = 0; i < tag.childElementCount; i++) {
    if (tag.children[i].className == "active") {
      findIndexOfActive = i;
    }
  }

  var target = e.target.className;
  var parent = e.target.parentNode;

  if (target == "trending") {
    load(e, trendingURL);
    changeActive(parent, findIndexOfActive);
  }else if (target == "issue") {
    load(e, issueURL);
    changeActive(parent, findIndexOfActive);
  }else { // if target == enter
    load(e, enterURL);
    changeActive(parent, findIndexOfActive);
  }
}


function changeActive(parent, index){
  // var list = document.getElementById("list");
  // list.innerHTML = "";
  tag.children[index].className = "";
  parent.className = "active";
}
