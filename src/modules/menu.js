const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menuElement = document.querySelector('menu')

    const handleMenu = (e) => {
        menuElement.classList.toggle('active-menu')
    }

    const handleClick = (e) => {
        if (e.target.closest('.close-btn') || e.target.closest('ul>li>a')) {
            handleMenu()
        }
    }

    menuBtn.addEventListener('click', handleMenu)
    menuElement.addEventListener('click', handleClick)
}

export default menu
