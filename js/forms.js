



class Usuario{
    constructor (nombre, apellido, email, telefono, contrasenia) {

        this.nombre        = nombre;
        this.apellido      = apellido;
        this.email         = email;
        this.telefono      = telefono;
        this.contrasenia   = contrasenia;
    }
}



const BaseDeUsuarios = [];

function validarContrasenia (){

    contrasenia = document.getElementById("usuario__contrasenia").value;
    recontrasenia = document.getElementById("usuario__recontrasenia").value;

    if(contrasenia == recontrasenia && contrasenia !== ""){
        console.log("contraseña validada");
        document.getElementById("usuario__recontrasenia").style.borderBottom = "1px solid rgb(222, 222, 222)"
    }
    else{
        console.log("las contraseñas no coinciden")
        document.getElementById("usuario__recontrasenia").style.borderBottom = "1px solid red"
    }
}