$(document).ready(function(){
 
    $(".menu").click(function(){
      $(".navmy").toggleClass("active");
    });

    $('.slider').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        items:1,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
    });
    $('.slider-2').owlCarousel({
      items:4,
      loop:true,
      nav:true,
      margin:20,
      autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:4,
              nav:true,
              loop:true
          }
      }
  });
    $('.slider-4').owlCarousel({
      items:5,
      loop:true,
      nav:true,
      margin:20,
      autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
      responsive:{
          0:{
              items:2,
              nav:false
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:true
          }
      }
  });
  $('.slider-3').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    items:1,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
});
new WOW().init();

    $(".fa-search").click(function(){
      $(".search").addClass("active");

    });
    $("#next").click(function(){
      $(".search").addClass("activ");
    });


  });

  for (let index = 0; index <= 1000; index++) {
      console.log(index);
    
  }




