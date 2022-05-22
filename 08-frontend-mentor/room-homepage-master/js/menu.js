const mainHamburguer=document.querySelector('.main__nav');
const mainH=document.getElementById('buttonHanburguer');
const buttonClose=document.getElementById('buttonClose');

const size=document.getElementById('size');

const mainLogo=document.querySelector('.main__logo');
const mainLinks=document.querySelector('.main__links');

// const transparent = document.querySelector('.transparent')

mainH.addEventListener('click',()=>{
   mainHamburguer.classList.toggle('main__menu--top')
   console.log('dentro');
   buttonClose.classList.add('main__close--active') 
   mainLinks.classList.add('main__links--active')

    size.classList.add('sizef')
    
   mainH.style.display="none"
   
})

buttonClose.addEventListener('click',()=>{
    mainHamburguer.classList.toggle('main__menu--top')
    buttonClose.classList.remove('main__close--active') 
    mainLinks.classList.remove('main__links--active')

    size.classList.remove('sizef')

    mainH.style.display="block"
})