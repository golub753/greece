import '../sass/style.scss';

$(document).ready(() => {
    $('.helps-slider').slick({
        infinite: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3,
        dots: true,
        nextArrow: `<div class="helps-slide-arr helps-slide-arr--next">
        <img src="../src/assets/helps_arrow.svg" alt="">
        </div>`,
        prevArrow: `<div class="helps-slide-arr helps-slide-arr--prev">
        <img src="../src/assets/helps_arrow.svg" alt="">
        </div>`,
        customPaging(slider, i) {
            return `<span class="active">${i + 1}</span>/${slider.slideCount}`;
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '100px',
                },
            },
        ],
    });
    $('.helps-slider').slick('slickGoTo', 2);
    $('.authors-slider-photos').slick({
        arrows: false,
        infinite: false,
        centerPadding: '100px',
        slidesToShow: 3,
        dots: false,
        asNavFor: '.authors-slider-info',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                },
            },
        ],
    });
    $('.authors-slider-info').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        dots: true,
        nextArrow: `<div class="authors-slide-arr authors-slide-arr--next">
        <img src="../src/assets/authors-arrow.svg" alt="">
        </div>`,
        prevArrow: `<div class="authors-slide-arr authors-slide-arr--prev">
        <img src="../src/assets/authors-arrow.svg" alt="">
        </div>`,
        customPaging(slider, i) {
            return `<span class="active">${i + 1}</span>/${slider.slideCount}`;
        },
        asNavFor: '.authors-slider-photos',
    });
    $('.speakers-persons').slick({
        infinite: false,
        mobileFirst: true,
        centerPadding: '30px',
        slidesToShow: 1,
        centerMode: true,
        dots: true,
        nextArrow: `<div class="speakers-persons-arr speakers-persons-arr--next">
        <img src="../src/assets/authors-arrow.svg" alt="">
        </div>`,
        prevArrow: `<div class="speakers-persons-arr speakers-persons-arr--prev">
        <img src="../src/assets/authors-arrow.svg" alt="">
        </div>`,
        customPaging(slider, i) {
            return `<span class="active">${i + 1}</span>/${slider.slideCount}`;
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: 'unslick',
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    });
    $('.speakers-persons').slick('slickGoTo', 3);
    $('.info-right-stoun-tabs').slick({
        infinite: false,
        mobileFirst: true,
        slidesToShow: 1,
        dots: false,
        nextArrow: `<div class="info-right-stoun-tabs-arr info-right-stoun-tabs-arr--next">
        <img src="../src/assets/info_arrow.svg" alt="">
        </div>`,
        prevArrow: `<div class="info-right-stoun-tabs-arr info-right-stoun-tabs-arr--prev">
        <img src="../src/assets/info_arrow.svg" alt="">
        </div>`,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick',
            },
        ],
    });
    function switchTabs() {
        const tabs = document.querySelectorAll('.info-right-stoun-tab'),
            contents = document.querySelectorAll('.info-right-stoun-content');

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const id = tab.getAttribute('data-target');
                tabs.forEach((item) => {
                    item.classList.remove('active');
                });
                tab.classList.add('active');
                contents.forEach((item) => {
                    item.classList.remove('active');
                });
                document.querySelector(id).classList.add('active');
            });
        });
    }

    function smoothScroll() {
        const header = document.querySelector('.header');
        const smoothLinks = header.querySelectorAll('a[href^="#"]');
        const headerNav = document.querySelector('.header-nav'),
            burger = document.querySelector('.burger');
        for (const smoothLink of smoothLinks) {
            smoothLink.addEventListener('click', (e) => {
                e.preventDefault();
                const id = smoothLink.getAttribute('href');
                burger.classList.remove('active');
                headerNav.classList.remove('active');

                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            });
        }
    }

    function openMenu() {
        const headerNav = document.querySelector('.header-nav'),
            burger = document.querySelector('.burger');

        burger.addEventListener('click', () => {
            headerNav.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    switchTabs();
    smoothScroll();
    openMenu();
});
