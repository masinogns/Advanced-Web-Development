// $('div').css('background-color','black');
// $('div').height(200);

// <div>요소를 #box에 추가해
$('<div>').appendTo( $('#box') )
        .text("난 div 요소")
        .addClass("border")
        .css("background-color","#fff");

// $('<div>', {
//     text : '난 div 요소',
//     addClass : 'border',
//     css : {
//         "background-color":"#fff"
//     }
// }).appendTo( $('#box') );

$("button").click(function(){
    $("<span>Yes!!!</span>").appendTo("p");
});
