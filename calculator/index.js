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
function changeTheme(){
    var body = document.getElementsByTagName('body')
    body.style.background="linear-gradient(to left, #0f2027, #203a43, #2c5364)";
}