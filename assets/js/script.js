const spareColor = document.getElementById('spare-color');
const black = document.getElementsByClassName('colors__select-black')[0];
const white = document.getElementsByClassName('colors__select-white')[0];

white.addEventListener('click', () => {
    white.classList.add('active');
    black.classList.remove('active');
    spareColor.src = "./assets/img/white2x.png";
})
black.addEventListener('click', () => {
    black.classList.add('active');
    white.classList.remove('active');
    spareColor.src = "./assets/img/black2x.png"
})
