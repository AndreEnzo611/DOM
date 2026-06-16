// Javacript é uma linguagem WEB

// Variáveis - Valores armazenados na memória do computador

// Funções - Blocos de códigos

function carregar (){
    //alert("Bem-Vindo ao JavaScript")

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var data = 17

    msg.innerHTML = `Agora são ${hora}:${minutos} AM`

    if (hora >= 0 && hora < 12){
        imag.src = 'manha.png'
        document.body.style.background = 'Yellow'
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = 'Orange'
    }
    else{}

}