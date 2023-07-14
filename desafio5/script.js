let lista = []
let maiorval = 0
let menorval = 0
let soma = 0

function calcular() {
    var numerop = window.document.getElementById('itab')
    var select = window.document.getElementById('sell')
    let numero = Number(numerop.value)
    if (numerop.value.length <= 0 || Number(numerop.value) > 100 || lista.includes(numero)) {
        window.alert('Valor invalido')
    }
    else {
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        select.appendChild(item)
        lista.push(numero)
        }
    numerop.value = ''
    numerop.focus()
}

function resultado() {
    var p = window.document.getElementById('res')
    for (let pos in lista) {
        if (menorval >= lista[pos] || menorval == 0) {
            menorval = lista[pos]
        }
        if (maiorval <= lista[pos]) {
            maiorval = lista[pos]
        }
        soma += lista[pos]
    }
    p.innerHTML = `
    O total de números adicionado foi ${lista.length} <br>
    O maior número encontrado foi o ${maiorval} <br>
    O menor número encontrado foi ${menorval} <br>
    A soma dos valores é ${soma} <br>
    A média dos valores é ${soma / lista.length}
    `
}