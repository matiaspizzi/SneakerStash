function comprar() {
    var carrito = JSON.parse(localStorage.getItem("carrito"));

    const productosCheckout = carrito.map((producto) => {
        const cantidad = Number($(`#cantidad${producto.id}`).val());

        return {
            title: producto.nombre,
            picture_url: producto.img,
            quantity: cantidad,
            currency_id: "ARS",
            unit_price: producto.precio,
        };
    });

    const elemento = { items: productosCheckout };

    $.ajaxSetup({
        headers: {
            Authorization:
                " Bearer TEST-7588094503560347-092206-5c0364812c16266535119d2d1a76a6a8-419734705",
            "Content-Type": "application/json",
        },
    });

    $.post(
        "https://api.mercadopago.com/checkout/preferences",
        JSON.stringify(elemento),
        (respuesta, status) => {
            console.log(respuesta);
            console.log(elemento);
            if (status == "success") {
                window.open(respuesta.init_point);
            }
        }
    );
}
