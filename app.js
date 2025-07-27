
let listaAmigos = []
let listaAmigoExibida = document.getElementById("listaAmigos");


function adicionarAmigo(){
    let nomeAmigo = document.getElementById("amigo");

    if(nomeAmigo.value == ""){
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