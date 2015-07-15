// Overall JS references: https://ihatetomatoes.net/simple-parallax-scrolling-tutorial/,
//
//  Main function for the entire JS section (w/ jQuery being used.)
  ( function( $ ) {
    $window = $(window);
    $slide = $('.homeSlide');
    $navBar = $('.slideNavBar .test');
    $body = $('body');
    htmlbody = $('html,body');
    var duration = 500;
    var inputs = document.createElement('input');
    var div = document.getElementById('requiredError');

    // var waypoint = new Waypoint({
    //   element: document.getElementById('slide-1'),
    //   handler: function() {
    //     console.log("Slide 1");
    //     $('.slideNavBar .hoverId1').css({
    //       'background' : '',
    //        "background-image" : '',
    //         "text-decoration" : ''
    //       });
    //   }
    // });

    adjustWindow();
    initHomepageNav();
    // Adjustign the window size.
    function adjustWindow(){

    // Init Skrollr
    var s = skrollr.init({
        forceHeight: false,
        render: function(data) {

            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });

    // Get window size and correct the displacement of the menu.
      winH = $window.height();
      tableW = ($navBar.width()/2)*-1;
      $('.slideNavBar .test').css("margin-left",tableW);

      // Keep minimum height 550
      if(winH <= 650) {
      winH = 650;
    }

      // Resize our slides
      $slide.height(winH);

      // Refresh Skrollr after resizing our sections
      s.refresh($('.homeSlide'));

    }

    //Initilization of Page Navigation
    function initHomepageNav(){

      var $testNavSlider = $('.clickEventClass');

      $testNavSlider.click(function (e) {
        e.preventDefault();
        var id = $(this).attr('id');

        switch(id) {
            case 'slide1':
            scrollToSlide(1);
            break;
            case 'slide2':
            scrollToSlide(2);
            break;
            case 'slide3':
            scrollToSlide(3);
            break;
            case 'slide4':
            scrollToSlide(4);
            break;
            case 'slide5':
            scrollToSlide(5);
            break;
          }
      });

      // Function taken from Petr Tichy
    function scrollToSlide(slideId){
      htmlbody.animate({scrollTop: ($("#slide-"+slideId).offset().top) + 'px'},'slow');
      }
    }
    // Change text inside send button on submit
    var send = document.getElementById('contact-submit');
    if(send) {
    send.onclick = function () {
      var name = document.forms["contactForm"]["name"].value;
      var email = document.forms["contactForm"]["email"].value;
      var tele = document.forms["contactForm"]["tele"].value;
      var message = document.forms["contactForm"]["message"].value;
      if (name === null || name === "") {
          div.innerHTML = '*Please fill out your name.';
          return false;
      } else if (email === null || email === "") {
          div.innerHTML = '*Please fill out your email.';
      } else if (tele === null || tele === "") {
          div.innerHTML = '*Please fill out your telephone.';
      } else if (message === null || message === "") {
          div.innerHTML = '*Please fill out your message.';
      } else {
          div.innerHTML = '';
          this.innerHTML = '...Sending';
          var messageBody = message + '\nRegards, \n'+ name +'\nTelephone: ' + tele + '\n';
          messageBody = encodeURI(messageBody);
          console.log(messageBody);
          document.forms["contactForm"].action='mailto:clwproductionswebsite@gmail.com?&subject=Contact clwProductions&body=' + messageBody;
          document.forms["contactForm"].submit();
          return false;
      }
    };
  }

  } )( jQuery );