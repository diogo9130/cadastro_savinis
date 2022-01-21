// Cadastro evento savinis

let infoEvent = {
    dataEvento: new Date ("2022-01-25"),
    dataAtual: new Date ()
} 

let infoPart = {
    idade: 20,
    quanPart: 70
} 

if (infoEvent.dataEvento > infoEvent.dataAtual) {
    console.log("\nData válida.")
    if (infoPart.idade > 18){
        console.log("\nIdade permitida.")
        if (infoPart.quanPart < 100) {
            console.log("\nCadastro realizado.")
        } else {
            console.log("\nCadastro não realizado. Excedido o limite de participantes.")
        }
    } else {
        console.log("\nIdade não permitida.")
    }
} else {
    console.log("\nData inválida.")
}
console.log("\nObrigado por utilizar noso cadastro")

