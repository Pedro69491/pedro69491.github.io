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


    $('.toggle').on('click', function() {
        $('.toggle').toggleClass('active');
        $('#menu-two').toggleClass('visible')
    }) 

    $('.active').on('click', function() {
        $('.toggle').fadeToggle()
    })
    
    $('ul#menu-two > li > a').click(function(e){
      e.preventDefault();
   });

});


/*$('.item').on('click', function() {
        $('.hide').fadeToggle() */
