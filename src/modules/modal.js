const modal = () => {
    const modal = document.querySelector('.popup')
    const modalWindow = modal.querySelector('.popup-content')
    const width = document.documentElement.clientWidth
    const buttons = document.querySelectorAll('.popup-btn')

    let count = 0

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            if (width > 768) animacion()
        })
    })

    const animacion = () => {
        count++
        modalWindow.style.top = count * 2 + 'px'
        if (count < 100) setTimeout(animacion, 10)
    }

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
            count = 0
        }
    })
}

export default modal