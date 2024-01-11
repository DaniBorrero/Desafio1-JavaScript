precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

count = document.querySelector(".cantidad");
total =  document.querySelector(".valor-total");

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



