
const BDD = [];

$.getJSON("https://matiaspizzi.github.io/SneakerStash/data/productos.json", function (productos) {

    productos.forEach(producto => {

        BDD.push(producto);
    });

    imprimirCards(BDD);
});

// MPRIME CARDS DEL PRODUCTO EN EL INDEX

function imprimirCards(datos) {

    $("#index-section__grid").html(``);

    for (let producto of datos) {


        $("#index-section__grid").append(
            `<article class="grid__article" id="${producto.id}">
                <a href="pages/marcas/AirJordan/AirJordan1RetroHighOGShadow2.html">
                    <img src="${producto.img}" class="article__imagen" alt="${producto.nombre}">
                </a>
                <h2 class="article__nombre">${producto.nombre}</h2>
                <p class="article__precio">$${producto.precio}</p>
                <div class="article__buttons">
                    <button type="button" class="btn btn-light" onclick="agregarAlCarrito('${producto.id}')"><img src="Multimedia/iconos/cart-plus-solid.svg" class="button__cart" alt="icono carrito"> </button>
                    <button type="button" class="btn btn-light" onclick="agregarAfavoritos('${producto.id}')"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="button__heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" id="" class="heart__svg${producto.id}" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></button>
                </div>
                </article>`);


            if(favoritos.length > 0){

                for(let buttons of favoritos){

                    $(`.heart__svg${buttons.id}`).css("fill","red");
                }
            }   
            else{

                $(`.heart__svg${favoritos.id}`).css("fill","black");
            }
    }
}



function filtros() {

    // CHECKBOXES POPULAR / NUEVO
    let BDDFilter = BDD;

    let checkUno = $("#aside__checkUno").is(":checked");
    let checkDos = $("#aside__checkDos").is(":checked");


    if (checkUno == true) {
        BDDFilter = BDDFilter.filter(producto => producto.popular == "true");
        imprimirCards(BDDFilter);
    }
    if (checkDos == true) {
        BDDFilter = BDDFilter.filter(producto => producto.nuevo == "true");
        imprimirCards(BDDFilter);
    }
    if (checkUno == true && checkDos == true) {
        BDDFilter = BDDFilter.filter(producto => producto.nuevo == "true" && producto.popular == "true");
        imprimirCards(BDDFilter);
    }

    // FILTRO DE GENERO

    let selectValueGender = $("#asideGenero").val();

    if (selectValueGender == 0) {
        
        imprimirCards(BDDFilter);
    }
    if (selectValueGender == 1) {
        BDDFilter = BDDFilter.filter(producto => producto.genero == "female");
        imprimirCards(BDDFilter);
    }
    if (selectValueGender == 2) {
        BDDFilter = BDDFilter.filter(producto => producto.genero == "male");
        imprimirCards(BDDFilter);
    }


    // ORDENAMIENTO POR PRECIO

    let selectValueSortBy = $("#asideOrden").val();

    if (selectValueSortBy == "3") {

        let BDDOrdenado = BDDFilter.sort((a, b) => {

            if (a.precio > b.precio) {
                return 1;
            }
            if (a.precio < b.precio) {
                return -1;
            }
            return 0;
        })
        imprimirCards(BDDOrdenado);
    }

    if (selectValueSortBy == "4") {

        let BDDOrdenado = BDDFilter.sort((a, b) => {

            if (a.precio > b.precio) {
                return -1;
            }
            if (a.precio < b.precio) {
                return 1;
            }
            return 0;
        })
        imprimirCards(BDDOrdenado);
    }


    // BUSCADOR DEL NAV

    let BDDFound = [];
    let productoAEncontrar = $("#buscadorIndex").val().toLowerCase();
    
    for(let producto of BDDFilter){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(productoAEncontrar) !== -1){

            BDDFound.push(producto);
            imprimirCards(BDDFound);
        }
    }
    if(BDDFound.length == 0){

        $("#index-section__grid").html(
            `<div class="index__vacio">
            <p><b>NO SE ENCONTRARON PRODUCTOS.</b></p>
            </div>`);
    }    
}



