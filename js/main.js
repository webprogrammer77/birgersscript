$(function() {
  
// yandex map-------------

ymaps.ready(init);
var myMap;
var markerSize; 
function init(){     
  myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    center: [67.45492043, 153.71053497],
    center: [59.91817154482064,30.30557799999997],
    zoom: 11,
    controls: [],
  });

  myMap.behaviors.disable('scrollZoom');

  
   var coords = [
  [59.97414671499305,30.312444455078083],
  [59.890752210348296,30.314847714355434], 
  [59.94677378775738,30.38213897412105], 
  [59.91662011350749,30.494062191894486]
  ],
  myCollection = new ymaps.GeoObjectCollection({}, {
    iconLayout: 'default#image',
    iconImageHref: './img/icons/map-marker.svg',
    iconImageSize: [46, 57],
    iconImageOffset: [-26, -52],
       draggable: false 
     });

  for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }


  
  myMap.geoObjects.add(myCollection);
}       
// finish yandex map-----------

$(".compositon").click(function() {
	event.preventDefault();
	$(".compositon").toggleClass("active");    
});

$(".composition-desc__close-link").click(function() {
	event.preventDefault();
	$(".compositon").removeClass("active");    
});

var teamAcco = $(".team-acco__item");
var menuAcco = $(".menu-acco__item");

menuAcco.click(function() {
	event.preventDefault();
	menuAcco.not(this).removeClass("active");
	$(this).toggleClass("active");
});
teamAcco.click(function() {
	event.preventDefault();
	teamAcco.not(this).removeClass("active");
	$(this).toggleClass("active");
});

$(".fixed-menu").changeActiveNav();

$(".hamburger-menu-link").click(function(e) {
			     // $(".hamburger-menu").show(400);
			     $(".hamburger-menu").slideToggle(300); 
			     $(".hamburger-menu__logo").show(500); 
			     // $(".hamburger-menu__logo").slideToggle(500); 
			     e.preventDefault();
			   });
$(".hamburger-menu__close-link").click(function() {      
	event.preventDefault();
        // $(".hamburger-menu").hide(400); 
        $(".hamburger-menu").slideToggle(300);       
        $(".hamburger-menu__logo").hide(300);

      });
$(".hamburger-menu__item").click(function() {      
	event.preventDefault();
        // $(".hamburger-menu").hide(400); 
        $(".hamburger-menu").slideToggle(300);       
        $(".hamburger-menu__logo").hide(300);
        // $(".hamburger-menu__logo").slideToggle(300);

      });
$('.review__button-wrap').click(function() {      
	event.preventDefault();
  var textReview = $(this).prev('.review__shorttext').text();
  var titleReview = $(this).siblings('.review__title').text();
  var textFullReview = $('.full-review__content');
  var titleFullReview = $('.full-review__title');

  textFullReview.text(textReview);
  titleFullReview.text(titleReview);

      $('.full-review__content');// текст всплывашки
      $('.review__button-wrap');// блок-обертка кнопки review__view
      $('.review__shorttext');// текст отзыва который надо поместить 
                              // в $('.full-review__content');   

        $('.full-review').fadeIn(500);


      });
$('.full-review__close').click(function() {
	event.preventDefault();
	// $(".popup, .full__review").slideToggle(500);    
	// $(".popup, .full__review").hide(500);    
	$('.full-review').fadeOut(500);    
	// $(".popup.full__review").removeClass('active');   
});

$('input:submit').click(function() {      
	event.preventDefault();
			// $('.'+$(this).attr("href")).fadeIn(500);        
        $('#success').fadeIn(500);
				// $(".popup.full__review").removeClass('active');   


      });
$('.status-popup__close').click(function() {
	event.preventDefault();
	// $(".popup, .full__review").slideToggle(500);    
	// $(".popup, .full__review").hide(500);    
	$('#success').fadeOut(500);    
	// $(".popup.full__review").removeClass('active');   
});


//////////////// SLIDER //////////////

  $('.backward').click(function(){
    event.preventDefault();
    var slide = $('.slider__item');
    var currentSlide = $('.current');
    var currentSlideIndex = currentSlide.index();
    var nextSlideIndex = currentSlideIndex + 1;
    var nextSlide = slide.eq(nextSlideIndex);

    currentSlide.removeClass('current');

    if(nextSlideIndex === (slide.last().index() + 1)){
       slide.eq(0).addClass('current');
    }else{
      nextSlide.addClass('current');
    }
  });

  $('.forward').click(function(){
    event.preventDefault();
    var slide = $('.slider__item');
    var currentSlide = $('.current');
    var currentSlideIndex = currentSlide.index();
    var prevSlideIndex = currentSlideIndex -1;
    var prevSlide = slide.eq(prevSlideIndex);
    
    currentSlide.removeClass('current');   
    prevSlide.addClass('current');
    
  });

