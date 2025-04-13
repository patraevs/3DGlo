const validation = () => {

    const totalArea = document.querySelector('.calc-item.calc-square')
    totalArea.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    })

    const numberOfRooms = document.querySelector('.calc-item.calc-count')
    numberOfRooms.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    })

    const dueDate = document.querySelector('.calc-item.calc-day')
    dueDate.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    })

    const formNameOne = document.getElementById('form1-name')
    formNameOne.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\- ]/g, '');
    })

    const formNameTwo = document.getElementById('form2-name')
    formNameTwo.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\- ]/g, '');
    })

    const formnameThree = document.getElementById('form3-name')
    formnameThree.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\- ]/g, '');
    })

    const inputMessage = document.getElementById('form2-message')
    inputMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\- ]/g, '');
    })

    const inputEmailOne = document.getElementById('form1-email')
    inputEmailOne.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/g, '');
    })

    const inputEmailTwo = document.getElementById('form2-email')
    inputEmailTwo.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/g, '');
    })

    const inputEmailThree = document.getElementById('form3-email')
    inputEmailThree.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/g, '');
    })

    const inputPhoneOne = document.getElementById('form1-phone')
    inputPhoneOne.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9()\-]/g, '');
    })

    const inputPhoneTwo = document.getElementById('form2-phone')
    inputPhoneTwo.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9()\-]/g, '');
    })

    const inputPhoneThree = document.getElementById('form3-phone')
    inputPhoneThree.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9()\-]/g, '');
    })

}

export default validation