
const images = document.querySelectorAll('.img');
const containerImage= document.querySelector('.container__img')


const imageContainer=document.querySelector('.img-show')
const copy = document.querySelector('.copy')

const buttonClose= document.querySelector('.bx-x')



images.forEach(image =>{

    image.addEventListener('click', () =>{
   
        addImage(image.getAttribute('src'),image.getAttribute('alt'))
       
        
    })

})

    const addImage= (srcImage,altImage)=>{
        containerImage.classList.toggle('move');
        imageContainer.classList.toggle('show');
        imageContainer.src = srcImage;
        copy.innerHTML= altImage;
    }
    buttonClose.addEventListener('click',()=>{
        containerImage.classList.toggle('move');
        imageContainer.classList.toggle('show');
   
})



