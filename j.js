(function($) {
   $(window).on('load', function () {
      var map;
      var mapContainer = $('#google_maps')[0];
      var mapCenter = {lat: 40.692669, lng: -73.883010};

      map = new google.maps.Map(mapContainer, {
         center: mapCenter,
         zoom: 15,
         disableDefaultUI: true
      });

      var icon = {
         url: "img/gmaps/gmaps_pin.png",
         scaledSize: new google.maps.Size(70, 70)
      }

      var marker = new google.maps.Marker({
         position: new google.maps.LatLng(40.697465, -73.887355),
         map: map,
         icon: icon
      });
   });
})(jQuery);



$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,  
    autoplay: true,
    autoplaySpeed: 4000
  });
  
  
  $('.news_gallery').slick({
     dots: true,
     infinite: true,
     speed: 600,
     slidesToShow: 3,
     adaptiveHeight: true,
    //autoplay: true,
    //autoplaySpeed: 2000
});



$(document).ready(function () {
    $('.form_right input').click(function () {
        $('.form_right input').removeClass('focus');
        $(this).addClass('focus');
    })
})



$('#tradeBtn').click(function () {
    $('.modals_bg').addClass('active');
    $('.modals_bg').css('animation', '');
    setTimeout(function () {
       $('.trade_modal').css('display', 'block');
       $('.trade_modal').css('animation', '');
    }, 500);
  })
  $('#commerceBtn').click(function () {
    $('.modals_bg').addClass('active');
    $('.modals_bg').css('animation', '');
    setTimeout(function () {
       $('.commerce_modal').css('display', 'block');
       $('.commerce_modal').css('animation', '');
    }, 500);
  })
  $('.close-btn').click(function () {
    $('.modals_bg').css('animation', 'hideModalBG 800ms forwards');
    $('.trade_modal').css('animation', 'hideModal 800ms forwards')
    $('.commerce_modal').css('animation', 'hideModal 800ms forwards')
    setTimeout(function () {
       $('.modals_bg').removeClass('active');
       $('.modals_bg').css('animation', 'animation: showModal 500ms forwards');
       $('.trade_modal').css('display', 'none');
       $('.trade_modal').css('animation', 'showModal 500ms forwards');
       $('.commerce_modal').css('display', 'none');
       $('.commerce_modal').css('animation', 'showModal 500ms forwards');
    }, 500)
})

