jQuery(document).ready(function () {

  // Menubar Active class jQuery
  $('.navbar-nav li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // // Navber Adding
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 400) {
      $(".menu_area").addClass("menubar")
    } else {
      $(".menu_area").removeClass("menubar")
    }
  });

  // // Scrolling Top Button Adding
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling >= $(window).height() - 30) {
      $(".top").addClass("topBtn")
    } else {
      $(".top").removeClass("topBtn")
    }
  });


  // Type Js
  var typed = new Typed('.type', {
    strings: [
      "Web Developer.",
      "UI/UX Designer.",
    ],
    typeSpeed: 100,
    loop: true,
  });

  // Protfolio Menu Active class jQuery
  $('.prot_menu li').click(function () {
    $(this).addClass('active_prot').siblings().removeClass('active_prot');
  });

  // Filtering
  // init Isotope
  var $items = $('.items').isotope({
    // options
  });
  // filter items on button click
  $('.filtering').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $items.isotope({ filter: filterValue });
  });

});


