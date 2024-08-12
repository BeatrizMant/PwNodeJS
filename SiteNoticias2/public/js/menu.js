//Função para selecionar uma opção clicada do menu
var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item)=>
        item.classList.remove('ativo') 
    )
    this.classList.add('ativo')
    //remove a classe ativo de um link não clicado para um clicado
    //vetor = variavél que guarda vários valores
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

// Expandir o menu
var  btnAbrir  = document.querySelector('#btn-abrir')
var menuSide = document.querySelector('.menu')

btnAbrir.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

//.classList.toggle diz que sempre que clicar essa clase estiver aberta deve fechar, e caso esteja fechada deve se expandir
