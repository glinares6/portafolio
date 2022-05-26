const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon= document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColor=document.getElementById('toggle-colors')
const rootsStyle =document.documentElement.style

toggleTheme.addEventListener('click',() =>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent= 'Dark Mode'
    }else{
        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent= 'Light Mode'
    }
})

toggleColor.addEventListener('click',(e)=>{
    // console.log(e.target.dataset);
    rootsStyle.setProperty('--primary-color',e.target.dataset.color)
})