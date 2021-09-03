

class Producto{
    constructor (nombre, marca, precio, stock, descripcion, img, img_dos, img_tres, img_cuatro) {

        this.nombre         = nombre;
        this.marca          = marca;
        this.precio         = precio;
        this.stock          = stock;
        this.descripcion    = descripcion;
        this.img            = img;
        this.img_dos        = img_dos;
        this.img_tres       = img_tres;
        this.img_cuatro     = img_cuatro;
    }

    validarStock (pedido){
        if(this.stock > pedido){

            agregarAlCarrito(this.name, pedido)
            return (true);
        }
        else{
            
            alert(`Stock insuficiente. Stock: ${this.stock}`);
            return (false);
        }
    }
}

const producto1 = new Producto ("Air Jordan 1 Retro High OG 'Shadow 2.0'", "Air Jordan", 20000, 10, "descripción", "imagen 1", "imagen 2", "imagen 3", "imagen 4");

const producto2 = new Producto ("Wmns Dunk Low 'Barely Green'", "Nike", 16200, 20, "descripción", "imagen 1", "imagen 2", "imagen 3", "imagen 4");

const producto3 = new Producto ("Yeezy Boost 700 'Wave Runner'", "Yeezy", 36000, 16, "descripción", "imagen 1", "imagen 2", "imagen 3", "imagen 4");

const producto4 = new Producto ("RS-X3 'Puzzle'", "Puma", 14000, 14, "descripción", "imagen 1", "imagen 2", "imagen 3", "imagen 4");


const productos = [producto1, producto2, producto3, producto4];



// ********************** ORDENAMIENTO POR PRECIO (desafío complementario)

productos.sort((a, b) => { 

    if(a.precio > b.precio){
        return 1;
    }
    if(a.precio < b.precio){
        return -1;
    }
    return 0;
})

console.log (productos);

// ********************** AGREGAR Y QUITAR PRODUCTO DEL CARRITO

const carrito = [];

const agregarAlCarrito = (producto, cantidad) => {

    if (producto.validarStock() = true){

        for (let i=0; i < cantidad; i++){
            carrito.push (producto);
        }
    
        console.log (carrito);
    }
}

const quitarDelCarrito = (producto) => {
    
    carrito.splice(carrito.indexOf(producto.name))

    console.log (carrito);
}

// ********************** SUMA PRECIO CARRITO

const precioTotal = (valor) => {
    
    sumaTotal += valor;

    return (sumaTotal);
}

const precioTotalConIVA = (sumaTotal) => {
    
    sumaTotalConIVA = sumaTotal*IVA;

    return (sumaTotalConIVA);
}

const precioTotalEnCuotas = (sumaTotalConIVA) => {

    precioEnCuotas = sumaTotalConIVA*doceCuotas

    return (precioEnCuotas);
}


let sumaTotal = 0;
let sumaTotalConIVA = 0;
let IVA = 1.21;
let doceCuotas = 1.2


for (let i=0; i < carrito.length; i++){

    precioTotal (carrito[i].precio);

}

precioTotalConIVA (sumaTotal);

precioTotalEnCuotas (sumaTotalConIVA);


console.log(`El precio total sin IVA es de: $${sumaTotal.toFixed(2)}`);

console.log(`El precio total con IVA es de: $${sumaTotalConIVA.toFixed(2)}`);

console.log(`Con opción de 12 cuotas de: $${(precioEnCuotas/12).toFixed(2)} (Interés del 20%)`);


let acumulador = ``;

productos.forEach((producto) => {
    acumulador += `<article class="grid__article">
    <a href="pages/marcas/AirJordan/AirJordan1RetroHighOGShadow2.html">
        <img src="Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen1.jpg" class="article__imagen" alt="Air Jordan 1 Retro High OG 'Shadow 2.0'">
    </a>
    <h2 class="article__nombre">${producto.nombre}</h2>
    <p class="article__precio">${producto.precio}</p>
</article>`
});

document.getElementById("index-section__grid").innerHTML = acumulador;