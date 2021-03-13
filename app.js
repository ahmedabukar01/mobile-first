const showBar = document.getElementById("show-bar");
const exitBar = document.getElementById("exit-bar");
const nav = document.querySelector('nav');

showBar.addEventListener('click',()=>{
    nav.classList.add('menu-btn');
});
exitBar.addEventListener('click',()=>{
    nav.classList.remove('menu-btn');
});
