const target = 15;
const youNeed =document.getElementById('youNeed');
const slider = document.getElementById('slider');
youNeed.innerHTML = target-slider.value;
function changeValue() {
    let yourAmountValue = slider.value;
    youNeed.innerHTML = target - yourAmountValue;
};
slider.oninput = changeValue;

