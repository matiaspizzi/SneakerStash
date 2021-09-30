var BDU = JSON.parse(localStorage.getItem("BaseDeUsuarios"));

console.log(BDU);

//Si BDU no se encuentra en el localStorage, sería = Null, por lo que se ejecuta esto:
if (BDU == null) {
    BDU = [];
    localStorage.setItem("BaseDeUsuarios", JSON.stringify(BDU));
}

class Usuario {
    constructor(nombre, apellido, email, telefono, contrasenia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.contrasenia = contrasenia;
    }
}

function validarNombre() {
    let nombre = $("#usuario__nombre").val();

    if (nombre != undefined && nombre != "") {

        
        document.getElementById("usuario__nombre").style.borderBottom =
            "1px solid rgb(222, 222, 222)";
        return true;
    } else {

        document.getElementById("usuario__nombre").style.borderBottom =
            "1px solid red";
        return false;
    }
}

function validarApellido() {
    let apellido = $("#usuario__apellido").val();

    if (apellido != undefined && apellido != "") {

        document.getElementById("usuario__apellido").style.borderBottom =
            "1px solid rgb(222, 222, 222)";
        return true;
    } else {

        document.getElementById("usuario__apellido").style.borderBottom =
            "1px solid red";
        return false;
    }
}

function validarContrasenia() {
    let contrasenia = $("#usuario__contrasenia").val();
    let recontrasenia = $("#usuario__recontrasenia").val();

    if (contrasenia == recontrasenia && contrasenia != undefined && contrasenia != "") {

        document.getElementById("usuario__contrasenia").style.borderBottom =
            "1px solid rgb(222, 222, 222)";
        document.getElementById("usuario__recontrasenia").style.borderBottom =
            "1px solid rgb(222, 222, 222)";
        return true;
    } else {

        document.getElementById("usuario__recontrasenia").style.borderBottom =
            "1px solid red";
        document.getElementById("usuario__contrasenia").style.borderBottom =
            "1px solid red";
        return false;
    }
}

function validarMail() {
    let mail = $("#usuario__email").val();
    let found = BDU.find((usuario) => usuario.email == mail);

    if (mail != undefined && found != null) {

        document.getElementById("usuario__email").style.borderBottom =
            "1px solid red";
        return false;
    } else {

        document.getElementById("usuario__email").style.borderBottom =
            "1px solid rgb(222, 222, 222)";
        return true;
    }
}

function validarTelefono() {
    let tel = $("#usuario__telefono").val();
    let found = BDU.find((usuario) => usuario.telefono == tel);

    if (tel != undefined && found != null) {

        document.getElementById("usuario__telefono").style.borderBottom =
            "1px solid red";
        return false;
    } else {

        document.getElementById("usuario__telefono").style.borderBottom =
            "1px solid rgb(222, 222, 222)";
        return true;
    }
}

function crearUsuario() {
    if (
        validarNombre() == true &&
        validarApellido() == true &&
        validarMail() == true &&
        validarTelefono() == true &&
        validarContrasenia() == true
    ) {
        let nombre = $("#usuario__nombre").val();
        let apellido = $("#usuario__apellido").val();
        let email = $("#usuario__email").val();
        let telefono = $("#usuario__telefono").val();
        let contrasenia = $("#usuario__contrasenia").val();

        BDU.push(new Usuario(nombre, apellido, email, telefono, contrasenia));

        var BDUJSON = JSON.stringify(BDU);
        localStorage.setItem("BaseDeUsuarios", BDUJSON);

        SASignup();

    } else {
        console.log("ERROR EN REGISTRO");
    }
}
