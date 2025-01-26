//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeAmigo = document.querySelector('.input-name');
let listaAmigos = [];
let listaAmigosHtml = document.getElementById('listaAmigos');
let resultadoSorteio = document.getElementById('resultado');


function limpaCampo() {
    nomeAmigo.value = '';
}

function limpaLista(lista) {
    lista.innerHTML = '';
}


function sortearAmigo() {
    if (listaAmigos.length <2) {
        alert('Adicione mais um amigo para sortear');
    }else{
        let indexSorteado = parseInt(Math.random() * listaAmigos.length)
        

        limpaLista(listaAmigosHtml);
        let amigoSorteado = document.createElement('li');
        amigoSorteado.textContent = `O amigo sorteado foi: ${listaAmigos[indexSorteado]}`;
    
        resultadoSorteio.appendChild(amigoSorteado);
    
        listaAmigos = [];
    }
}



function adicionarAmigo() {
    if (resultadoSorteio.innerHTML != ''|| resultadoSorteio.innerHTML != null ) {
        limpaLista(resultadoSorteio);   
    }

    if (nomeAmigo.value == '' || nomeAmigo.value == null) {
        alert('É necessario colocar algum nome para adicionar');
    }else{
        listaAmigos.push(nomeAmigo.value);
    
        let amigo = document.createElement('li');
        amigo.textContent = nomeAmigo.value;
    
        listaAmigosHtml.appendChild(amigo);
        console.log(nomeAmigo.value);
        console.log(listaAmigos);
        limpaCampo();
    }


}