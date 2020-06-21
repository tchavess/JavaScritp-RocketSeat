var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];



function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        
        var liElement = document.createElement('li');
        liElement.appendChild(document.createTextNode(todo));
            
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        var textLink = document.createTextNode('Excluir');
        linkElement.appendChild(textLink);
        //pos recebe o indice do elemento que esta sendo iterado  em 'todos'
        var pos = todos.indexOf(todo);
        //setando um atributo onclick e passando a funcao delete com o indice procurado, no parametro
        linkElement.setAttribute('onclick','deleteTodo(' + pos +')');

        liElement.appendChild(linkElement);
            
        listElement.appendChild(liElement);
    }
       
}


renderTodos();

buttonElement.onclick = addTodo;

//adicionando todo a lista pressionando ENTER
document.addEventListener('keypress', function(e){
    if(e.which == 13){
      addTodo();
    }
  }, false);

function addTodo(){
    var todoText = inputElement.value;
    //adiciona(empurra) 'todosText' ao array todos
    todos.push(todoText);
    inputElement.value = '';

    renderTodos();
    saveToStorage();
}

function deleteTodo(pos){
    //splice deleta o item do array na  posição pos
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
