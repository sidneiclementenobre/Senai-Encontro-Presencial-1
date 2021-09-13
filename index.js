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



