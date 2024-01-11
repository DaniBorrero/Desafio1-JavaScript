let precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let count = document.querySelector(".cantidad");
let total =  document.querySelector(".valor-total");

function sumar() {
    // console.log(cantidad.innerHTML);
    count.innerHTML = Number(count.innerHTML) +1;
    total.innerHTML = Number(count.innerHTML) * precio;
}

function restar() {
    if (Number(count.innerHTML) > 0) {
        count.innerHTML = Number(count.innerHTML) -1;
        total.innerHTML = Number(count.innerHTML) * precio;
    }
}



