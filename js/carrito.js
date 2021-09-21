
var carrito = JSON.parse(localStorage.carrito);
const BDD = JSON.parse(localStorage.BaseDeDatos);


function imprimirCards(){

    $("#carrito-section__grid").html(``);

    let precioTotal =0;

    for(let producto of carrito){

        
        $("#carrito-section__grid").append(
        `<div id="${producto.id}" class="grid__cardArticulo">
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
                <select name="cantidad" id="cantidad" class="form-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
        <div class="cardArticulo__subtotal">
            <p>Subtotal: $</p>
        </div>
        <div class="cardArticulo__cancel">
            <button type="button" class="btn btn-outline-light" onclick="quitarDelCarrito('${producto.id}')">Eliminar <img src="../Multimedia/iconos/times-solid.svg" class="cardArticulo__icono" alt="icono cruz"></button>
        </div>
        </div>`);
        
        cantidad = $("#cantidad").val();

        precioTotal += producto.precio * cantidad;
    }

        $("#precioTotal").html(precioTotal);
    }


imprimirCards ();


function quitarDelCarrito(id) {

    carrito = carrito.filter(producto => producto.id !== id);
    console.log(carrito)
    guardarCarrito ();
    imprimirCards ();
}

function guardarCarrito () {

    localStorage.carrito = JSON.stringify(carrito);
}