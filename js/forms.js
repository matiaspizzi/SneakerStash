

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
        let nombre = $("#usuario__nombre").val();
        let apellido = $("#usuario__apellido").val();
        let email = $("#usuario__email").val();
        let telefono = $("#usuario__telefono").val();
        let contrasenia = $("#usuario__contrasenia").val();

        baseDeUsuarios.push( new Usuario (nombre, apellido, email, telefono, contrasenia));

        var BDUJSON = JSON.stringify(baseDeUsuarios);
        localStorage.setItem("BaseDeUsuarios", BDUJSON);
        console.log( BDUJSON);
    }
}




