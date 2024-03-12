$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
});

$('#inp').keypress(function(e) {
    const todoText = $(this).val();
    if (e.which === 13) {
        $('#list').append(`<li><span>X</span> ${todoText} </li>`);
        $(this).val("");
    }
});

$('ul').on('click','span',function(e){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$('#plus').click(function(){
    $('#inp').fadeToggle();
})