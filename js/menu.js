let btn_menu = document.getElementById('menu-btn');
let list_menu = document.getElementById('menu-list');

btn_menu.addEventListener('click',()=>{
    list_menu.classList.toggle('active-menu');
})