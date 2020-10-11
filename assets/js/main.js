//Testimonial Slider
$('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    cssEase: 'linear',
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });


  //HOW IT WORKS Slider
$('.slider-work').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  vertical: true,
  verticalSwiping: true,
  cssEase: 'linear',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
      }
    },
  ]
});