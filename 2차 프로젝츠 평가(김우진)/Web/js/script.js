$(function() {
    $('.slide-container').slick({
        dots: false,
        arrows: true,

        autoplay: true,                 
        autoplaySpeed: 3000,           
        infinite: true,                 
        speed:500,                      

        slidesToShow: 1,              
        slidesToScroll: 1,              

        pauseOnDotsHover: true,         
        pauseOnFocus: true,             
        pauseOnHover: true,             

        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></btton>',
        asNavFor: '.slide-nav',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
    
        ]
    })

    $('.slide-nav').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,

        pauseOnDotsHover: true,         
        pauseOnFocus: true,             
        pauseOnHover: true,             
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.slide-container',
    })
})