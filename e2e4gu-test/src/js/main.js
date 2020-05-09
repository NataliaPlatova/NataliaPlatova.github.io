let nameInput = document.querySelector('.form__name-input');
let nameErrorText = document.querySelector('.name-error-text');

let surnameInput = document.querySelector('.form__surname-input');
let surnameErrorText = document.querySelector('.surname-error-text');

let emailInput = document.querySelector('.form__email-input');
let emailErrorText = document.querySelector('.email-error-text');

let passwordInput = document.querySelector('.form__password-input');
let passwordErrorLength = document.querySelector('.password-error__length');
let passwordErrorText = document.querySelector('.password-error__text');

let passwordRepeatInput = document.querySelector('.form__password-repeat');
let passwordRepeatError = document.querySelector('.password-repeat-error');

let birthdayInput = document.querySelector('.form__birthday-input');
let birthdayError = document.querySelector('.birthday-error');

let submitButton = document.querySelector('.form__submit');

let validFields = {
    'name': false,
    'surname': false,
    'email': false,
    'password': false,
    'passwordRepeat': false,
    'birthday': false
};

/*Проверка, что все поля валидны*/
const checkFormValidation = function() {
    let validForm = validFields.name && validFields.surname && validFields.email && validFields.password && validFields.passwordRepeat && validFields.birthday;
    if(validForm) {
        submitButton.classList.remove('form__submit_disabled');
        submitButton.removeAttribute('disabled');
    }
};

/*Проверка поля имени*/
nameInput.addEventListener('change', function (e) {
    let name = e.target.value;
    /*Проверка, что в имени есть только буквы и возможен дефис*/
    let nameMask = /^[A-Za-zА-Яа-я]+-*[A-Za-zА-Яа-я]+$/;
    if(!nameMask.test(name)) {
        nameErrorText.style.display = 'block';
        nameInput.classList.add('input_invalid');
        validFields.name = false;
    }else{
        nameErrorText.style.display = 'none';
        nameInput.classList.remove('input_invalid');
        validFields.name = true;
    }
    checkFormValidation();
});

/*Проверка поля фамилии*/
surnameInput.addEventListener('change', function (e) {
    let surname = e.target.value;
    /*Проверка, что в фамилии есть только буквы и возможен дефис*/
    let surnameMask = /^[A-Za-zА-Яа-я]+-*[A-Za-zА-Яа-я]+$/;
    if(!surnameMask.test(surname)) {
        surnameErrorText.style.display = 'block';
        surnameInput.classList.add('input_invalid');
        validFields.surname = false;
    }else{
        surnameErrorText.style.display = 'none';
        surnameInput.classList.remove('input_invalid');
        validFields.surname = true;
    }
    checkFormValidation();
});

/*Проверка валидности почты*/
emailInput.addEventListener('change', function (e) {
    let email = e.target.value;
    let emailMask = /^[A-Za-z0-9^\w]+@[A-Za-z0-9^\w]+\.[a-z]/;
    if(!emailMask.test(email)) {
        validFields.email = false;
        emailInput.classList.add('input_invalid');
        emailErrorText.style.display = 'block';
    }else {
        validFields.email = true;
        emailInput.classList.remove('input_invalid');
        emailErrorText.style.display = 'none';
    }
    checkFormValidation();
});

/*Проверка поля пароля*/
passwordInput.addEventListener('change', function (e) {
    let password = e.target.value;
    let passwordMaskCapitals = /[A-Z]/; /*Проверка, есть заглавная буква*/
    let passwordMaskLetters = /[a-z]/; /*Проверка, есть строчная буква*/
    let passwordMaskNumerals = /[0-9]/; /*Проверка, есть цифра*/
    let passwordMaskSymbols = /[^\w]/; /*Проверка, есть символ*/
    if(password.length!==0) {
        /*сначала проверяю длину пароля*/
        if(password.length<8) {
            passwordErrorLength.style.color='#496dac';
            passwordInput.classList.add('input_invalid');
            validFields.password = false;
        }else{
            passwordErrorLength.style.color='#9A9A98';
            passwordInput.classList.remove('input_invalid');
            validFields.password = true;
        }
        /*Дальше проверяю, что есть все символы*/
        if(!(passwordMaskCapitals.test(password)&&passwordMaskLetters.test(password)&&passwordMaskNumerals.test(password)&&passwordMaskSymbols.test(password))){
            passwordErrorText.style.color='#496dac';
            passwordInput.classList.add('input_invalid');
            validFields.password = false;
        }else{
            passwordErrorText.style.color='#9A9A98';
            passwordInput.classList.remove('input_invalid');
            validFields.password = true;
        }
    }else{
        passwordErrorLength.style.color='#9A9A98';
        passwordErrorText.style.color='#9A9A98';
    }
    checkFormValidation();
});

/*Проверка совпадения паролей*/
passwordRepeatInput.addEventListener('change', function (e) {
   let password = passwordInput.value;
   let passwordRepeat = e.target.value;
   if(password!==passwordRepeat){
       passwordRepeatError.style.display='block';
       passwordRepeatInput.classList.add('input_invalid');
       validFields.passwordRepeat = false;
   }else{
       passwordRepeatError.style.display='none';
       passwordRepeatInput.classList.remove('input_invalid');
       validFields.passwordRepeat = true;
   }
   checkFormValidation();
});

/*Проверка возраста*/
birthdayInput.addEventListener('change', function (e) {
   /*Дата рождения*/
   let birthday = e.target.value.toString();
   let birthYear = birthday.slice(0,4);
   let birthMonth = birthday.slice(6,7);
   let birthDay = birthday.slice(9,10);

    /*Сегодняшняя дата*/
   let localDate = new Date().toLocaleDateString('ru-RU');
   let localYear = localDate.slice(6,10);
   let localMonth = localDate.slice(3,5);
   let localDay = localDate.slice(0,2);

   if(localYear-birthYear<18) {
       birthdayError.style.display = 'block';
       birthdayInput.classList.add('input_invalid');
       validFields.birthday = false;
   }else if(localYear-birthYear===18){
       if(localMonth-birthMonth<0){
           birthdayError.style.display = 'block';
           birthdayInput.classList.add('input_invalid');
           validFields.birthday = false;
       }else if(localMonth-birthMonth===0){
           if(localDay-birthDay<0){
               birthdayError.style.display = 'block';
               birthdayInput.classList.add('input_invalid');
               validFields.birthday = false;
           }else{
               birthdayError.style.display = 'none';
               birthdayInput.classList.remove('input_invalid');
               validFields.birthday = true;
           }
       }else{
           birthdayError.style.display = 'none';
           birthdayInput.classList.remove('input_invalid');
           validFields.birthday = true;
       }
   }else{
       birthdayError.style.display = 'none';
       birthdayInput.classList.remove('input_invalid');
       validFields.birthday = true;
   }
   checkFormValidation();
});

