console.log("eoeoeoeo");

var wrap = document.getElementById("wrap");

var photos = '{"fictures" : ['+
  '{"imageNo" : "1", "imageUrl" : "http://cdnweb01.wikitree.co.kr/webdata/editor/201601/06/img_20160106133951_4fc4b4c1.jpg"},'+
  '{"imageNo" : "2", "imageUrl" : "http://cfile6.uf.tistory.com/image/26795B3E5599FA8C22DB3F"},'+
  '{"imageNo" : "3", "imageUrl" : "http://newsmanager2.etomato.com/userfiles/image/%EC%97%94%ED%84%B0%ED%8C%80/%EC%A0%95%ED%95%B4%EC%9A%B1/iufanmeeting.jpg"},'+
  '{"imageNo" : "4", "imageUrl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67gj6_4ZGZnpKD9DvdIN05Yw1EgklERBgGj5racQl2V8miTuB"},'+
  '{"imageNo" : "5", "imageUrl" : "http://www.billboard.com/files/media/iu-kpop-may-2015-billboard-650.jpg"},'+
  '{"imageNo" : "6", "imageUrl" : "http://cfile2.uf.tistory.com/image/2449374B5607FC8D06579D"},'+
  '{"imageNo" : "7", "imageUrl" : "http://cfile1.uf.tistory.com/image/2278E041566DF58F2D1777"}]}';

obj = JSON.parse(photos);
var str = '';
var pageOfNumber = 3;
var max = obj.fictures.length-pageOfNumber;
var page = 0;

function view(number){
  if (0 <= number && number <= max) {
    wrap.innerHTML = "";
    for (var i = number ; i < number+pageOfNumber; i++) {
      str = "<img class=\"photo\" src="+obj.fictures[i].imageUrl+">"+"</div>";
      wrap.innerHTML += str;
    }
  }else {
    if (max < number) {
      number = max;
    }else {
      number = 0;
    }
    alert("페이지 범위 밖입니다.");
  }
}

view(page);

document.getElementById("before").addEventListener("click", function(){
  view(--page);
});

document.getElementById("after").addEventListener("click", function(){
  view(++page);
});