/////////FINISH SLIDER/////////////




// ============finish scripts================
});

// =================DUMP=======================

	// console.log(teamAcco.has(".active"));

// menuAcco.click(function() {
//         menuAcco.removeClass("active");
//         $(this).toggleClass("active");   
//  });


// teamAcco.click(function() {
//         teamAcco.removeClass("active");
//         $(this).toggleClass("active");   
//  });


// $(function(){

// 	$("a").click(function( event ) {
// 		event.preventDefault();
// 	});
// $(".team-acco__item").click(function() {
      
//     $(".team-acco__item").removeClass('active'); $(this).toggleClass("active");    
//  });
// 	$(".menu-acco__item").click(function() {
//       event.preventDefault();
//       $(".menu-acco__item").removeClass('active');
//      // $(this).toggleClass("active");   
//  });

// });
// function accordeon(){
// 	//$('#accordeon .ac-body').slideUp(500);
// 	$('.team-acco__content').not(    $(this).next()   ).slideUp(500);
// 	$(this).next().slideToggle(500);
// }


// function fToggle(){
// 	 $('.menu-acco__item').removeClass("active");
//   $('.menu-acco__content').toggle(800);
// }	

// $(function(elem) {
//    elem.click(function( e ) {
//   e.preventDefault();
//   $(elem).removeClass('active'); $(this).addClass("active"); 
// });

// // $(".compositon__link").hover(function(){$(".compositon__link").addClass("active");});

// // $(".compositon__link").click(function() {
// //       event.preventDefault();
// //     $(".compositon__link").toggleClass("active");    
// //  });

// $(".menu-acco__item.active" ).children(".menu-acco__content").animate({
//          	width: '100%'}, 1000) ; 


// popup- пример==============================

  // $('.popup').hide(); // скрыли фон и всплывающее окно
  // alignCenter($('.popup')); // центрировали окно
  // $(window).resize(function() {
  //   alignCenter($('.popup')); // центрирование при ресайзе окна
  // })
  // $('.review__view').click(function() {
  //   $('.popup').fadeIn(300); // плавно открываем
  // })
  // $('.full-review__close').click(function() {
  //   $('.popup').fadeOut(300); // плавно скрываем
  // })
  // $('.class').click(function() {
  //   alert('Выполнили какое-то действие, затем скрываем окно...'); // сделали что-то...
  //   $('.popup').fadeOut(300); // скрыли
  // })
  // // функция центрирования
  // function alignCenter(elem) {
  //   elem.css({
  //     left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
  //     top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
  //   })
  // }

  // $(".hamburger-menu").hide(400);

        // $(".popup").css('z-index' , '2500');       
        // $(".popup.full__review").addClass('active');       
        // $(".popup").addClass('overlay');       
        // $(".popup, .full__review").slideToggle(900);
        // $(".popup, .full__review").show(900);
// 	$("body").on('click', '[href*="#"]', function(e){
//   var fixed_offset = 0;  
//   $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
//   e.preventDefault();
// });

// function acco(accoItem){
// 	 	accoItem.click(function() {
// 		event.preventDefault();
// 		accoItem.not(this).removeClass("active");
// 		$(this).toggleClass("active");
// 	});
// 	 	return;
// }

/*
$(function () {
	//script for popups
	$('a.show_popup').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});
	
	//script for tabs
	$("div.selectTabs").each(function () {
		var tmp = $(this);
		$(tmp).find(".lineTabs li").each(function (i) {
			$(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
				var tab_id=i+1;
				$(tmp).find(".lineTabs li").removeClass("active");
				$(this).parent().addClass("active");
				$(tmp).find(".tab_content div").stop(false,false).hide();
				$(tmp).find(".tab"+tab_id).stop(false,false).fadeIn(300);
				return false;
			});
		});
	});
});	
*/

// ===========скролинг меню=================
/*
var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
 
$(document).ready(function () {
 
    $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
 
});

// slider-------
$(".slider__list").responsiveSlides({
  auto: true,             // Анимация автоматически, true или false
  speed: 500,            // Скорость смены
  timeout: 4000,          // Время между переходами
  pager: false,           // Показывать нумерацию слайдов
  nav: true,             // Показывать навигацию, true или false
  random: false,          // Случайный показ слайдов true или false
  pause: true,           // Пауза при наведении true или false
  pauseControls: true,    // Пауза при наведении на кнопки навигации
  prevText: "",   // Текст кнопки "Назад"
  nextText: "",       // Текст кнопки "Следующий"
  maxwidth: "100%",           // Максимальная ширина слайдера
  navContainer: "",       // Контейнер слайдера, по умолчанию 'ul'
  manualControls: "",     // Точки навигации
  namespace: "slider__list",   // класс слайдера
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});



*/