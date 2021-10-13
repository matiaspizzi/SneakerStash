

async function SAAgregarCarrito(){
	Swal.fire({
        title: "Producto añadido al carrito",
        icon: "success",
        timer: 2500,
        timerProgressBar: true,
		toast: true,
        position: "top-end",
        showConfirmButton: false,
    });
}
    
async function SAQuitarCarrito(){
	Swal.fire({
        title: "Producto retirado del carrito",
        icon: "error",
        timer: 2500,
        timerProgressBar: true,
		toast: true,
        position: "top-end",
        showConfirmButton: false,
    });
}

async function SAComprar(){
	Swal.fire({
        title: "Procesando compra",
        icon: "success",
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
    });
}

async function SASignup(){
	Swal.fire({
        title: "Registro exitoso",
        icon: "success",
        timerProgressBar: true,
        showConfirmButton: false,
    });

}

async function SALogin(){
	Swal.fire({
        title: "Inicio de sesión exitoso",
        icon: "success",
        timerProgressBar: true,
        showConfirmButton: false,
    });

	
}

//otras propiedades:

// Swal.fire({
	// title:
	// text:
	// html:
	// icon:
	// confirmButtonText:
	// footer:
    // height:
	// width:
	// padding:
	// background:
	// grow:
	// backdrop:
	// timer:
	// timerProgressBar:
	// toast:
	// position:
	// allowOutsideClick:
	// allowEscapeKey:
	// allowEnterKey:
	// stopKeydownPropagation:

	// input:
	// inputPlaceholder:
	// inputValue:
	// inputOptions:
	
	//  customClass:
	// 	container:
	// 	popup:
	// 	header:
	// 	title:
	// 	closeButton:
	// 	icon:
	// 	image:
	// 	content:
	// 	input:
	// 	actions:
	//  confirmButton: 
	// 	cancelButton:
	// 	footer:	

	// showConfirmButton:
	// confirmButtonColor:
	// confirmButtonAriaLabel:

	// showCancelButton:
	// cancelButtonText:
	// cancelButtonColor:
	// cancelButtonAriaLabel:
	
	// buttonsStyling:
	// showCloseButton:
	// closeButtonAriaLabel:


	// imageUrl:
	// imageWidth:
	// imageHeight:
	// imageAlt:
// });