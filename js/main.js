

class Producto{
    constructor (nombre, marca, precio, stock, img, img_dos, img_tres, img_cuatro, descripcion) {

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

            agregarAlCarrito(this.name, pedido)
            return (true);
        }
        else{
            
            alert(`Stock insuficiente. Stock: ${this.stock}`);
            return (false);
        }
    }
}

const producto1 = new Producto ("Air Jordan 1 Retro High OG HyperRoyal", "Air Jordan", 20000, 10, "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGHyperRoyal/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto2 = new Producto ("Air Jordan 1 Retro High OG Shadow 2.0", "Air Jordan", 20000, 10, "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto3 = new Producto ("Dior x Air Jordan 1 High", "Air Jordan", 20000, 10, "Multimedia/marcas/AirJordan/DiorxAirJordan1High/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto4 = new Producto ("Off-White x Air Jordan 1 Retro High OG Chicago", "Air Jordan", 20000, 10, "Multimedia/marcas/AirJordan/Off-WhitexAirJordan1RetroHighOGChicago/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto5 = new Producto ("Wmns Air Jordan 1 High OG Court Purple", "Air Jordan", 20000, 10, "Multimedia/marcas/AirJordan/WmnsAirJordan1HighOGCourtPurple/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

// ******************************************* ADIDAS
const producto6 = new Producto ("Adidas Disney x Ozweego The Little Mermaid Collection-Ursula", "Adidas", 20000, 10, "Multimedia/marcas/Adidas/DisneyxOzweegoTheLittleMermaidCollection-Ursula/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto7 = new Producto ("Adidas Nice Kicks x Ultra Boost No Vacancy", "Adidas", 20000, 10, "Multimedia/marcas/Adidas/NiceKicksxUltraBoostNoVacancy/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto8 = new Producto ("Adidas Ozweego Pale Nude", "Adidas", 20000, 10, "Multimedia/marcas/Adidas/OzweegoPaleNude/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto9 = new Producto ("Adidas Pharrell x NMD Human Race Black", "Adidas", 20000, 10, "Multimedia/marcas/Adidas/PharrellxNMDHumanRaceBlack/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto10 = new Producto ("Adidas Ultra Boost 1.0 DNA Cookies And Cream", "Adidas", 20000, 10, "Multimedia/marcas/Adidas/UltraBoost1-0DNACookiesAndCream/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

// ******************************************* Nike
const producto11 = new Producto ("Nike Wmns Dunk Low Barely Green", "Nike", 16200, 20, "Multimedia/marcas/Nike/WmnsDunkLowBarelyGreen/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

// ******************************************* YEEZY
const producto12 = new Producto ("Yeezy Boost 700 Wave Runner", "Yeezy", 36000, 16, "Multimedia/marcas/Yeezy/YeezyBoost700WaveRunner/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

// ******************************************* FILA
const producto13 = new Producto ("Fila Alife x Trigate Light Grey Gum", "Fila", 16200, 20, "Multimedia/marcas/Fila/AlifexTrigateLightGreyGum/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto14 = new Producto ("Fila Ray Tracer Black", "Fila", 16200, 20, "Multimedia/marcas/Fila/RayTracerBlack/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto15 = new Producto ("Fila Ray Tracer GS White Black Hris", "Fila", 16200, 20, "Multimedia/marcas/Fila/RayTracerGSWhiteBlackHris/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto16 = new Producto ("Fila Stackhouse Spaghetti White Navy", "Fila", 16200, 20, "Multimedia/marcas/Fila/StackhouseSpaghettiWhiteNavy/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

// ******************************************* PUMA
const producto17 = new Producto ("Puma RS-X3 Puzzle", "Puma", 14000, 14, "Multimedia/marcas/Puma/RS-X3Puzzle/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto18 = new Producto ("Puma Haribo x Suede Poppy Red", "Puma", 14000, 14, "Multimedia/marcas/Puma/HariboxSuedePoppyRed/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto19 = new Producto ("Puma J-Cole x RS-Dreamer Aquarius", "Puma", 14000, 14, "Multimedia/marcas/Puma/J-ColexRS-DreamerAquarius/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto20 = new Producto ("Puma RS-X Toys", "Puma", 14000, 14, "Multimedia/marcas/Puma/RS-XToys/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");
const producto21 = new Producto ("Puma Suede Classic Olympian Blue", "Puma", 14000, 14, "Multimedia/marcas/Puma/SuedeClassicOlympianBlue/imagen1.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen2.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen3.jpg", "Multimedia/marcas/AirJordan/AirJordan1RetroHighOGShadow2-0/imagen4.jpg", "Como sugiere su apodo, el Air Jordan 1 Retro High OG 'Shadow 2.0' utiliza la misma paleta neutra que aparece en el colorway original negro/gris de 1985. Este par hace uso de un empeine de cuero negro con superposiciones de ante gris en el dedo del pie y el talón. Un Swoosh gris a juego se une a los elementos tradicionales de marca que incluyen una etiqueta de lengua Nike Air y un logotipo de Jordan Wings estampado en el cuello lateral. Una copa de goma con amortiguación de aire encapsulada ofrece un paseo suave.");

const baseDeDatos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21 ]

const BDDJSON = JSON.stringify(baseDeDatos);
localStorage.setItem("BaseDeDatos", BDDJSON);



// GENERAR CARDS EN INDEX

let imprimirCards = () => {

    let acumCardIndex = ``;

    baseDeDatos.forEach((producto) => {
        acumCardIndex += `<article class="grid__article">
        <a href="pages/marcas/AirJordan/AirJordan1RetroHighOGShadow2.html">
            <img src="${producto.img}" class="article__imagen" alt="${producto.nombre}">
        </a>
        <h2 class="article__nombre">${producto.nombre}</h2>
        <p class="article__precio">$${producto.precio}</p>
    </article>`
    });
    
    document.getElementById("index-section__grid").innerHTML = acumCardIndex;
}

imprimirCards ();




// ********************** ORDENAMIENTO POR PRECIO

const asideOrden = () => {

    const selectValue = document.getElementById("asideOrden").value;
    console.log(selectValue);

    if(selectValue == "3"){

        baseDeDatos.sort((a, b) => { 
    
            if(a.precio > b.precio){
                return 1;
            }
            if(a.precio < b.precio){
                return -1;
            }
            return 0;
        })

        imprimirCards ();
    }
    
    if(selectValue == "4"){
    
        baseDeDatos.sort((a, b) => { 
    
            if(a.precio > b.precio){
                return -1;
            }
            if(a.precio < b.precio){
                return 1;
            }
            return 0;
        })

        imprimirCards ();
    }
}









// AGREGAR O QUITAR DEL CARRITO

const carrito = [];

const agregarAlCarrito = (producto, cantidad) => {

    if (producto.validarStock() == true){

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





// CALCULAR PRECIO DEL CARRITO

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

