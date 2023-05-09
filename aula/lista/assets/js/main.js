const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        createTarefa(inputTarefa.value);
    }
})

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        saveTarefas();
    }
})

function createTarefa(tarefaTexto) {
    const li = createLi();
    li.innerHTML = tarefaTexto;
    tarefas.appendChild(li);
    clearInput();
    clearBtn(li);
    saveTarefas();
}

function createLi() {
    const li = document.createElement('li');
    return li;
}

function clearInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function clearBtn(li) {
    li.innerHTML += '  ';
    const clearButton = document.createElement('button');
    clearButton.innerHTML = 'Apagar';
    //clearButton.classList.add('apagar');
    clearButton.setAttribute('class', 'apagar');
    li.appendChild(clearButton);
}

function saveTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for (let tarefa of liTarefas) {
        let textoTarefas = tarefa.innerText;
        textoTarefas = textoTarefas.replace('Apagar', '').trim();
        listaDeTarefas.push(textoTarefas);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        createTarefa(tarefa);
    }
}






