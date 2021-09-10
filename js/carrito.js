



 
const BDDJSON = localStorage.getItem("BaseDeDatos")
const BaseDeDatos = JSON.parse(BDDJSON);
console.log(BaseDeDatos);


const carrito = [];
carrito.push(BaseDeDatos[0], BaseDeDatos[5], BaseDeDatos[18]);
console.log(carrito);


function agregarAlCarrito (){


}

let imprimirCards = () => {

    let acumCardCarrito = ``;

    carrito.forEach((producto) => {
        
        acumCardCarrito += `<div class="grid__cardArticulo">
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
            <button type="button" class="btn btn-outline-light">Eliminar <img src="../Multimedia/iconos/times-solid.svg" class="cardArticulo__icono" alt="icono cruz"></button>
        </div>
        </div>`

        
    });
    
    const imprimir = document.getElementById("carrito-section__grid");
    imprimir.insertAdjacentHTML("afterbegin", acumCardCarrito);



    for(let i=0; i<carrito.length; i++){

        let producto = carrito[i];
        let subtotal = document.getElementById("cantidad").value * producto.precio
        let precioTotal = 0;
        precioTotal += subtotal;

        document.getElementById("precioTotal").innerHTML = precioTotal;
    }
}

imprimirCards ();

