$(window).on("load", function() {
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

var score = 0;
$('.btn').each(function() {
  $(this).click(function() {
    score++;
    $('#score').text(score);
  });
});


// let seconds = 15
// const interval = setInterval(() => {
//   if (seconds <= 0) {
//     clearInterval(interval)
//     alert(`Очков набрано: ${score}`)
//     window.location = "index.html"
//     return
//   }
//   seconds--
//   $("#seconds").text(seconds)
//
// }, 1000)
// toggle body
$(document).ready(function() {
  $('.imgu').click(function() {
    $('body').toggleClass('body-on');
  });
});
