
const BBB = [];


var favoritos = JSON.parse(localStorage.getItem("favoritos"));


console.log("favoritos:");
console.log(favoritos);

if (favoritos == null) {
    favoritos = [];
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

imprimirCardsFavoritos();

function imprimirCardsFavoritos() {

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


// AGREGAR A FAVORITOS

var favoritos = [];
favoritos = JSON.parse(localStorage.getItem("favoritos"));

if (favoritos == null) {
    favoritos = [];
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function agregarAfavoritos(id) {

    console.log("favoritos:");
    console.log(favoritos);
    let productFoundBDD = BDD.find(producto => producto.id === id);

    // Busca si el producto esta dentro de favoritos
    let productFoundFavs = favoritos.find(producto => producto.id === id);

    // Verifica que el producto existe, y si el producto no se encuentra en él.
    if (productFoundBDD != undefined && productFoundFavs == null) {

        $(`.heart__svg${id}`).css("fill","red");
        favoritos.push(productFoundBDD);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }

    if(productFoundFavs != null){

        $(`.heart__svg${id}`).css("fill","black");
        favoritos = favoritos.filter(producto => producto.id !== id);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
}

function quitarDeFavoritos(id) {

    favoritos = favoritos.filter(producto => producto.id !== id);
    $(`#producto${id}`).slideUp(250);
    guardarFavoritos();

    console.log("favoritos:");
    console.log(favoritos);
}

function guardarFavoritos() {

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}
