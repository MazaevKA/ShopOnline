
let confirm = document.querySelector('.form__input--checkbox');
let discount = document.querySelector('.form__input--discount');

confirm.addEventListener('click', function() {
    if (confirm.checked) {
        discount.disabled = false;
        discount.focus();
    } else {
        discount.disabled = true;
    }

});
