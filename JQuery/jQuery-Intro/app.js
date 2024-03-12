// $('#heading');
// $('#heading').css('color','red');
// $('#heading').css('background-color','aqua');
// $('#heading').css('border','3px solid black');

// $('.fav-movie');
// $('.fav-movie').css('color','purple');

// $('ul a[href="http://google.com"]');
// $('ul a[href="http://google.com"]').css('border','2px dashed red');

// const styles={
//     color: 'green',
//     backgroundColor: 'lightblue',
//     border:'3px solid black'
// }

// $('#heading').css(styles);


//-------------------------class methods----------------------------

$('h1').addClass('one');
$('h1').addClass('two');
$('h1').removeClass('one');
$('h1').toggleClass('one');


//---------------------------method------------------------------

console.log($('p').text());//textcontent

// $('p').text('THIS IS UPDATED');//changes the value

console.log($('p').html());

// $('p').html('<span>This is a span</span>');

console.log($('input').attr('type'));
// $('input').attr('type','color');

console.log($('h2+ol li'));
$('h2+ol li').first().css('color','red');
$('h2+ol li').last().css('color','red');

console.log($('input').val());//getvalue
$('input').val('Hello world');//setvalue

//-----------------------------Events---------------------------------

$('#btn').click(function(){
    console.log('Button Clicked');
    console.log($(this));
    $(this).css('border','3px solid red');
});

$('input').keypress(function (e) { 
    // console.log('KeyPressed');
    // console.log($(this).val());
    console.log(e);
    if(e.which === 13){
        console.log('You hit the enter key');
    }
});

