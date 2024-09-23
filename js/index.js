

// SCROLL HEADER EFFECT -> Header smaller, top header disappears
window.addEventListener('scroll', function () {
    const scroll = window.scrollY;
    const headerTop = document.getElementById('header-top');
    const headerMain = document.getElementById('header-main');
    const windowWidth = window.innerWidth;
    if (scroll > 50) {
        headerTop.style.display = 'none';
        headerMain.classList.add('scrolled');
    } else {

        if (windowWidth > 1024) {
            headerTop.style.display = 'flex';
            headerMain.classList.remove('scrolled');
        }
    }
})


// MOBILE NAVIGATION OPEN AND CLOSE
const mobileNavOpenIcon = document.getElementById('mobile-open-button');
const mobileNavCloseIcon = document.getElementById('mobile-close-button');
const mobileNavigation = document.getElementById('mobile-navigation-menu');

mobileNavOpenIcon.addEventListener('click', function () {
    mobileNavigation.style.transform = 'translateX(0)';
})

mobileNavCloseIcon.addEventListener('click', function () {
    mobileNavigation.style.transform = 'translateX(102vw)';
    
})

// TESTIMONIAL SWIPER SLIDER
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
        991: {
          slidesPerView: 2
      }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});