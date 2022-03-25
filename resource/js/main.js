
        $(window).on("load",function(){
            $(".loader-container").fadeOut(1000);
        });

$(document).ready(function() {
  $('.popup').click(function() {
    $('.sectionmain').toggle('sectionmain-on');
    $('.block').toggleClass('block-on');
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

// счетчик

var score=0;
$( '.btn' ).each(function() {
$(this).click(function(){
score++;
$('#score').text(score);
});
});
