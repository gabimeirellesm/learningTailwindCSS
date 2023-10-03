const burguer = document.querySelector('#menu-burguer')
const menu = document.querySelector('#menu')

burguer.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})