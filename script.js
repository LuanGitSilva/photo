const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function() {
    if(topNav.classList.contains('showNav')) {
        topNav.classList.remove('showNav');
    } else {
        topNav.classList.add('showNav');
    }
});

function myFunction(x) {
    document.querySelector(".container").classList.toggle("change");
} 

// /* lightbox */
// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });