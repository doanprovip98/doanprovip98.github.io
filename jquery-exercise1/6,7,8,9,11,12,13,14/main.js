// Cau6
$('#child').parent().css('border','black')
function changeBackgroundToDivChildren(){
    $('#bai6').children().css('background-color','blue');
}
changeBackgroundToDivChildren();
// Cau 7
function setBackgroundOfPage(){
    $('body').css('background-color','red');
}
setBackgroundOfPage();
// Cau 8
function hideInput(){
    $('#form1 input').hide();
}
hideInput();
//Cau 11
function append_jquery() {
    $('body').append('<div><h1>JQuery Core</h1></div>');
}
append_jquery();
//Cau 12
$('li').get(1);
//Cau 13
// function testClick(){
//     $( "p" ).dblclick(function() {
//         alert( "Double Click." );
//       });
//     $( "p" ).click(function() {
//         alert( "Click." );
//       }); 
// }
// testClick();
// Cau 14

// function formMessage(){
   
// }
// formMessage();

// Cau9
function getValue(e){
    value = $(e).val();
    alert(value);
}

function getContent(c){
    x=$('result').text();
    content=$(c).val() + x;
    $("#result").text(content);
}

