
var carrito = JSON.parse(localStorage.getItem("carrito"));

//Si el carrito no se encuentra en el localStorage, sería = Null, por lo que se ejecuta esto:

if (carrito == null) {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

console.log("carrito:");
console.log(carrito);

const precios = [];

function imprimirCardsCarrito() {

    $("#carrito-section__grid").html(``);

    for (let producto of carrito) {

        $("#carrito-section__grid").append(
            `<div id="producto${producto.id}" class="grid__cardArticulo">
        <a href="marcas/AirJordan/AirJordan1RetroHighOGShadow2.html">
            <img src="${producto.img}" class="cardArticulo__Img" alt="AirJordan1RetroHighOGShadow2"> 
        </a>
        <div class="cardArticulo__datos">
            <h2 class="article__nombre">${producto.nombre}</h2>
            <p class="article__precio">$${producto.precio}</p>
        </div>
        <div class="cardArticulo__select">
            <div class="select__talle">
                <label for="talle">Talle: </label>
                <select name="talle" id="talle" class="form-select">
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="S">S</option>
                </select>
            </div>
            <div class="select__cantidad">
                <label for="cantidad">Cantidad: </label>
                <select name="cantidad" id="cantidad${producto.id}" onchange="precioTotal(${producto.precio}, ${producto.id})"class="form-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
        <div class="cardArticulo__subtotal">
            <p id="subtotal${producto.id}"><b>Subtotal:</b> $${producto.precio}</p>
        </div>
        <div class="cardArticulo__cancel">
            <button type="button" class="btn btn-outline-light" onclick="quitarDelCarrito('${producto.id}')">Eliminar <img src="../Multimedia/iconos/times-solid.svg" class="cardArticulo__icono" alt="icono cruz"></button>
        </div>
        </div>`);

        precioTotal(producto.precio, producto.id);
    }

    if(carrito.length == 0){
        $("#carrito-section__grid").append(
        `<div class="carrito__vacio">
        <p><b>AÚN NO TIENES PRODUCTOS EN EL CARRITO.</b></p>
        </div>`);
    }
} 

imprimirCardsCarrito();



// AGREGAR PRODUCTO AL CARRITO

function agregarAlCarrito(id) {

    console.log("carrito:");
    console.log(carrito);

    $(`#${id}`).fadeOut("normal");
    const productFoundBDD = BDD.find(producto => producto.id === id);

    // Verifica si el producto ya está en el carrito
    const productFoundCart = carrito.find(producto => producto.id === id);

    // Verifica que el producto existe, y si el producto no se encuentra en él.
    if (productFoundBDD != undefined && productFoundCart == null) {

        carrito.push(productFoundBDD);
        guardarCarrito();
    }
}


// QUITAR PRODUCTO DEL CARRITO

function quitarDelCarrito(id) {

    carrito = carrito.filter(producto => producto.id !== id);
    $(`#producto${id}`).slideUp(250);
    guardarCarrito();

    console.log("carrito:");
    console.log(carrito);

    // Actualizar precio total
    precios[id] = 0;
    let total = precios.reduce((a, b) => Number(a) + Number(b), 0);
    $("#precioTotal").html(total)
}


// GUARDAR CARRITO EN LOCAL

function guardarCarrito() {
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


// CALCULAR PRECIO TOTAL

function precioTotal(precio, id) {

    // Subtotales
    let cantidad = $(`#cantidad${id}`).val();
    let subtotal = cantidad * precio;
    $(`#subtotal${id}`).html(`<b>Subtotal:</b> $` + subtotal);

    // Sumar subtotales
    precios[id] = subtotal;
    let total = precios.reduce((a, b) => Number(a) + Number(b), 0);
    $("#precioTotal").html(total);
}