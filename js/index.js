let inputElement = document.getElementById('entrada')
let buttonElement = document.getElementById('botao')
let ulElement = document.getElementById('lista')

//let lista = []
let lista = ["Git e GitHub", "JavaScript", "Node", "React"]

buttonElement.onclick = function (event) {
    // Impede que a pagina recarregue ao apertar em tal elemento
    event.preventDefault()

    let value = inputElement.value

    if (value !== "") {
        lista.push(value)
        inputElement.value = ""
        render()
    } else {
        alert("Meu fi, me ajude")
    }

}

//Funcao para remover o elemento
function remove(index) {
    lista.splice(index, 1)
    render()
}

function render() {

    ulElement.innerHTML = ""

    lista.map(function (element, index) {

        //Criar o elemento li
        let liElement = document.createElement('li')
        //Cria o elemento p
        let pElement = document.createElement('p')
        //Adiciona o elemento na Arvore DOM
        pElement.appendChild(document.createTextNode(element));

        //Criando elemento button e adicona elemento na Arvore DOM
        let btnElement = document.createElement('button')
        btnElement.appendChild(document.createTextNode("Deletar"))

        btnElement.setAttribute("type", "button")
        btnElement.setAttribute("onclick", "remove(" + index + ")")

        liElement.appendChild(pElement)
        liElement.appendChild(btnElement)

        ulElement.appendChild(liElement)
    })
}

render()

/*
function render(){
  Formas de percorrer a lista
    for(let i=0; i<lista.length; i++){
        console.log(lista[i])
    }

    for(let element of lista) {
        console.log(element)
    }

    lista.map(function(element) {
        console.log(element)
    })

    lista.forEach(function(element){
        console.log(element)
    })

}
*/