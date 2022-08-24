const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function() {
    if(topNav.classList.contains('showNav')) {
        topNav.classList.remove('showNav');
        document.querySelector('.brand-and-navBtn').style.background = 'transparent';
    } else {
        topNav.classList.add('showNav');
        document.querySelector('.brand-and-navBtn').style.background = 'black';
    }
});

function myFunction(x) {
    document.querySelector(".container").classList.toggle("change");
} 