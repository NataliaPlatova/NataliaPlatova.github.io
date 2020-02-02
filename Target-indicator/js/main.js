const target = 15;
const slider = document.querySelector('#slider');
const thumb = document.querySelector('.thumb');
let sliderValue = document.querySelector('#slider-value');
let youNeed = document.querySelector('#youNeed');

sliderValue.innerHTML = slider.value;
youNeed.innerHTML = target - slider.value;
thumb.style.left = (slider.value - 4) + 'px';

function changeSliderValue() {
    sliderValue.innerHTML = slider.value;
    youNeed.innerHTML = target - slider.value;
    thumb.style.left = (((slider.value)*110/15)-4) + 'px';
}

slider.addEventListener('input', changeSliderValue);
