import { animate } from './helpers'

const modal = () => {
    const modal = document.querySelector('.popup')
    const modalWindow = modal.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            const width = document.documentElement.clientWidth
            if (width > 768) {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modalWindow.style.top = (25 * progress) + '%'
                    }
                });
            }
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}

export default modal