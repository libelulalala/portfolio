var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".popup");
var close = document.querySelector(".btn-popup-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name='username']");
var email = popup.querySelector("[name='email']");
var storage = localStorage.getItem("username");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-show");
    if (storage) {
      username.value = storage;
      email.focus();
    } else {
      username.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
});
form.addEventListener("submit", function(event) {
    if (!(username.value && email.value)) {
    event.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");

    } else {
      localStorage.setItem("username", username.value);
    }
});

window.addEventListener("keydown", function(event) {
if (event.keyCode == 27) {
          if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
            popup.classList.remove("popup-error");
          }
        }
});

ymaps.ready(init);
var myMap;
function init() {
    myMap = new ymaps.Map('y-map', {
        center: [59.939157, 30.320857],
        zoom: [17],
        controls: []
    }),

    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');
    myPlacemark = new ymaps.Placemark([59.939157, 30.320857], {
        hintContent: 'Большая Конюшенная улица, 19/8, Санкт-Петербург, Россия',
        balloonContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/logo-for-map.png',
        iconImageSize: [231, 190],
        iconImageOffset: [160, -100]
    });

    myMap.geoObjects.add(myPlacemark);
}
