//start...
var text = document.querySelector(".text");
var block = document.querySelector(".block");
var content = document.querySelector(".content");

console.log(block);
console.log(content);

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
  console.log(e.target.className);

  var currentNode = e.target.parentElement;
  console.log(currentNode);

  if (currentNode.className == "content") {
    console.log("11");
    currentNode.remove();
  }

  // e.target.parentElement.remove;
}
