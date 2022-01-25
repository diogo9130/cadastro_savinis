// Cadastro evento savinis

import entradaDados from "readline-sync"

let infoEvent = {
    dataEvento: new Date ("2022-01-26"),
    dataAtual: new Date ()
} 

let quanPart = [
    "Carlos",
    "Rogério",
    "Fernando",
    "Ana",
    "Miguel"
]

if (infoEvent.dataEvento > infoEvent.dataAtual) {
    console.log("\nA data inserida no cadastro está disponível.");

    let nome = entradaDados.question("\nInsira seu nome: ");
    let idade = entradaDados.question("\nInsira a sua idade: ");

    if (idade >= 18){
        if (quanPart.length < 100) {
            quanPart.push(nome);
            console.log("\nCadastro realizado.");
        } else {
            console.log("\nCadastro não realizado. Excedido o limite de participantes.");
        }
    } else {
        console.log("\nIdade não permitida.");
    }
} else {
    console.log("\nA data inserida no cadastro não está disponível.");
}
console.log("\nObrigado por utilizar noso cadastro.");


