$(document).ready(() => {
    $("li a").on('mouseenter', function(){
        $(this).addClass('effect');
    });
    $("li a").on('mouseleave', function(){
        $(this).removeClass('effect');
    });

    $(".right .items").on('mouseenter', function() {
        $(this).addClass('selector');
    });

    $('.right .items').on('mouseleave', function() {
        $(this).removeClass('selector');
    });


    $('.toggle, .item').on('click', function() {
        $('.toggle').toggleClass('active');
        $('#menu-two').toggleClass('visible')
    }) 

    $('.active').on('click', function() {
        $('.toggle').fadeToggle()
    })
    
    
});


/*$('.item').on('click', function() {
        $('.hide').fadeToggle() */
