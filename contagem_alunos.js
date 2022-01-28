let alunos = [
    "Carlos",
    "Fernando",
    "Miguel",
    "Maria",
    "Joana",
    "Fernanda",
    "Rafael"
]

for (let contador = 0; contador <= alunos.length; contador++){
    if (contador === 0){
        console.log("\nO número é ZERO")
    } else if (contador % 2 === 0){
        console.log("\nO número "+contador+" é PAR")
    } else if (contador % 2 != 0){
        console.log(`\nO número ${contador} é ÍMPAR`)
    } 
}