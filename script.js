function mudarTexto(id, texto) {
    document.getElementById(id).textContent = texto;
}

function retornarTexto(id, texto) {
    document.getElementById(id).textContent = texto;
}

function abrirCurriculo(id, id2) {
    setTimeout(() => {
        document.getElementById(id).classList.add('ativado');
        document.getElementById(id2).classList.add('ativado');        
    }, 200);
}

function fecharCurriculo(id, id2) {
    document.getElementById(id).classList.remove('ativado');
    document.getElementById(id2).classList.remove('ativado');
}

function ScrollTo(event, id) {
    event.preventDefault();
    const posicaoElemento = document.getElementById(id).getBoundingClientRect().top;

    // 15% de 100vh = 15vh
    const offSet = window.innerWidth < 1024 ? 240 : 200;
    const offSetPosition = window.pageYOffset + posicaoElemento - offSet;

    window.scrollTo({
        top: offSetPosition,
        behavior: "smooth"
    });

}