//modulo 4 

//EXERCICIO 1
var idade = parseInt(prompt('Digite sua idade: '),10);

function checaIdade(idade){
    return new Promise((resolve, reject) =>
      
        setTimeout(() => idade >= 18 ? resolve() : reject(), 2000)
    
    )
}

checaIdade(idade)
.then(() => console.log('Maior de 18 anos'))
.catch(() => console.log("Menor de 18 anos"))

//FIM EXERCICIO 1

//exercicio 2
var buttonUserElement = document.querySelector('#btnUser');
buttonUserElement.onclick = function buscaUser(){
    var user = document.querySelector('#inputUser').value;
    if (!user) return;
    axios.get('https://api.github.com/users/'+ user + '/repos')
    .then(function(response){
        renderRepositories(response.data)
    }).catch(function(error){
        console.warn(error)
    })
}
//fim exercicio 2

//Exercicio 3
var listElement = document.querySelector('#ulUser');
function renderRepositories(repositories){
    
    for(repo of repositories){
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(repo.name);
        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}