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
$('.about-licenses__slider').slick({
    slidesToShow: 5,
    nextArrow: '<button class="arrows-slider arrows-slider__right about-arrows about-arrows__right"></button>',
    prevArrow: '<button class="arrows-slider arrows-slider__left about-arrows about-arrows__left"></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }      
    ]
});

$('.about-reviews__slider').slick({
    slidesToShow: 5,
    nextArrow: '<button class="arrows-slider arrows-slider__right about-arrows about-arrows__right"></button>',
    prevArrow: '<button class="arrows-slider arrows-slider__left about-arrows about-arrows__left"></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }      
    ] 
});

document.addEventListener('click', function(e) {
  var map = document.querySelector('#map-wrap iframe')
  if(e.target.id === 'map-wrap') {
      map.style.pointerEvents = 'all'
  } else {
      map.style.pointerEvents = 'none'
  }
})
    

$(document).ready(function(){
    var time = 5;
    var $bar,
        $slick, $slick2, $slick3,
        isPause,
        tick,
        percentTime;
    
    $slick = $('.hero__slider');
    $slick.slick({
      speed: 600,
      draggable: true,
      centerPadding: '20px',
      adaptiveHeight: false,
      mobileFirst: true,
      pauseOnDotsHover: false,
      nextArrow: '<button class="arrows-slider arrows-slider__right"></button>',
      prevArrow: '<button class="arrows-slider arrows-slider__left"></button>'
    });
    
    $slick = $('.services__slider-block');
    $slick.slick({
      speed: 600,
      draggable: true,
      fade: true,
      adaptiveHeight: false,
      mobileFirst: true,
      pauseOnDotsHover: false,
      nextArrow: '<button class="arrows-slider arrows-slider__right services-arrows services-arrows__right"></button>',
    prevArrow: '<button class="arrows-slider arrows-slider__left services-arrows services-arrows__left"></button>'
    }); 

    $slick = $('.content-page__slider-down-block');
    $slick.slick({
      speed: 600,
      slidesToShow: 1,
      draggable: true,
      fade: false,
      adaptiveHeight: false,
      mobileFirst: true,
      pauseOnDotsHover: false,
      nextArrow: '<button class="arrows-slider arrows-slider__right services-arrows services-arrows__right"></button>',
    prevArrow: '<button class="arrows-slider arrows-slider__left services-arrows services-arrows__left"></button>',
    responsive: [
      {
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
      if(isPause === false) {
        percentTime += 1 / (time+0.1);
        $bar.css({
          width: percentTime+"%"
        });
        if(percentTime >= 100)
          {
            $slick.slick('slickNext');
            startProgressbar();
          }
        
      }
    }
    $($bar).each(function() {
      $('.arrows-slider').click(function () {
        startProgressbar();
      });
      $('.slick-list').mousedown(function () {
        startProgressbar();
      });      
      
      var w =  document.body.clientWidth;
      if (w <=  '1024' )
      {
        
        $('.slick-list').touchstart(function () {
          startProgressbar();
        });
        
      }
    });

    
    
     startProgressbar();
    
    
    function resetProgressbar() {
      $bar.css({
       width: 0+'%' 
      });
      clearTimeout(tick);
    }
    
  


    

    function interval() {
      if(isPause === false) {
        percentTime += 1 / (time+0.1);
        $bar.css({
          width: percentTime+"%"
        });
        if(percentTime >= 100)
          {
            $slick.slick('slickNext');
            startProgressbar();
            
          }
      }
    }
    
  
  });

  

  $('.tab').on('click', function(e){
    e.preventDefault(); 
  
    $($(this).siblings()).removeClass('active');
    $($(this).parent().siblings().find('.tab-content')).removeClass('active');
  
    $(this).addClass('active')
    $($(this).attr('href')).addClass('active');
  
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
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 40
      },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
  })

  $("#phone").mask("+7(999) 999-99-99");

  $('.nav-toggle').click(function () {
    $(this).toggleClass('opened')
    $('.menu').slideToggle()
    $('wrapper').toggle('overflow: hidden')
      
  });

  $('.footer__bottom-title').click(function () {   
    var w =  document.body.clientWidth;
    if (w <=  '1024' )
    {
      
      $(this).next().slideToggle()
      
    }

    
  });

  ( function() {
    var youtube = document.querySelectorAll( ".about__video-preview" );
    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
        var image = new Image();
                image.src = source;
                image.addEventListener( "load", function() {
                    youtube[ i ].appendChild( image );
                }( i ) );
        
                youtube[i].addEventListener( "click", function() {
                    var iframe = document.createElement( "iframe" );
                    iframe.setAttribute( "frameborder", "0" );
                    iframe.setAttribute( "allowfullscreen", "" );
                    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
                    this.innerHTML = "";
                    this.appendChild( iframe );
                } );    
    };
} )();



  
  