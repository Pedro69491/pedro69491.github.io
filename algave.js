$(document).ready(() => {
    var slideIndex = 1;
    showSlides(slideIndex);

    

    $(".prev").click(function() {
        plusSlides(-1);
      });
    
      $(".next").click(function() {
        plusSlides(1);
      });
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }

    slides[slideIndex-1].style.display = "block" 
    }
    $(".right .items").on('mouseenter', function() {
        $(this).addClass('selector');
    });

    $('.right .items').on('mouseleave', function() {
        $(this).removeClass('selector');
    });

    $('#slideshow-container').on('mouseenter', function() {
        $('.prev').addClass('sinal');
        $('.next').addClass('sinal');
    })

    $('#slideshow-container').on('mouseleave', function() {
    $('.prev').removeClass('sinal');
    $('.next').removeClass('sinal');
    })

});
