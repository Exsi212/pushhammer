
        $(window).on("load",function(){
            $(".loader-container").fadeOut(1000);
        });

$(document).ready(function() {
  $('.popup').click(function() {
    $('.sectionmain').css('display', 'none');
    $('.sectionmain').css('display', 'block');
  });
});

// popup

$('.js-close-campaign').click(function() {
  $('.js-overlay-campaign').fadeOut();

});


// открыть по таймеру
$(window).on('load', function() {
  setTimeout(function() {
    if ($('.js-overlay-campaign').hasClass('disabled')) {
      return false;
    } else {

      $(".js-overlay-campaign").fadeIn();
    }
  }, 500);
});
