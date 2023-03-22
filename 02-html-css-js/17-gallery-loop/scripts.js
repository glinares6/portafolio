const containerSlider= document.querySelector(".container-slider");
const slider = document.querySelector("#slider");

let sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const  btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);


const  Next=()=> {
    let sliderSectionFirst =document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft ="-200%";
    slider.style.transition ="all  0.5s";
    setTimeout(function(){
        slider.style.transition ="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft="-100%"
    },500);
}
const Prev= () => {
    let sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft ="0%";
    slider.style.transition ="all  0.5s";
    setTimeout(() =>{
        slider.style.transition ="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft="-100%"
    },500)
}

btnRight.addEventListener('click',()=> {
    Next()
})
btnLeft.addEventListener('click',() =>{
    Prev()
})

    let start=()=>{
       let=loop= setInterval(() => {
            Next()
        }, 3000);    
    } 

    let stop=()=>{
        clearInterval(loop)     
    }
    
    start()
    containerSlider.addEventListener('mouseenter',()=>{
        stop()
    })    
    containerSlider.addEventListener('mouseleave',()=>{
        start()
    })    



    

