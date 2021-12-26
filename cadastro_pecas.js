// Cadastro de pecas savinis
let pesoPeca = 150
let numeroPecas = 8
let nomePeca = "Disco de Freio"

if (pesoPeca > 100) {
    console.log("\nPeso maior que 100g, podemos cadastrar a peça!!!")

    if (numeroPecas < 10) {
        console.log("\nAinda há espaço na caixa, podemos cadastrar a a peça.")

        if (nomePeca.length < 3) {
            console.log('\nNome muito curto.')
        } else{
            console.log("\nO nome da peça foi cadastrado com sucesso.")
        }
        
    } else {
        console.log('\nNão há espaço disponível na caixa.')
    }

} else{
    console.log("\nPeso insuficiente, não é possível cadastrar.")
}



