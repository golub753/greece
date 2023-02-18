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
    });
    $('.helps-slider').slick('slickGoTo', 2);
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
        for (const smoothLink of smoothLinks) {
            smoothLink.addEventListener('click', (e) => {
                e.preventDefault();
                const id = smoothLink.getAttribute('href');

                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            });
        }
    }

    switchTabs();
    smoothScroll();
});
