const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', function () {
    let display = navigation.style.display;
    if (display==='none') {
        show(navigation);
    } else {
        hide(navigation);
    }
});

const show =  function(element){
    element.style.display = 'flex';
};

const hide =  function(element){
    element.style.display = 'none';
};
