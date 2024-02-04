$(document).ready(() => {
    // Responsive navbar
    $("#menu-button").on("click", () => {
        $("#menu").toggleClass("hidden");
    });

    $("#cnt").text(localStorage.getItem("cnt"));

    // Own Carousel
    var horizontalCarousel = $(".sampleSlick").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        swipeToSlide:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    var verticalCarousel = $(".nestedSlick").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        vertical: true,
        verticalSwiping:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    vertical: true,
                },
            },
        ],
    });

    // navbar animation
        var menuButton = document.getElementById('menuButton');

        if (menuButton) {
            menuButton.addEventListener('click', function () {
                menuButton.classList.toggle('cross-mark');
            });
        }
})  