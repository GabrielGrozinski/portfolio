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