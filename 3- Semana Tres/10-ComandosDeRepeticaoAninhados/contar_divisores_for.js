for (var i = 1; i <= 10; i++) {
  divisores = 0
  for (var j = 1; j <= 10; j++) {
    if (i % j == 0) {
      divisores++
    }
  }
  console.log("O número", i, "possui", divisores, "divisor(es)!")
}

