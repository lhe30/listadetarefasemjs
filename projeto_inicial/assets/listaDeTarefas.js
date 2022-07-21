const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', () => {
    const input = document.querySelector('[date-form-input]')

    const valor = input.value

    console.log(valor)
})

