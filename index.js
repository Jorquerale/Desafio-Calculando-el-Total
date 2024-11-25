precio = 400000
let cantidad = 1
let total = precio * cantidad

precioSpan = document.querySelector(".precio-inicial");
cantidadSpan = document.querySelector(".cantidad");
totalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio
cantidadSpan.innerHTML = cantidad
totalSpan.innerHTML = total


document.querySelector(".btn-mas").addEventListener("click", () => {
    cantidadtotal = ++cantidad
    total = precio * cantidadtotal
    cantidadSpan = document.querySelector(".cantidad");
    cantidadSpan.innerHTML = cantidadtotal

    totalSpan = document.querySelector(".valor-total");
    totalSpan.innerHTML = total
})

document.querySelector(".btn-menos").addEventListener("click", () => {
    if (cantidad >0) {
        cantidadtotal = --cantidad
        total = precio * cantidadtotal
        cantidadSpan = document.querySelector(".cantidad");
        cantidadSpan.innerHTML = cantidadtotal
    
        totalSpan = document.querySelector(".valor-total");
        totalSpan.innerHTML = total
    }
    
})


