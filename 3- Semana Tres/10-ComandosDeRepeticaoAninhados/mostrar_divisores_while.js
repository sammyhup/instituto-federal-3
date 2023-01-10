i = 1
while (i <= 10) {
  console.log("Divisores do número", i, ":")
  j = 1
  while (j <= 10) {
    if (i % j == 0) {
      console.log(j)
    }
    j++
  }
  i++
}