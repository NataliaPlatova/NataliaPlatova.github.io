window.onload = function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
};

const tablist = document.querySelectorAll('.tab');
const ticketslist = document.querySelectorAll('.ticket-cards');

const addTabClickHandler = function (tab, tickets) {
    tab.addEventListener('click', function () {
        for (let i=0; i<tablist.length; i++) {
            removeActive(tablist[i], ticketslist[i]);
        };
        tab.classList.add('active');
        tickets.classList.remove('hidden');
    })
};

for (let i = 0; i < tablist.length; i++) {
    addTabClickHandler(tablist[i], ticketslist[i]);
};

const removeActive = function (tab, tickets) {
        tab.classList.remove('active');
        tickets.classList.add('hidden');
};
