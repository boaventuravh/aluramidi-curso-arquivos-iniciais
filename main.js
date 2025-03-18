//recebe o nome da classe do button e converte para o id das tags audio
function gerarIdSomTecla(classTecla){
    idTecla = classTecla.replace("tecla ", "som_");
    return idTecla;
}

//identifica uma tag audio pelo id e reproduz o som
function reproduzirSom(){
    classTecla = gerarIdSomTecla(this.className);
    idTecla = '#' + gerarIdSomTecla(classTecla);
    document.querySelector(idTecla).play();
}

//armazena todas as teclas em uma lista
const listaTeclas = document.querySelectorAll('.tecla');

//atribui a função reproduzirSom ao onclick de todos os botões
listaTeclas.forEach(tecla => {
    tecla.onclick = reproduzirSom;
});