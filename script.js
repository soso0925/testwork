//navigation

const _smpmenu = document.querySelector(".smpmenu__list");
const _smpmenuBtn = document.querySelector(".smpmenu__btn");


_smpmenuBtn.addEventListener('click', function () {
    _smpmenu.classList.toggle('smpmenu__open');
    console.log(_smpmenu);
    _smpmenuBtn.classList.toggle('smpmenu__on');

    if (_smpmenu.classList.contain == 'smpmenu__open') {
        _smpmenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        _smpmenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

//button

// const _button = document.querySelectorAll('.button');

// _button.addEventListener('click', function () {

// })








