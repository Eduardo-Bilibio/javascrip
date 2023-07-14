var res = ''
var res2 = 0
var x = 0
var y = 0
var z = 0
var rr = 0

function clicar(n) {
    var p = window.document.getElementById('parag')
    if (n == 'C') {
        p.innerHTML = ''
        res = ''
        res2 = 0
        x = 0
        rr = 0
    }
    else if (n == 'D') {
        if (rr == 0) {
            res2 = res
        }
        else{
            res2 = Number(res) / res2
        }
        rr += 1
        res = ''
        p.innerHTML = ''
        y = 4
    }
    else if (n == 'X') {
        if (rr == 0) {
            res2 = res
        }
        else{
            res2 = Number(res) * res2
        }
        rr += 1
        res = ''
        p.innerHTML = ''
        y = 3
    }
    else if (n == 'M') {
        y = 1
        res2 += Number(res)
        res = ''
        p.innerHTML = ''
    }
    else if (n == 'S') {
        y = 2
        if (z < 1) {
            res2 -= Number(res)    
        }
        else {
            res2 += Number(res)
        }
        z += 1
        res = ''
        p.innerHTML = ''
    }
    else if (n == 'I') {
        if (y == 1) {
            res2 += Number(res)
        }
        if (y == 2) {
            res2 -= Number(res)
        }
        if (y == 3) {
            res2 *= Number(res)
        }
        if (y == 4) {
            res2 /= Number(res)
        }
        p.innerHTML = `${res2}`
        res2 = 0
        res = ''
    }
    else {
        p.innerHTML += `${n}`
        res += String(n) 
        
    }
}