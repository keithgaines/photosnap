var burger = document.querySelector('.burger');
var overlay = document.querySelector('#overlay');
var parent_overlay = document.querySelector('body');
parent_overlay.removeChild(overlay);

burger.addEventListener('click', () => {
    if (burger.classList.contains('active_close')) {
        parent_overlay.removeChild(overlay);
        burger.classList.toggle('active_close');
        overlay.classList.toggle('active');
    } else {
        parent_overlay.appendChild(overlay);
        burger.classList.toggle('active_close');
        overlay.classList.toggle('active');
    }
});
