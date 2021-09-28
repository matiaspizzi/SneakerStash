const BDD = [];


$.getJSON("data/productos.json", function (productos) {

    productos.forEach(producto => {

        BDD.push(producto);
    });
});

var favoritos = JSON.parse(localStorage.getItem("favoritos"));



console.log(favoritos);

if (favoritos == null) {
    favoritos = [];
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

imprimirCards();

function imprimirCards() {

    $("#favoritos-section__grid").html(``);

    for (let producto of favoritos) {

        $("#favoritos-section__grid").append(
            `   <div id="producto${producto.id}" class="grid__cardArticulo">
                    <a href="marcas/AirJordan/AirJordan1RetroHighOGShadow2.html">
                        <img src="${producto.img}" class="cardArticulo__Img" alt="Logo Jordan"> 
                    </a>

                    <div class="cardArticulo__datos">
                        <h2 class="article__nombre">${producto.nombre}</h2>
                        <p class="article__precio">$${producto.precio}</p>
                    </div>

                    <div class="cardArticulo__buttons">
                        <button type="button" class="btn btn-outline-light" onclick="agregarAlCarrito('${producto.id}')">Agregar <img src="../Multimedia/iconos/cart-plus-solid.svg" class="cardArticulo__icono" alt="icono carrito"></button>
                        <button type="button" class="btn btn-outline-light" onclick="quitarDeFavoritos('${producto.id}')">Eliminar <img src="../Multimedia/iconos/times-solid.svg" class="cardArticulo__icono" alt="icono cruz"></button>
                    </div>
                </div>`
        );
    }
}

var carrito = [];
carrito = JSON.parse(localStorage.getItem("carrito"));

console.log(carrito);

if (carrito == null) {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(id) {

    $(`#producto${id}`).fadeOut("normal");

    console.log(carrito);
    const productFoundBDD = BDD.find(producto => producto.id === id);


    const productFoundCart = carrito.find(producto => producto.id === id);


    if (productFoundBDD != undefined && carrito != null && productFoundCart == null) {

        carrito.push(productFoundBDD);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}

function quitarDeFavoritos(id) {

    favoritos = favoritos.filter(producto => producto.id !== id);
    $(`#producto${id}`).slideUp(250);
    guardarFavoritos();
    console.log(favoritos);
}

function guardarFavoritos() {

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}