
var carrito = JSON.parse(localStorage.getItem("carrito"));
const BDD = JSON.parse(localStorage.getItem("BaseDeDatos"));
const precios = [];

function imprimirCards(){

    $("#carrito-section__grid").html(``);

    for(let producto of carrito){

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
                <select name="cantidad" id="cantidad${producto.id}" onchange="subtotal(${producto.precio}, ${producto.id})"class="form-select">
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

        // IMPRIMIR EL PRECIO TOTAL
        const i = producto.id;
        precios[i] = producto.precio;
        const total = precios.reduce((a, b) => Number(a) + Number(b), 0);
        $("#precioTotal").html(total)
    }     
}



function subtotal (precio, id){
    
    // CALCULAR SUBTOTAL
    const cantidad = $(`#cantidad${id}`).val();
    const subtotal = cantidad * precio;
    $(`#subtotal${id}`).html(`<b>Subtotal:</b> $`+subtotal);

    
    // AÑADIR SUBTOTAL AL TOTAL
    const i = id;
    precios[i] = subtotal;


    // SUMAR LOS SUBTOTALES E IMPRIMIR EL TOTAL
    const total = precios.reduce((a, b) => Number(a) + Number(b), 0);
    $("#precioTotal").html(total)
}


imprimirCards ();

function comprar (){
    var carrito = JSON.parse(localStorage.getItem("carrito"));

    const productosCheckout = carrito.map(producto => {
        const cantidad = Number($(`#cantidad${producto.id}`).val())

        return {
            "title": producto.nombre,
            "picture_url": producto.img,
            "quantity": cantidad,
            "currency_id": "ARS",
            "unit_price": producto.precio
        }
    })

    const elemento = { "items": productosCheckout }


    $.ajaxSetup({
        headers: {
            'Authorization': ' Bearer TEST-7588094503560347-092206-5c0364812c16266535119d2d1a76a6a8-419734705',
            'Content-Type': 'application/json'
        }
    });
    
    
    $.post("https://api.mercadopago.com/checkout/preferences", JSON.stringify(elemento), (respuesta, status) => {
        console.log(respuesta);
        console.log(elemento);
        if(status == "success"){
            window.open(respuesta.init_point);
        }
    });
}

function quitarDelCarrito(id) {

    // QUITAR PRODUCTO DEL CARRITO
    carrito = carrito.filter(producto => producto.id !== id);
    console.log(carrito);
    guardarCarrito ();


    // DESCONTAR PRECIO DEL TOTAL
    const i = id;
    precios[i] = 0;
    const total = precios.reduce((a, b) => Number(a) + Number(b), 0);
    $("#precioTotal").html(total)


    // ANIMACION
    $(`#producto${id}`).slideUp(250);
}



function guardarCarrito () {

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


