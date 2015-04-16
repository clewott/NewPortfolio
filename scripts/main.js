$(document).ready( function() {
  $(".drawer").drawer();

    $('.image').on("mouseover", function() {
      $(this).children('.projectImage').addClass("coolEffect");
      $(this).children('.hiddenH3').addClass("showBtn");
    });
    
    $('.image').on("mouseout", function() {
      $(this).children('.projectImage').removeClass("coolEffect");
      $(this).children('.hiddenH3').removeClass("showBtn");
    });

  $(window).on('resize load', function() {

      $('html').removeClass('no-js');
      $('body,html').css('opacity', '1');

      viewportheight = $(window).height();
      headerheight = $('.header').height();
      bg1 = '50';
      bg2 = $('header').height();

      $('.splash, #bg, #page').height(viewportheight);
      $('.splash.intro, #bg').css({
          'background-position': bg1 + '% '
      });

  });


  var images = [
      "../images/book2.jpg",
      "../images/book.jpg",
      "../images/desk.jpg"
  ];
  var $body = $(".intro"),
      $bg = $("#bg"),
      n = images.length,
      c = 0; // Loop Counter

  // Preload Array of images...
  for (var i = 0; i < n; i++) {
      var tImg = new Image();
      tImg.src = images[i];
  }

  $body.css({
      backgroundImage: "url(" + images[c] + ")"
  });

  (function loopBg() {
      $bg.hide().css({
          backgroundImage: "url(" + images[++c % n] + ")"
      }).delay(5000).fadeTo(1200, 1, function() {
          $body.css({
              backgroundImage: "url(" + images[c % n] + ")"
          });
          loopBg();
      });
  }());
});
