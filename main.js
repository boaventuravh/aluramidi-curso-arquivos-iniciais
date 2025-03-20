//armazena todas as teclas em uma lista
const listaTeclas = document.querySelectorAll('.tecla');

//identifica uma tag audio pelo id e reproduz o som
function reproduzirSom(){
    classTecla = gerarIdSomTecla(this.className);
    idTecla = '#' + classTecla;
    document.querySelector(idTecla).play();
}

//recebe o nome da classe do button e converte para o id das tags audio
function gerarIdSomTecla(classTecla){
    idTecla = classTecla.replace("tecla ", "som_");
    return idTecla;
}

//atribui a função reproduzirSom ao onclick de todos os botões
listaTeclas.forEach(tecla => {
    tecla.onclick = reproduzirSom;

    tecla.onkeydown = function (evento) {
        console.log(evento.code);
        if(evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
        
        if(evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
});