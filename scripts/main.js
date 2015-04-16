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

    $("#myWork").click(function() {
      $('html, body').animate({
          scrollTop: $("#portfolio").offset().top
      }, 1500);
    });

    $(function()  {
        $("#contact_form").submit(function()
        {
            var email = $("#email").val();
            var name = $("#name").val();
            var msg = $("#msg").val();
            $.ajax(
            {
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    'key': '7Pqu14g1dHHI5lh8yIfQsw',
                    'message': {
                        'from_email': email,
                        'from_name': name,
                        'headers': {
                            'Reply-To': email
                        },
                        'subject': 'Message From Your Portfolio',
                        'text': msg,
                        'to': [
                        {
                            'email': 'Christopher.R.Otten@gmail.com',
                            'name': 'Chris Otten',
                            'type': 'to'
                        }]
                    }
                }
            })
            .done(function(response) {
                alert('Your message has been sent. Thank you!');
                $("#name").val('');
                $("#email").val('');
                $("#msg").val('');
            })
            .fail(function(response) {
                alert('Error sending message.');
            });
            return false;
        });
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
