
let listaAmigos = []
let listaAmigoExibida = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");


function adicionarAmigo(){
    let nomeAmigo = document.getElementById("amigo");

    if(nomeAmigo.value.trim() == ""){
        alert("Por favor insira um nome !!");
    }else{
        listaAmigos.push(nomeAmigo.value);        
        nomeAmigo.value = "";        
        atualizaListaAmigos();
    }

}

function atualizaListaAmigos(){
    listaAmigoExibida.innerHTML = "";

    listaAmigos.forEach(function(amigos){
        const item = document.createElement("li");
        
        item.textContent = amigos;
        listaAmigoExibida.appendChild(item);
    })
}

function sortearAmigo(){
    if(listaAmigos.length == 0){
        alert("Lista de amigos vazia, por favor adicione seu amigos !!!");        
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const nomeSorteado = listaAmigos[indiceSorteado];
    resultado.innerHTML = "Amigo(a) sorteado(a): "+ nomeSorteado;
}