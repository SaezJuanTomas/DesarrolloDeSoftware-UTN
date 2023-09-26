interface Producto {
    nombre: string;
    precio: number;
}

// Diferencia entre interface y type (mejor) es que el type puede ser usado para definir tipos primitivos y uniones de tipos (string | number)

type Producto2 = {
    nombre: string;
    precio: number;
}

const telefono: Producto = {
    nombre: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    nombre: 'iPad Air',
    precio: 350
}

document.addEventListener("DOMContentLoaded", async () => {
    const products = await fetchProducts();

    const spinner = document.getElementById("spinner");
    spinner.style.display = "none";
});
