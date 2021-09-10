

class Usuario{
    constructor (nombre, apellido, email, telefono, contrasenia) {

        this.nombre        = nombre;
        this.apellido      = apellido;
        this.email         = email;
        this.telefono      = telefono;
        this.contrasenia   = contrasenia;
    }
}



const baseDeUsuarios = [];

let permiso = false;

function validarContrasenia (){
    
    const contrasenia = document.getElementById("usuario__contrasenia").value;
    const recontrasenia = document.getElementById("usuario__recontrasenia").value;

    if(contrasenia == recontrasenia && contrasenia !== ""){
        console.log("contraseña validada");
        document.getElementById("usuario__recontrasenia").style.borderBottom = "1px solid rgb(222, 222, 222)"
        permiso = true;
    }
    else{

        console.log("las contraseñas no coinciden")
        document.getElementById("usuario__recontrasenia").style.borderBottom = "1px solid red"
        permiso = false;
    }
}

function crearUsuario(){
    if(permiso == true){
        const nombre = document.getElementById("usuario__nombre").value;
        const apellido = document.getElementById("usuario__apellido").value;
        const email = document.getElementById("usuario__email").value;
        const telefono = document.getElementById("usuario__telefono").value;
        const contrasenia = document.getElementById("usuario__contrasenia").value;

        baseDeUsuarios.push( new Usuario (nombre, apellido, email, telefono, contrasenia));

        var BDUstring = JSON.stringify(baseDeUsuarios);
        console.log( BDUstring);
    }
}




