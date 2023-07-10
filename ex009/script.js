let garagem = [6, 5, 4, 3]
/*
for (var pos = 0; pos < garagem.length; pos++) {
    console.log(`o valor número ${pos} é ${garagem[pos]}`)
}
*/
for (pos in garagem) {
    console.log(`o valor número ${pos} é ${garagem[pos]}`) // geito simplificado
}