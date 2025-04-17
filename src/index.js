import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import validation from './modules/validation'
import tabs from './modules/tabs'
import slider from './modules/slider'
import { sliderCarousel } from './modules/sliderCarousel'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

timer('17 april 2025')
menu()
modal()
validation()
tabs()
slider()
sliderCarousel()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})

