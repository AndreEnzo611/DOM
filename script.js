// O java Script é uma linguagem de Web

// Variáveis - Valores armazenados na memória do computador

//  Funções - Blocos de código

function carregar(){
    //alert("Bem vindo ao JavaScript")
    var msg = window.document.getElementById('msg')
    var msg = window.document.getElementById('imagem')

    var data = new Data()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minutos}Am`
}