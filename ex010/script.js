function fat(n=0) {
    let valor = 1
    for (let cont = n; cont > 1; cont--) {
        valor *= cont
    }
    return valor
}

var p = fat(6)
console.log(p)