var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('p3');
//Cau 1:
function changeColor(){
    p1.style.color='green';
    p2.style.color='yellow';
    p3.style.color='red';
}
changeColor();
//Cau 2:
function changeBgColor(color){
    document.body.style.backgroundColor=color;
}
changeBgColor('pink');
//Cau 3:
function copyContent(paragraph1, paragraph2){
    var temp=paragraph2.innerHTML;
    paragraph1.innerHTML=temp;
}
copyContent(p1,p2);
//Cau 4:
function changeFontSize(x){
    var s = document.getElementsByTagName("p");
    for(let i=0;i<s.length;i++){
        s[i].style.fontSize=x+'px';
    }
}
changeFontSize(20);
// Cau 5:
function increaseFontSize(paragraph){
    var compStyles=window.getComputedStyle(paragraph);
    var compStylesFontSize = compStyles.getPropertyValue('font-size');
    var num = compStylesFontSize.substring(0,compStylesFontSize.length-2);
    if(parseInt(num)<30){
        compStylesFontSize=parseInt(num)+1+'px';  
        paragraph.style.fontSize=compStylesFontSize;
    }
}
increaseFontSize(p1);
// Cau 6:
function decreaseFontSize(paragraph){
    var compStyles=window.getComputedStyle(paragraph);
    var compStylesFontSize = compStyles.getPropertyValue('font-size');
    var num = compStylesFontSize.substring(0,compStylesFontSize.length-2);
    if(parseInt(num)>10){
        compStylesFontSize=parseInt(num)-1+'px';  
        paragraph.style.fontSize=compStylesFontSize;
    }
}
decreaseFontSize(p3);
