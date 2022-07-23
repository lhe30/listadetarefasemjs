 ( () => { 
    
    const criarTarefa = (evento) => {
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')

    const input = document.querySelector('[data-form-input]')
    const valor = input.value    
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo


    tarefa.appendChild(Btnconclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)

    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

const Btnconclui = () => {
    const btnconclui = document.createElement('button')
    
    btnconclui.classList.add('check-button')
    btnconclui.innerText = 'Concluir'
    btnconclui.addEventListener('click', conluirTarefa)

    return btnconclui

}

    function conluirTarefa(evento) {
        const botaoConclui = evento.target      
        const tarefaCompleta = botaoConclui.parentElement
        tarefaCompleta.classList.toggle('done')}

    
    
    const BotaoDeleta = () => {
        const botaoDeleta = document.createElement('button')

        botaoDeleta.innerText = 'Deletar'
        botaoDeleta.addEventListener('click', ()=> {
            console.log('Deletanto')
        }) 
        }

        return botaoDeleta
    }

       
)() 