i = 1
while (i <= 10) {
  divisores = 0
  j = 1
  while (j <= i) {
    if (i % j == 0) {
      divisores++
    }
    j++
  }
  console.log("O número", i, "possui", divisores, "divisor(es)!")
  i++
}