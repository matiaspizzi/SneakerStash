

class Producto{
    constructor (id,nuevo, popular, nombre, marca, precio, stock, img, img_dos, img_tres, img_cuatro, descripcion) {

        this.id             = id;
        this.nuevo          = nuevo;
        this.popular        = popular;
        this.nombre         = nombre;
        this.marca          = marca;
        this.precio         = precio;
        this.stock          = stock;
        this.img            = img;
        this.img_dos        = img_dos;
        this.img_tres       = img_tres;
        this.img_cuatro     = img_cuatro;
        this.descripcion    = descripcion;
    }

    validarStock (pedido){
        if(this.stock > pedido){

            return (true);
        }
        else{
            
            console.log(`Stock insuficiente. Stock: ${this.stock}`);
            return (false);
        }
    }
}

const producto0 = new Producto ("0","false","true","Air Jordan 1 Retro High OG HyperRoyal", "Air Jordan", 20000, 10, "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGHyperRoyal/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto1 = new Producto ("1","false","false","Air Jordan 1 Retro High OG Shadow 2.0", "Air Jordan", 20000, 10, "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto2 = new Producto ("2","false","false","Dior x Air Jordan 1 High", "Air Jordan", 20000, 10, "Multimedia/marcas/AirJordan/DiorxAirJordan1High/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto3 = new Producto ("3","false","true","Off-White x Air Jordan 1 Retro High OG Chicago", "Air Jordan", 20000, 10, "Multimedia/marcas/AirJordan/Off-WhitexAirJordan1RetroHighOGChicago/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto4 = new Producto ("4","true","true","Wmns Air Jordan 1 High OG Court Purple", "Air Jordan", 20000, 10, "Multimedia/marcas/AirJordan/WmnsAirJordan1HighOGCourtPurple/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

// ******************************************* ADIDAS
const producto5 = new Producto ("5","true","false","Adidas Disney x Ozweego The Little Mermaid Collection-Ursula", "Adidas", 20000, 10, "Multimedia/marcas/Adidas/DisneyxOzweegoTheLittleMermaidCollection-Ursula/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto6 = new Producto ("6","true","true","Adidas Nice Kicks x Ultra Boost No Vacancy", "Adidas", 20000, 10, "Multimedia/marcas/Adidas/NiceKicksxUltraBoostNoVacancy/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto7 = new Producto ("7","true","false","Adidas Ozweego Pale Nude", "Adidas", 20000, 10, "Multimedia/marcas/Adidas/OzweegoPaleNude/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto8 = new Producto ("8","false","true","Adidas Pharrell x NMD Human Race Black", "Adidas", 20000, 10, "Multimedia/marcas/Adidas/PharrellxNMDHumanRaceBlack/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto9 = new Producto ("9","true","false","Adidas Ultra Boost 1.0 DNA Cookies And Cream", "Adidas", 20000, 10, "Multimedia/marcas/Adidas/UltraBoost1-0DNACookiesAndCream/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

// ******************************************* Nike
const producto10 = new Producto ("10","false","true","Nike Wmns Dunk Low Barely Green", "Nike", 16200, 20, "Multimedia/marcas/Nike/WmnsDunkLowBarelyGreen/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

// ******************************************* YEEZY
const producto11 = new Producto ("11","false","true","Yeezy Boost 700 Wave Runner", "Yeezy", 36000, 16, "Multimedia/marcas/Yeezy/YeezyBoost700WaveRunner/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

// ******************************************* FILA
const producto12 = new Producto ("12","false","false","Fila Alife x Trigate Light Grey Gum", "Fila", 16200, 20, "Multimedia/marcas/Fila/AlifexTrigateLightGreyGum/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto13 = new Producto ("13","false","false","Fila Ray Tracer Black", "Fila", 16200, 20, "Multimedia/marcas/Fila/RayTracerBlack/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto14 = new Producto ("14","false","false","Fila Ray Tracer GS White Black Hris", "Fila", 16200, 20, "Multimedia/marcas/Fila/RayTracerGSWhiteBlackHris/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto15 = new Producto ("15","true","true","Fila Stackhouse Spaghetti White Navy", "Fila", 16200, 20, "Multimedia/marcas/Fila/StackhouseSpaghettiWhiteNavy/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

// ******************************************* PUMA
const producto16 = new Producto ("16","true","true","Puma RS-X3 Puzzle", "Puma", 14000, 14, "Multimedia/marcas/Puma/RS-X3Puzzle/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto17 = new Producto ("17","false","true","Puma Haribo x Suede Poppy Red", "Puma", 14000, 14, "Multimedia/marcas/Puma/HariboxSuedePoppyRed/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto18 = new Producto ("18","true","false","Puma J-Cole x RS-Dreamer Aquarius", "Puma", 14000, 14, "Multimedia/marcas/Puma/J-ColexRS-DreamerAquarius/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto19 = new Producto ("19","true","false","Puma RS-X Toys", "Puma", 14000, 14, "Multimedia/marcas/Puma/RS-XToys/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto20 = new Producto ("20","false","false","Puma Suede Classic Olympian Blue", "Puma", 14000, 14, "Multimedia/marcas/Puma/SuedeClassicOlympianBlue/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

const BDD = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20];

localStorage.setItem("BaseDeDatos", JSON.stringify(BDD));


// GENERAR CARDS EN INDEX

function imprimirCards(datos){

    for(let producto of datos){

        $("#index-section__grid").append(
            `<article class="grid__article" id="${producto.id}">
                <a href="pages/marcas/AirJordan/AirJordan1RetroHighOGShadow2.html">
                    <img src="${producto.img}" class="article__imagen" alt="${producto.nombre}">
                </a>
                <h2 class="article__nombre">${producto.nombre}</h2>
                <p class="article__precio">$${producto.precio}</p>
                <button type="button" class="btn btn-light" onclick="agregarAlCarrito('${producto.id}')"><img src="Multimedia/iconos/cart-plus-solid.svg" id="button__cart"  alt="icono carrito"> Agregar al carrito</button>

            </article>`);
    }
}
imprimirCards (BDD);




const asideFiltros = () => {


    // CHECKBOXES POPULAR / NUEVO

    if($("#aside__checkUno").is(":checked")){
        const BDDPopular = BDD.filter(producto => producto.popular == true);
        imprimirCards (BDDPopular);
    }
    if($("#aside__checkDos").is(":checked")){
        const BDDNuevo = BDD.filter(producto => producto.nuevo == true);
        imprimirCards (BDDNuevo);
    }
  

    // ORDENAMIENTO POR PRECIO

    const selectValue = $("#asideOrden").val();

    if(selectValue == "3"){

        let BDDOrdenado = BDD.sort((a, b) => { 
    
            if(a.precio > b.precio){
                return 1;
            }
            if(a.precio < b.precio){
                return -1;
            }
            return 0;
        })

        imprimirCards (BDDOrdenado);
    }
    
    if(selectValue == "4"){
    
        let BDDOrdenado = BDD.sort((a, b) => { 
    
            if(a.precio > b.precio){
                return -1;
            }
            if(a.precio < b.precio){
                return 1;
            }
            return 0;
        })

        imprimirCards (BDDOrdenado);
    }
}




// AGREGAR AL CARRITO

const carrito = JSON.parse(localStorage.getItem("carrito"));

function agregarAlCarrito(id) {

    $(`#${id}`).fadeOut("normal");

    console.log(carrito);
    const productoEncontradoBDD = BDD.find(producto => producto.id === id);

    // Para verificar si el producto ya está en el carrito
    const productoEncontradoCarrito = carrito.find(producto => producto.id === id);

    // Verifica que el producto existe, si el carrito existe y si el producto no se encuentra en él.
    if (productoEncontradoBDD != undefined && carrito != null && productoEncontradoCarrito == null) {

        carrito.push(productoEncontradoBDD);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    //Si el carrito no se encuentra en el localStorage, sería = Null, por lo que se ejecuta esto:
    if (carrito == null){
        const carritoNull = [];
        carritoNull.push(productoEncontradoBDD);
        localStorage.setItem("carrito", JSON.stringify(carritoNull));
    }
}

