// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//NOTES: I know there's a lot of refactoring (particularly encapsulation and OO practices) to be done but this is an initial pass through.
// Mostly to help me learn jquery.

// Loading Functions
// $(window).load(function() {
//   $("#loading").hide();
// });
$(document).ready(function() {
  // Variables
  var menu = $('.left-off-canvas-menu');
  var form = $('#ajax-contact');
  var contactForm = $("#section4Row1").html();

  // Storage of section3 HTML for reset purposes used in later functions
  $("#section4Row1").data("reset_html", $("#section4Row1").html());
  $("#section3Row1").data("reset_html", $("#section3Row1").html());
  $("#section2Row1").data("reset_html", $("#section2Row1").html());
  $("#section1Row1").data("reset_html", $("#section1Row1").html());
  // FUNCTIONS:
  // JS for a sticky off-canvas menu
  // Source: http://codepen.io/anon/pen/uGhvr
  function menuResize() {
      menu.height($(this).height());
  }
  //FP Init
  function initFP() {
    $('#fullpage').fullpage({
      anchors:['about', 'resume', 'work','contact'],
      menu: '#myMenu',
      scrollBar:true,
      controlArrows: false,
      loopHorizontal: false
    });
  }
  // Layout Reset
  function layoutReset() {
    $("#section4Row1").empty();
    $("#section3Row1").empty();
    $("#section2Row1").empty();
    $("#section1Row1").empty();
    $("#section4Row1").html($("#section4Row1").data("reset_html"));
    $("#section3Row1").html($("#section3Row1").data("reset_html"));
    $("#section2Row1").html($("#section2Row1").data("reset_html"));
    $("#section1Row1").html($("#section1Row1").data("reset_html"));
  }
  // Functions for the next/previous arrow involved in the slides
  function nextPrevResize() {
    $(".nextPreviousDivSection3").width( $(".workCubeText").width());
    $(".nextPreviousDivSection2").width( $("#educationBlock").width());
    $(".nextPreviousDivSection1").width( $(".descriptionBlock").width());
  }
  function arrowGenerator(arrows) {
    if (arrows === "previous") {
      return "<img class='leftFloat arrow' src='images/previousArrow.png' height='23px' width='23px'/>";
    } else if (arrows === "next") {
      return "<img class='rightFloat arrow' src='images/nextArrow.png' height='23px' width='23px'/>";
    } else if (arrows === "both") {
      return "<img class='leftFloat arrow' src='images/previousArrow.png' height='23px' width='23px'/><img class='rightFloat arrow' src='images/nextArrow.png' height='23px' width='23px'/>";
    }
  }
  // Function to add error to Contact Form
  function checkContactForm() {
      if ($("#name").val().length===0 && !($("#nameLabel input").hasClass("error"))) {
        $("input#name").addClass("error");
        $("#nameLabel small.error").css("display","block");
      } else if ($("#name").val().length>0 && $("#nameLabel input").hasClass("error")) {
        $("input#name").removeClass("error");
        $("#nameLabel small.error").css("display","none");
      }
      if ($("#email").val().length===0 && !($("#emailLabel input").hasClass("error"))) {
        $("input#email").addClass("error");
        $("#emailLabel small.error").css("display","block");
      } else if ($("#email").val().length>0 && $("#emailLabel input").hasClass("error")) {
        $("input#email").removeClass("error");
        $("#emailLabel small.error").css("display","none");
      }
      if ($("#message").val().length===0 && !($("#messageLabel textarea").hasClass("error"))) {
        $("textarea#message").addClass("error");
        $("#messageLabel small.error").css("display","block");
      } else if ($("#message").val().length>0 && $("#messageLabel textarea").hasClass("error")) {
        $("textarea#message").removeClass("error");
        $("#messageLabel small.error").css("display","none");
      }
  }

  //Function for dynamic small page(s)
  function small() {
    //reset the layout for DOM manipulation
    layoutReset();

    //variable to keep track of current section (+overall logic)
    var temp = $(".section.active");
    $.fn.fullpage.destroy('all');

    //Logic for section 1
    $("#profileImage").unwrap();
    $("#profileImage").unwrap();
    $("#profileImage, .descriptionBlock:eq(0)").wrapAll("<div class='slide'></div>")
                                               .wrapAll("<div class='small-11 small-centered columns'></div>")
                                               .wrapAll("<div class='innerContainer' data-equalizer-watch></div>");
    $(".descriptionBlock:eq(1)").wrap("<div class='slide'></div>")
                                .wrap("<div class='small-11 small-centered columns'></div>")
                                .wrap("<div class='innerContainer' data-equalizer-watch></div>");
    $(".descriptionBlock:eq(2)").wrap("<div class='slide'></div>")
                                .wrap("<div class='small-11 small-centered columns'></div>")
                                .wrap("<div class='innerContainer' data-equalizer-watch></div>");
    $('#section1Row1 .innerContainer').each(function() {
      $(this).children().last().css("padding-bottom","23px");
    });
    $("#profileImage img").width(80);
    $("#profileImage img").height(80);
    $("#section1Row1 .innerContainer").append("<div class='nextPreviousDivSection1'></div>");
    $("#section1Row1 .nextPreviousDivSection1:eq(0)").html(arrowGenerator("next"));
    $("#section1Row1 .nextPreviousDivSection1:eq(1)").html(arrowGenerator("both"));
    $("#section1Row1 .nextPreviousDivSection1:eq(2)").html(arrowGenerator("previous"));

    //Logic for section 2
    $("#educationBlock").unwrap();
    $("#educationBlock").unwrap();
    $("#educationBlock, #experienceHeader, .experienceSubblock:eq(0)").wrapAll("<div class='slide'></div>")
                                                                                                 .wrapAll("<div class='small-11 small-centered columns'></div>")
                                                                                                 .wrapAll("<div class='innerContainer' data-equalizer-watch></div>");
    $(".experienceSubblock:eq(1), .experienceSubblock:eq(2)").wrapAll("<div class='slide'></div>")
                                                                                                 .wrapAll("<div class='small-11 small-centered columns'></div>")
                                                                                                 .wrapAll("<div class='innerContainer' data-equalizer-watch></div>");
    $(".experienceSubblock:eq(3), #skillsBlock").wrapAll("<div class='slide'></div>")
                                                                                                 .wrapAll("<div class='small-11 small-centered columns'></div>")
                                                                                                 .wrapAll("<div class='innerContainer' data-equalizer-watch></div>");
    $("#section2Row1 .innerContainer:eq(1)").prepend($("#experienceHeader").clone().text("EXPERIENCE CONTINUED"));
    $("#section2Row1 .innerContainer:eq(2)").prepend($("#experienceHeader").clone().text("EXPERIENCE CONTINUED"));
    $('#section2Row1 .innerContainer').each(function() {
      $(this).children().last().css("padding-bottom","23px");
    });
    $("#section2Row1 .innerContainer").append("<div class='nextPreviousDivSection2'></div>");
    $("#section2Row1 .nextPreviousDivSection2:eq(0)").html(arrowGenerator("next"));
    $("#section2Row1 .nextPreviousDivSection2:eq(1)").html(arrowGenerator("both"));
    $("#section2Row1 .nextPreviousDivSection2:eq(2)").html(arrowGenerator("previous"));


    //Logic for section 3
    $(".mediumWrapId").unwrap();
    $("#workCube1").unwrap();
    $("#workCube3").unwrap();
    $("#workCube1, #workCube2, #workCube3, #workCube4").wrap("<div class='slide'></div>");
    $("#workCube1, #workCube2, #workCube3, #workCube4").attr('class', 'small-11 small-centered columns');
    $(".nextPreviousDivSection3:eq(0)").html(arrowGenerator("next"));
    $(".nextPreviousDivSection3:eq(1)").html(arrowGenerator("both"));
    $(".nextPreviousDivSection3:eq(2)").html(arrowGenerator("both"));
    $(".nextPreviousDivSection3:eq(3)").html(arrowGenerator("previous"));
    $(".workCubeText").css("padding-bottom","23px");


    //Overall Logic
    nextPrevResize();
    $("p").css("font-size", "0.5rem");
    $("body").css("font-size", "0.8rem");
    temp.addClass("active");
    initFP();
    $("#section3Row1").attr("data-equalizer","");
    $(document).foundation('equalizer', 'reflow');
    //Click listeners
    $(".arrow.rightFloat").click(function() {
    $.fn.fullpage.moveSlideRight();
    });
    $(".arrow.leftFloat").click(function() {
    $.fn.fullpage.moveSlideLeft();
    });
  }

  //Function for dynamic medium page(s)
  function medium() {
    //reset the layout for DOM manipulation
    layoutReset();

    var temp = $(".section.active");
    $.fn.fullpage.destroy('all');

    // Logic for section 1
    $("#profileImage").unwrap();
    $("#profileImage").unwrap();
    $("#profileImage, .descriptionBlock:eq(0)").wrapAll("<div class='slide'></div>")
                                               .wrapAll("<div class='small-11 small-centered columns'></div>")
                                               .wrapAll("<div class='innerContainer' data-equalizer-watch></div>");
    $(".descriptionBlock:eq(1), .descriptionBlock:eq(2)").wrapAll("<div class='slide'></div>")
                                               .wrapAll("<div class='small-11 small-centered columns'></div>")
                                               .wrapAll("<div class='innerContainer' data-equalizer-watch></div>");
    $('#section1Row1 .innerContainer').each(function() {
      $(this).children().last().css("padding-bottom","23px");
    });
    $("#profileImage img").width(200);
    $("#profileImage img").height(200);
    $("#section1Row1 .innerContainer").append("<div class='nextPreviousDivSection1'></div>");
    $("#section1Row1 .nextPreviousDivSection1:eq(0)").html(arrowGenerator("next"));
    $("#section1Row1 .nextPreviousDivSection1:eq(1)").html(arrowGenerator("previous"));

    //Logic for section 2
    $("#educationBlock").unwrap();
    $("#educationBlock").unwrap();
    $("#educationBlock, #experienceHeader, .experienceSubblock:eq(0), .experienceSubblock:eq(1)").wrapAll("<div class='slide'></div>")
                                                                                                 .wrapAll("<div class='small-11 small-centered columns'></div>")
                                                                                                 .wrapAll("<div class='innerContainer' data-equalizer-watch></div>");
    $(".experienceSubblock:eq(2), .experienceSubblock:eq(3), #skillsBlock").wrapAll("<div class='slide'></div>")
                                                                                                 .wrapAll("<div class='small-11 small-centered columns'></div>")
                                                                                                 .wrapAll("<div class='innerContainer' data-equalizer-watch></div>");
    $("#section2Row1 .innerContainer:eq(1)").prepend($("#experienceHeader").clone().text("EXPERIENCE CONTINUED"));
    $('#section2Row1 .innerContainer').each(function() {
      $(this).children().last().css("padding-bottom","23px");
    });
    $("#section2Row1 .innerContainer").append("<div class='nextPreviousDivSection2'></div>");
    $("#section2Row1 .nextPreviousDivSection2:eq(0)").html(arrowGenerator("next"));
    $("#section2Row1 .nextPreviousDivSection2:eq(1)").html(arrowGenerator("previous"));


    //Logic for section 3
    $(".mediumWrapId").unwrap();
    $("#workCube1").unwrap();
    $("#workCube3").unwrap();
    $("#workCube1, #workCube2").wrapAll("<div class='slide'></div>");
    $("#workCube3, #workCube4").wrapAll("<div class='slide'></div>");
    $("#workCube1").wrap("<div class='row'></div>");
    $("#workCube2").wrap("<div class='row'></div>");
    $("#workCube3").wrap("<div class='row'></div>");
    $("#workCube4").wrap("<div class='row'></div>");
    $("#workCube1, #workCube2, #workCube3, #workCube4").attr('class', 'small-10 small-centered columns');
    $("#section3Row1 .nextPreviousDivSection3:eq(1)").html(arrowGenerator("next"));
    $("#section3Row1 .nextPreviousDivSection3:eq(2)").html(arrowGenerator("previous"));
    $(".workCubeText").css("padding-bottom","23px");

    //Overall Logic
    nextPrevResize();
    $("p").css("font-size", "0.7rem");
    $("body").css("font-size", "0.9rem");
    temp.addClass("active");
    initFP();
    $("#section3Row1").attr("data-equalizer","");
    $(document).foundation('equalizer', 'reflow');
    //Click listeners
    $(".arrow.rightFloat").click(function() {
    $.fn.fullpage.moveSlideRight();
    });
    $(".arrow.leftFloat").click(function() {
    $.fn.fullpage.moveSlideLeft();
    });
  }

  //Function for dynamic large page(s)
  function large() {
    //reset the layout for DOM manipulation
    layoutReset();

    //variable to keep track of current section
    var temp = $(".section.active");
    $.fn.fullpage.destroy('all');

    //Overall Logic
    $(document).foundation('equalizer', 'reflow');
    $("p").css("font-size", "0.8em");
    $("body").css("font-size", "1em");
    temp.addClass("active");
    initFP();
  }

  // The size responder
  function sizeResponse() {
    if ($(window).width() > 795){
      large();
    } else if ($(window).width() <= 795 && $(window).width() > 500) {
      medium();
    } else if ($(window).width() <= 500) {
      small();
    }
  }

  // initialize fullpage.js
  initFP();

  //Resize Listener
  $(window).resize( _.throttle( function() {
    menuResize();
    sizeResponse();
  }, 1000 ) );
  $(window).trigger('resize');

  //Initializing Foundation
  $(document).foundation({
    offcanvas : {
      close_on_click : true
    },
    equalizer : {
      equalize_on_stack: true
    }
  });

  //Contact Form JS
  // With help from tutorial: http://blog.teamtreehouse.com/create-ajax-contact-form
  // Get the form.
  $("#ajax-contact").submit(function(event) {
    event.preventDefault();
    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $("#ajax-contact").attr('action'),
      data: formData
    })
    .done(function(response) {
      checkContactForm();
      // Clear the form.
      $("#name").val('');
      $("#email").val('');
      $("#phone").val('');
      $("#website").val('');
      $("#message").val('');
      $("#emailSuccessModal").foundation('reveal', 'open');
    })
    .fail(function(data) {
      checkContactForm();
    });
  });
});
// Initialize skrollr
  var s = skrollr.init({
    smoothScrolling: true,
    forceHeight: false
  });
