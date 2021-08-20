$(window).scroll(function() {
    if ($("#menu").offset().top > 56){
        $("#menu").addClass("bg-scroll");
    } else {
       $("#menu").removeClass("bg-scroll");
    }
  });