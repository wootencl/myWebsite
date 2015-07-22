// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//NOTES: I know there's a lot of refactoring to be done but this is an initial pass through.
// Mostly to help me learn jquery.
$(document).ready(function() {
  // Variables
  var menu = $('.left-off-canvas-menu');

  // Storage of section3 HTML for reset purposes used in later functions
  $("#section3Row1").data("reset_html", $("#section3Row1").html());
  $("#section2Row1").data("reset_html", $("#section2Row1").html());

  // Note: Basing my responsiveness on the two breakpoints: <= 795 && <= 500 (width | height)
  // String vars for first and second layer of responsiveness
  var par1 = "<p>A little about myself. My name's Carter Wooten and I'm currently a senior student at the College of Charleston " +
  "majoring in computer science. Though I will not be graduating this upcoming May because I have decided to take some additional" +
  " classes to wrap a mathematics and physics minor into my degree. I've decided to put this web page together as a cross between " +
  "an electronic résumé and a way for anyone to check up on what are my current academic, business, and personal pursuits. Also it " +
  "will serve as another means for someone outside my current networked circle to get in touch with me (via the 'contact' section.)" +
  " Lastly this website really helped me get into the world of web development. Having never taken a web development class I truly " +
  "jumped off into the deep end but I would like to say that I came out 'somewhat' unscathed on the other end.</p>";
  var par2 = "<p>With all that said, I suppose if you're here you want to know a little more about my academic/business interests. " +
  "I'm currently employed at Elevation Healthcare in downtown Charleston, SC where I work as many hours as my fairly rigorous " +
  "academic schedule allows. At Elevation Healthcare I wear many different hats of the software/hardware world and as I do so " +
  "I try to learn as much as I can along the way. These hats range from testing new software that Elevation potentially wants to " +
  "invest in, or building a simple GUIed application for excel sheet comparison. As for my academic and personal pursuits, I'm " +
  "currently working on an open source music analysis project (beets) and hope to get to work on another project I have in mind " +
  "after the creation of this website. Hope that serves somewhat as an introduction for myself and please don't hesitate to contact " +
  "me if you desire more information.</p>";
  // String var for the third layer of responsiveness
  var par1_s = "<p>A little about myself. My name's Carter Wooten and I'm currently a senior student at the College of Charleston " +
  "majoring in computer science. Though I will not be graduating this upcoming May because I have decided to take some additional " +
  "classes to wrap a mathematics and physics minor into my degree. I've decided to put this web page together as a cross between an " +
  "electronic résumé and a way for anyone to check up on what are my current academic, business, and personal pursuits.</p>";
  var par2_s = "<p>Also it will " +
  "serve as another means for someone outside my current networked circle to get in touch with me (via the 'contact' section.) Lastly " +
  "this website really helped me get into the world of web development. Having never taken a web development " +
  "class I truly jumped off into the deep end but I would like to say that I came out 'somewhat' unscathed on the other end. With all " +
  "that said, I suppose if you're here you want to know a little more about my academic/business interests. I'm currently employed at " +
  "Elevation Healthcare in downtown Charleston, SC where I work as many hours as my fairly rigorous academic schedule allows. </p>";
  var par3_s = "<p>At Elevation Healthcare I wear many different hats of the software/hardware world and as I do so I try to learn as " +
  "much as I can along the way.These hats range from testing new software that Elevation potentially wants to invest in, or building a simple " +
  "GUIed application for excel sheet comparison. As for my academic and personal pursuits, I'm currently working on an open source " +
  "music analysis project (beets) and hope to get to work on another project I have in mind after the creation of this website. Hope " +
  "that serves somewhat as an introduction for myself and please don't hesitate to contact me if you desire more information.</p>";
  //HTML vars for the layers of responsiveness (Section 1 - ABOUT)
  var largeResponse = "<div class='small-11 small-centered columns'>"+
                        "<div class='innerContainer'>"+
                          "<div class='img'>" +
                            "<img src='images/profilePicture.jpg' height='300px' width='300px'/>"+
                          "</div>" +
                          par1 +
                          par2 +
                        "</div>" +
                      "</div>";
  var mediumResponse = "<div class='slide'>" +
                        "<div class='small-11 small-centered columns'>"+
                          "<div class='innerContainer'>"+
                            "<div class='img'>" +
                              "<img src='images/profilePicture.jpg' height='200px' width='200px'/>"+
                            "</div>" +
                            "<img class='nextArrow' src='images/nextArrow.png' height='23px' width='23px'/>" +
                            par1 +
                          "</div>" +
                        "</div>"+
                      "</div>" +
                      "<div class='slide'>" +
                        "<div class='small-11 small-centered columns'>"+
                          "<div class='innerContainer'>"+
                            "<img class='previousArrow' src='images/previousArrow.png' height='23px' width='23px'/>" +
                            par2 +
                          "</div>" +
                        "</div>"+
                      "</div>";
  var smallResponse = "<div class='slide'>" +
                        "<div class='small-11 small-centered columns'>"+
                          "<div class='innerContainer'>"+
                            "<div class='img'>" +
                              "<img src='images/profilePicture.jpg' height='100px' width='100px'/>"+
                            "</div>" +
                            "<img class='nextArrow' src='images/nextArrow.png' height='23px' width='23px'/>" +
                            par1_s +
                          "</div>" +
                        "</div>"+
                      "</div>" +
                      "<div class='slide'>" +
                        "<div class='small-11 small-centered columns'>"+
                          "<div class='innerContainer'>"+
                            "<img class='previousArrow' src='images/previousArrow.png' height='23px' width='23px'/>" +
                            "<img class='nextArrow' src='images/nextArrow.png' height='23px' width='23px'/>" +
                            par2_s +
                          "</div>" +
                        "</div>"+
                      "</div>" +
                      "<div class='slide'>" +
                        "<div class='small-11 small-centered columns'>"+
                          "<div class='innerContainer'>"+
                            "<img class='previousArrow' src='images/previousArrow.png' height='23px' width='23px'/>" +
                            par3_s +
                          "</div>" +
                        "</div>"+
                      "</div>";
  //HTML vars for the layers of responsiveness (Section 2 - RESUME)
  //Education HTML section
  var educationHTML = "<div class='small-11 small-centered columns'>"+
                        "<div class='innerContainer'>"+
                          "<span class='sectionHeader'>EDUCATION</span>" +
                          "<span class='rightFloat'>Expected: May 2016</span>"+
                        "</div>" +
                      "</div>";

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
      scrollBar:true
    });
  }
  // Layout Reset
  function layoutReset() {
    $("#section3Row1").empty();
    $("#section2Row1").empty();
    $("#section3Row1").html($("#section3Row1").data("reset_html"));
    $("#section2Row1").html($("#section2Row1").data("reset_html"));
  }
  // Functions for the next/previous arrow involved in the slides
  function nextPrevResize() {
    $(".nextPreviousDivSection3").width( $(".workCubeText").width());
    $(".nextPreviousDivSection2").width( $("#educationBlock").width());
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

  //Function for dynamic small page(s)
  function small() {
    //reset the layout for DOM manipulation
    layoutReset();

    //variable to keep track of current section (+overall logic)
    var temp = $(".section.active");
    $.fn.fullpage.destroy('all');

    //Logic for section 1
    $("#section1Row1").empty();
    $("#section1Row1").html(smallResponse);

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
    $("#section2Row1 .innerContainer").children().last().css("padding-bottom","23px");
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
    $("p").css("font-size", "0.8rem");
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
    $("#section1Row1").empty();
    $("#section1Row1").html(mediumResponse);

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
    $("#section2Row1 .innerContainer").children().last().css("padding-bottom","23px");
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
    $("p").css("font-size", "0.9rem");
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

    // Logic for section 1
    $("#section1Row1").empty();
    $("#section1Row1").html(largeResponse);

    //Logic for section 3
    $(document).foundation('equalizer', 'reflow');

    //Overall Logic
    $("p").css("font-size", "0.9rem");
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
});
  // Initialize skrollr
  var s = skrollr.init({
    smoothScrolling: true,
    forceHeight: false
  });