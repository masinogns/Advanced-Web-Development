var list = document.getElementById("list");

function done(data){
  var result = "";

  for (var i = 0; i < data.data.length; i++) {
    var title = "<h2 class=\"title\">"+data.data[i].title+"</h2>"
    result += "<a class=\"link\" href=\"http://1boon.kakao.com/"+data.data[i].path+"\">"+title+"</a>"
    result += "<img class=\"image\" src=\""+data.data[i].coverImage+"\">"
    result += "<p>조회수: "+data.data[i].totalView+"</p>"
  }

  list.innerHTML += result;
}

function load(e, url){
  getJSON(url, done);
}

var getJSON = (function(){
  var unique = 0;
  return function(url, callback, context) {
    // INIT
    var name = "_jsonp_" + unique++;
    if (url.match(/\?/)) url += "&callback="+name;
    else url += "?callback="+name;

    // Create script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Setup handler
    window[name] = function(data){
      callback.call((context || window), data);
      document.getElementsByTagName('head')[0].removeChild(script);
      script = null;
      delete window[name];
    };

    // Load JSON
    document.getElementsByTagName('head')[0].appendChild(script);
  };
})();
