
$("#read").on('click', function(event){
  console.log("read");

  $.get("http://localhost:3000/posts" , function(data){
    console.log(data);
  });
});

$("#create").on('click', function(event){
  console.log("create");

  $.post("http://localhost:3000/posts" , {title: '익전찡멋쪄 ㅋㅋㅋㅋ'}, function(data){
    console.log(data);
  });
});

$("#update").on('click', function(event){
  console.log("update");
  // put으로 업데이트해야하는데 jquery에는 put이 없다. ajax를 사용해야한다.
  // $.put("http://localhost:3000/posts/1" , {title: '수정쓰'+new Date().getTime() }, function(data){
  //   console.log(data);
  // });

  $.ajax({
    url: 'http://localhost:3000/posts/1',
    method: 'PUT',
    data: {title: '수정쓰'+new Date().getTime() },
    complete: function(data){
      console.log(data);

    }

  })

});

$("#delete").on('click', function(event){
  console.log("delete");


  $.ajax({
    url: 'http://localhost:3000/posts/1',
    method: 'DELETE',
    complete: function(data){
      console.log(data);

    }

  })

});
