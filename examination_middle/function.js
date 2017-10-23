
/*
nav의 li들을 클릭했을 때,
전에 active한 class네임은 ""으로 바꿔주고
현재 클릭된 li를 active로 바꿔주는 함수
*/
document.write('<script type="text/javascript" src="./jsonp.js"></script>')

var trendingURL = 'http://1boon.kakao.com/ch/trending.json';
var issueURL = 'http://1boon.kakao.com/ch/issue.json';
var enterURL = 'http://1boon.kakao.com/ch/enter.json';

var page = '2';
var pageSize = '?pagesize=1&page=';

var tag = document.querySelector(".nav");
var list = document.getElementById("list");

var currentURL = trendingURL;

getJSON(currentURL+pageSize+'1', done);

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

  list.innerHTML = "";
  if (target == "trending") {
    currentURL = trendingURL;
  }else if (target == "issue") {
    currentURL = issueURL;
  }else { // if target == enter
    currentURL = enterURL;
  }

  load(e, currentURL+pageSize+'1');
  changeActive(parent, findIndexOfActive);
}

function changeActive(parent, index){
  tag.children[index].className = "";
  parent.className = "active";
}

var btn = document.getElementById("btn");
btn.addEventListener('click', function(e){
  load(e, currentURL+pageSize+page++);
});
