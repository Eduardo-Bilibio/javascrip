function calcular() {
    var numerop = window.document.getElementById('itab')
    var select = window.document.getElementById('sell')
    if (numerop.value.length == 0) {
        window.alert('Preencha todos os campos')
    }
    else {
        select.innerHTML = ''
        let numero = Number(numerop.value)
        for (let c = 0; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            select.appendChild(item)
        }
    }
}