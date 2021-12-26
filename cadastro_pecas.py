# Cadastro de pecas savinis
peso_peca = 150
numero_pecas = 8
nome_peca = "Disco de Freio"

if peso_peca > 100:
    print("\nPeso maior que 100g, podemos cadastrar a peça!!!")
    if numero_pecas < 10:
        print("\nAinda há espaço na caixa, podemos cadastrar a a peça.")
        if len (nome_peca) < 3:
            print('\nNome muito curto.')
        else:
            print("\nO nome da peça foi cadastrado com sucesso.")
    else:
        print('\nNão há espaço disponível na caixa.')
else:
    print("\nPeso insuficiente, não é possível cadastrar.")