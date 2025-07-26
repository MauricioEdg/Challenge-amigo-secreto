
let listaAmigos = []

function adicionarAmigo(){
    let nomeAmigo = document.getElementById("amigo");

    if(nomeAmigo.value == ""){
        alert("Por favor insira um nome !!");
    }else{
        amigos.push(nomeAmigo);        
        nomeAmigo.value = "";
    }

}
