

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
    
    let contrasenia = document.getElementById("usuario__contrasenia").value;
    let recontrasenia = document.getElementById("usuario__recontrasenia").value;

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
        let nombre = document.getElementById("usuario__nombre").value;
        let apellido = document.getElementById("usuario__apellido").value;
        let email = document.getElementById("usuario__email").value;
        let telefono = document.getElementById("usuario__telefono").value;
        let contrasenia = document.getElementById("usuario__contrasenia").value;

        baseDeUsuarios.push( new Usuario (nombre, apellido, email, telefono, contrasenia));

        var BDUJSON = JSON.stringify(baseDeUsuarios);
        localStorage.setItem("BaseDeUsuarios", BDUJSON);
        console.log( BDUJSON);
    }
}




