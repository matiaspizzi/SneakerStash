
const BDD = JSON.parse(localStorage.getItem("BaseDeDatos"));

var carrito = JSON.parse(localStorage.getItem("carrito"));

const precios = [];

console.log(carrito);
//Si el carrito no se encuentra en el localStorage, sería = Null, por lo que se ejecuta esto:
if (carrito == null) {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function imprimirCards() {

    $("#carrito-section__grid").html(``);

    for (let producto of carrito) {

        $("#carrito-section__grid").append(
            `<div id="producto${producto.id}" class="grid__cardArticulo">
        <a href="marcas/AirJordan/AirJordan1RetroHighOGShadow2.html">
            <img src="../${producto.img}" class="cardArticulo__Img" alt="AirJordan1RetroHighOGShadow2"> 
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
}

imprimirCards();

function precioTotal(precio, id) {

    // CALCULAR SUBTOTAL
    const cantidad = $(`#cantidad${id}`).val();
    const subtotal = cantidad * precio;
    $(`#subtotal${id}`).html(`<b>Subtotal:</b> $` + subtotal);


    // SUMAR LOS SUBTOTALES
    precios[id] = subtotal;
    const total = precios.reduce((a, b) => Number(a) + Number(b), 0);
    $("#precioTotal").html(total);
}


function quitarDelCarrito(id) {

    // QUITAR PRODUCTO DEL CARRITO
    carrito = carrito.filter(producto => producto.id !== id);
    $(`#producto${id}`).slideUp(250);
    guardarCarrito();
    console.log(carrito);


    // DESCONTAR PRECIO DEL TOTAL
    const i = id;
    precios[i] = 0;
    const total = precios.reduce((a, b) => Number(a) + Number(b), 0);
    $("#precioTotal").html(total)
}


function guardarCarrito() {

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


