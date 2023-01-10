// Demonstração do 'continue'

cont = 0 // Inicializa cont com 1

while (cont <= 10) { // Laço de 1 até 10

  cont++ // Incrementa cont

  if (cont % 2 == 0) { // Checa se cont é múltiplo de 2
    continue // Pule esta interação
  }
  console.log(cont) // Imprime cont

}

