import $ from "jquery";
import slick from "slick-carousel";

export default function () {
    $('.slider__body').slick({
        dots: true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {

                }
            }
        ]
    });
}