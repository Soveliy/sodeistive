// $('.hero__slider').slick({
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: true,
//     
// });



// $('.services__slider-text').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     asNavFor: '.services__slider-block'
//   });
//   $('.services__slider-block').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     asNavFor: '.services__slider-text',
//     dots: false,
//     centerMode: true,
//     focusOnSelect: true,
//     fade: true,
//     nextArrow: '<button class="arrows-slider arrows-slider__right services-arrows services-arrows__right"></button>',
//     prevArrow: '<button class="arrows-slider arrows-slider__left services-arrows services-arrows__left"></button>'
//   });

// var mySwiper = new Swiper('.swiper-container', {
//     speed: 400,
//     spaceBetween: 100,
//     loop: true,
//     autoplay: true,
//     onProgress: move,
//     // pagination: {
//     //     el: '.swiper-pagination',
//     //     type: 'move',
//     //   },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
// });

// function move() {
//     var elem = document.getElementById("progress"); 
//     var width = 1;
//     var autoplayTime = autoplay / 100;
//     var id = setInterval(frame, autoplayTime);
//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         } else {
//             width++; 
//             elem.style.width = width + '%'; 
//         }
//     }
// }

// document.addEventListener('click', function(e) {
//   var map = document.querySelector('#wrapMap iframe');
//   if(e.target.id === '#wrapMap') {
//     map.style.pointerEvents = 'all';
//   } else {
//     map.style.pointerEvents = 'none';
//   }
// });



$('.about-licenses__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
  speed: 300,
  nextArrow: '<button class="arrows-slider arrows-slider__right about-arrows about-arrows__right"></button>',
  prevArrow: '<button class="arrows-slider arrows-slider__left about-arrows about-arrows__left"></button>',
  responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,


      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,

      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,

      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.about-reviews__slider').slick({
  slidesToShow: 5,
  infinite: false,
  speed: 300,
  nextArrow: '<button class="arrows-slider arrows-slider__right about-arrows about-arrows__right"></button>',
  prevArrow: '<button class="arrows-slider arrows-slider__left about-arrows about-arrows__left"></button>',
  responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,


      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,

      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,

      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




$(document).ready(function () {
  var time = 5;
  var $bar,
    $slick, $slick2, $slick3,
    isPause,
    tick,
    percentTime;

  $slick = $('.hero__slider');

  $slick.slick({

    infinite: false,
    draggable: true,
    centerPadding: '20px',
    adaptiveHeight: false,
    mobileFirst: true,
    pauseOnDotsHover: false,
    nextArrow: $('.hero__slider-arrow-right'),
    prevArrow: $('.hero__slider-arrow-right')
  });

  $slick2 = $('.services__slider-block');
  $slick2.slick({
    infinite: false,
    speed: 600,
    draggable: true,
    fade: true,
    adaptiveHeight: false,
    mobileFirst: true,
    pauseOnDotsHover: false,
    nextArrow: '<button class="arrows-slider arrows-slider__right services-arrows services-arrows__right"></button>',
    prevArrow: '<button class="arrows-slider arrows-slider__left services-arrows services-arrows__left"></button>'
  });

  $slick3 = $('.content-page__slider-down-block');
  $slick3.slick({
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 400,
    slidesToShow: 1,
    draggable: true,
    fade: false,
    adaptiveHeight: false,
    mobileFirst: true,
    pauseOnDotsHover: false,
    infinite: false,
    nextArrow: '<button class="arrows-slider arrows-slider__right services-arrows services-arrows__right"></button>',
    prevArrow: '<button class="arrows-slider arrows-slider__left services-arrows services-arrows__left"></button>',
    responsive: [{
        breakpoint: 550,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,

        }
      }

    ]
  });



  $bar = $('.slider-progress .progress');




  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $bar.css({
        width: percentTime + "%"
      });
      if (percentTime >= 100) {
        $slick.slick('slickNext');
        $slick2.slick('slickNext');
        $slick3.slick('slickNext');
        startProgressbar();
      }

    }
  }
  $($bar).each(function () {
    $('.arrows-slider').click(function () {
      startProgressbar();
    });
    $('.slick-list').mousedown(function () {
      startProgressbar();
    });

    var w = document.body.clientWidth;
    if (w <= '1024') {

      $('.slick-list').touchstart(function () {
        startProgressbar();
      });

    }
  });



  startProgressbar();


  function resetProgressbar() {
    $bar.css({
      width: 0 + '%'
    });
    clearTimeout(tick);
  }


  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).parent().parent().find('.tab')).removeClass('active');
    $($(this).parent().parent().siblings().find('.tab-content')).removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
    startProgressbar();
  });






  // function interval() {
  //   if(isPause === false) {
  //     percentTime += 1 / (time+0.1);
  //     $bar.css({
  //       width: percentTime+"%"
  //     });
  //     if(percentTime >= 100)
  //       {
  //         $slick.slick('slickNext');
  //         startProgressbar();

  //       }
  //   }
  // }


});


