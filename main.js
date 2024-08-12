const button = document.querySelector('.btn')
const image = document.querySelector('.pic')
const starIcon = document.querySelector('.staricon')
const buttonSpan = document.querySelector('.btnspan')

button.addEventListener('click', () => {
    if(image.alt === 'camera'){
        image.src = 'img/mic.jpg';
        image.alt = 'microphone';
        starIcon.className = 'fa-solid fa-skull staricon';
        buttonSpan.innerHTML = 'cosmos';
    } else {
        image.alt = 'camera';
        starIcon.className = 'fa-brands fa-youtube staricon';
        buttonSpan.innerHTML = 'toxic';
    }
})
