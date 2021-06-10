wow = new WOW(
{
boxClass:     'wow',
animateClass: 'animated',
offset:       0,
mobile:       true,
live:         true
}
)
wow.init();

var navbar = document.getElementById('header__navbar');
var navToggle = document.getElementById('navToggle');
var headerLink = document.getElementsByClassName('header__link');

navToggle.addEventListener('click', event => {

    if(navToggle.classList.contains('shown')) {
        navbar.style.display = "none";
        navToggle.classList.remove('shown');
    }
    else {
        navToggle.classList.add('shown');
        navbar.style.display = "flex";
    }

});

for(let i=0; i < headerLink.length; i++) {
    headerLink[i].addEventListener("click", function(e) {
        e.preventDefault();

        var $this = e.currentTarget;
        var id = $this.getAttribute('data-scroll');
        var scrollTarget = document.getElementById(id);
        const topOffset = document.querySelector('.header__nav').offsetHeight + 50;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });

        navbar.style.display = "none";
        navToggle.classList.remove('shown')

    });
}
