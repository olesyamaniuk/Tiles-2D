$(function () {
  $(".e-g-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    cssEase: "linear",
    prevArrow: ".e-g-gallery-list-left",
    nextArrow: ".e-g-gallery-list-right",
  });
});

$(function () {
  $(".e-g-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".e-g-reviews-list-left",
    nextArrow: ".e-g-reviews-list-right",
  });
});
$(function () {
  $(".e-g-features-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".e-g-features-list-left",
    nextArrow: ".e-g-features-list-right",
  });
});
