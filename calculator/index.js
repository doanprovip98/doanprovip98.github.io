function insert(num){
    document.form.textview.value=document.form.textview.value +num;
}
function equal(){
    var exp=document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
}
function clean(){
    document.form.textview.value='';
}
function rollback(){
    var exp=document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1); 
}
var i=0;
function changeTheme(){
    i++;
    if(i%2==1){
        document.getElementsByTagName('body')[0].style.background='linear-gradient(to right, #0f2027, #203a43, #2c5364)';
    }
    else
    document.getElementsByTagName('body')[0].style.background='linear-gradient(to left, #cc95c0, #dbd4b4, #7aa1d2)';
}