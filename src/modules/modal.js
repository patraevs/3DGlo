const modal = () => {
    const modal = document.querySelector('.popup')
    const modalWindow = modal.querySelector('.popup-content')
    const width = document.documentElement.clientWidth

    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')

    let count = 0

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            if (width > 768) animacion()
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        count = 0
    })

    const animacion = () => {
        count++
        console.log(count);
        modalWindow.style.top = count * 2 + 'px'
        if (count < 100) setTimeout(animacion, 10)
    }
}

export default modal