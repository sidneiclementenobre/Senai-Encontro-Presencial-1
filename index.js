var data = 05/09
const dataAtual = 06/09

if(dataAtual >= data) {
    console.log("Permitir o evento")
} else {
    console.log("Data invalida o cadastro nao sera permitida")
}

var  idade = 18 

if(idade >= 18) {
    console.log("Permitir Cadastro")
} else {
    console.log("Cadastro nao permitido pela idade")
}


let listaDeParticipantes = ["Participantes" , "Palestrantes"];
let quantidadeDeParticipantes = listaDeParticipantes.length;
for (let indice = 0; indice < quantidadeDeParticipantes; indice++) {
    const pessoaCorrente = listaDeParticipantes[indice];
    console.log(pessoaCorrente);
}


var quantidade = 100

if(quantidade <= 100) {
    console.log("Permitir Cadastro de Participantes")
} else {
    console.log("Cadastro nao Permitido por ter excedido o limite")

}

Windows PowerShell
Copyright (C) Microsoft Corporation. Todos os direitos reservados.

Experimente a nova plataforma cruzada PowerShell https://aka.ms/pscore6

PS C:\Users\Erica Nobre\Documents\Senai-Encontro Presencial 1> node index.js
Permitir o evento
Permitir Cadastro
Participantes    
Palestrantes     
Permitir Cadastro de Participantes
PS C:\Users\Erica Nobre\Documents\Senai-Encontro Presencial 1> 
