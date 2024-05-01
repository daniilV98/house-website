/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

const navLinks = document.querySelectorAll('.nav__list a');
const phoneInputs = document.querySelectorAll('[data-tel-input]');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll')
}

document.addEventListener("DOMContentLoaded", function() {
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('header__top-row--mobile');
            navIcon.classList.remove('nav-icon--active');
            document.body.classList.remove('no-scroll')
        });
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Phone Mask */
mask('[data-tel-input]');

phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = ''
    })
    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = ''
    })
});

/* Yandex Map */
ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map('map', {
        center: [59.943543, 30.338928],
        zoom: 16
    });

    var myPlaceMark = new ymaps.Placemark(
        [59.943543, 30.338928],
        {
            balloonContent: `
                <div class="balloon">
                    <div class="balloon__addess">Наб. реки Фонтанки 10-15</div>
                    <div class="balloon__contacts">
                        <a href="tel:+78121234567">8 (812) 123-45-67</a>
                    </div>
                </div>
            `
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/location-pin.svg',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40],
        }
    );

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('rulerControl');
    myMap.behaviors.disable(['scrollZoom']);

    myMap.geoObjects.add(myPlaceMark);
}