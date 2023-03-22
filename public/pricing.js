var btn = document.getElementById('card-button-toggler');
var monthly = document.getElementById('monthly');
var yearly = document.getElementById('yearly');
var third_p = document.querySelectorAll('.price-card p:nth-child(3)')
var fourth_p = document.querySelectorAll('.price-card p:nth-child(4)')
var fifth_p = document.querySelectorAll('.price-card p:nth-child(5)')
var sixth_p = document.querySelectorAll('.price-card p:nth-child(6)')

btn.addEventListener('click', function(e) {
    this.classList.toggle('active')
    monthly.classList.toggle('active');
    yearly.classList.toggle('active');
    third_p.forEach(function(this_p) {
        this_p.classList.toggle('active')
    })
    fourth_p.forEach(function(this_p) {
        this_p.classList.toggle('active')
    })
    fifth_p.forEach(function(this_p) {
        this_p.classList.toggle('active')
    })
    sixth_p.forEach(function(this_p) {
        this_p.classList.toggle('active')
    })
});