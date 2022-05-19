document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show')
})


ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay:500, reset: true});
ScrollReveal().reveal('.cards-banner-one', {delay:500, reset: true});
ScrollReveal().reveal('.cards-banner-two', {delay:500, reset: true});

ScrollReveal().reveal('.links', {  origin: 'bottom',
interval: 106,
duration: 2000,
distance: '150%',
reset: true});

