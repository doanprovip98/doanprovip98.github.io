
let count=0;
for(let key in localStorage){
    $('.content').append(
        localStorage.getItem(key)
        );
};
$('.delete').click(function(){
    $(this).parent().remove();
    let id = $(this).parent().attr('id');
    localStorage.removeItem(id);
});
$('input').keypress(function(e) {
    let keycode = e.which;
    if(keycode == 13) {
        count+=1;
        let work = $('input').val();
        $('.content').prepend(
            '<div id="'+'item'+count+'" class="item"><span>'+work+'</span><button class="delete">Delete</button></div>'
            );
        $('input').val('');
        localStorage.setItem('item'+count,'<div id="'+'item'+count+'" class="item"><span>'+work+'</span><button class="delete">Delete</button></div>');
    }
    $('.delete').click(function(){
        $(this).parent().remove();
        let id = $(this).parent().attr('id');
        localStorage.removeItem(id);
    });
});

