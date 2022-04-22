const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeTogler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', ()=> {
    sideMenu.style.display = 'block'
})
closeBtn.addEventListener('click', ()=> {
    sideMenu.style.display = 'none'
})
themeTogler.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme-variables')

    themeTogler.querySelector('svg:nth-child(1)').classList.toggle('active');
    themeTogler.querySelector('svg:nth-child(2)').classList.toggle('active');
})