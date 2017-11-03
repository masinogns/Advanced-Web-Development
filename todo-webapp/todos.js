//start...
var text = document.querySelector(".text");
var block = document.querySelector(".block");
var content = document.querySelector(".content");
var checkbox = document.querySelector(".toggle-checked");

// console.log(block);
// console.log(content);

function senseEnter(e){
  if (e.keyCode == 13 && text.value != "") { // enter == 13
    // alert("enter is sensed");
    var str = "<li class=\"content\">"+
      "<button class=\"delete\">×</button>"+
      "<input type=\"checkbox\" class=\"toggle-checked\">"+
      "<span class=\"todo\">"+text.value+"</span>"+
    "</li>"

    block.innerHTML += str;
    text.value = "";

    return false;
  }else {
    return true;
  }
}


block.addEventListener('click', removeTag);


function removeTag(e){
  // console.log(e.target.className+"ddd");

  var currentNode = e.target.parentElement;
  console.log(currentNode.className);

  if (e.target.className == "delete" && currentNode.className == "content") {
    currentNode.remove();
  }

  if (e.target.className == "toggle-checked" && e.target.checked == true) {
    console.log("줄긋기");
    currentNode.children[2].style.textDecoration="line-through";
    currentNode.children[2].style.color ="gray";
  }else {
    console.log("노노 복귀");
    currentNode.children[2].style.textDecoration="none";
    currentNode.children[2].style.color ="black";
  }
}
