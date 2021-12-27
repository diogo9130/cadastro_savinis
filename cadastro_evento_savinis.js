// Cadastro evento savinis

let dataEvento = new Date ("2021-12-30")
let dataAtual = new Date ("2021-12-27")
let idade = 20
let quanPart = 70

if (dataEvento > dataAtual) {
    console.log("\nData válida.")
    if (idade > 18){
        console.log("\nIdade permitida.")
        if (quanPart < 100) {
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