//   $('.logo__item').mouseover(function (e) {
//     $(this).next().css('display', 'block');
// });

var mySwiper = new Swiper('.swiper-container', {
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slidesPerColumnFill: 'row',
  loop: false,
  slidesPerColumn: 2,
  slidesPerView: 5,
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 20
    },
    550: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30
    },
    750: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 40
    },
    1400: {
      slidesPerView: 5,
      slidesPerColumn: 2,
      spaceBetween: 40
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

$(".numbox").mask("+7(999) 999-99-99");

// $('.nav-toggle').click(function () {
//   $(this).toggleClass('opened')
//   $('.menu').slideToggle()
//   $('wrapper').toggle('overflow: hidden');
//   $("body").toggleClass("js-hidden")

// });

$('.footer__bottom-title').click(function () {
  var w = document.body.clientWidth;
  if (w <= '1024') {

    $(this).next().slideToggle()

  }


});

(function () {
  var youtube = document.querySelectorAll(".about__video-preview");
  for (var i = 0; i < youtube.length; i++) {
    var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
    var image = new Image();
    image.src = source;
    image.addEventListener("load", function () {
      youtube[i].appendChild(image);
    }(i));

    youtube[i].addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
      this.innerHTML = "";
      this.appendChild(iframe);
    });
  };
})();

//start_menu
$('.nav-toggle').click(function () {
  $(this).toggleClass('active');
  $('.menu--mobile').toggleClass('active');
  // $('.menu--mobile').slideToggle();
  $('.hero').toggleClass('active');
  $('body').toggleClass('hid_imp');
  $('body').addClass('vis_item');
});

function resizeMenu() {
  var windowWidth = $(window).width();
  if (windowWidth <= 1367) {
    //for_body
    if ($(".menu--mobile").hasClass("active")) {
      //code
      $('body').addClass('hid_imp');
    }
  } else {
    //for_body
    $('.menu--mobile').removeClass('active');
    $('.hero').removeClass('active');
    $('body').removeClass('hid_imp');
    $('.nav-toggle').removeClass('active');
  }
}
resizeMenu();
$(window).resize(function () {
  resizeMenu();
});


//for_a
$('.menu--mobile ul li a').click(function () {
  $('.nav-toggle').removeClass('active');
  $('.menu--mobile').removeClass('active');
  $('body').removeClass('hid_imp');
});
//end_menu
$('.content_box_site table, .content_block table, .text_poll table').addClass('content-page__table').addClass("table_box");
$('.content_box_site table tr, .content_block table tr, .text_poll table tr').addClass('content-page__tr');
$('.content_box_site table td, .content_block table td, .text_poll table td').addClass('content-page__td');
$('.content_box_site table span, .content_block table span, .text_poll table span').addClass('content-page__td--title');
