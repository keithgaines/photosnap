var burger = document.querySelector('.burger');
var overlay = document.querySelector('#overlay');
var parent_overlay = document.querySelector('body');

burger.addEventListener('click', () => {
    if (burger.classList.contains('active_close')) {
        if (overlay) {
            parent_overlay.removeChild(overlay);
        }
        burger.classList.toggle('active_close');
        overlay.classList.toggle('active');
    } else {
        if (overlay) {
            parent_overlay.appendChild(overlay);
        }
        burger.classList.toggle('active_close');
        overlay.classList.toggle('active');
    }
});
