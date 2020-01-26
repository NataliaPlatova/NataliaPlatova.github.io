window.onload = function () {
    let burgerButton = document.querySelector('.page-header__burger');
    let pageMenu = document.querySelector('.menu');
    
    burgerButton.addEventListener('click', function (e) {
        pageMenu.classList.toggle('active');
        burgerButton.classList.toggle('active');
    })
}
