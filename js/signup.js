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

function validarContrasenia() {
    let contrasenia = $("#usuario__contrasenia").val();
    let recontrasenia = $("#usuario__recontrasenia").val();

    if (contrasenia == recontrasenia && contrasenia != undefined) {
        console.log("contraseña validada");
        document.getElementById("usuario__recontrasenia").style.borderBottom =
            "1px solid rgb(222, 222, 222)";
        return true;
    } else {
        console.log("Rellene el campo/las contraseñas no coinciden");
        document.getElementById("usuario__recontrasenia").style.borderBottom = 
            "1px solid red";
        return false;
    }
}

function validarMail() {
    let mail = $("#usuario__email").val();
    let found = BDU.find((usuario) => usuario.email == mail);

    if (mail != undefined && found != null) {
        console.log("Rellene el campo/Este mail ya se ha registrado");
        document.getElementById("usuario__email").style.borderBottom =
            "1px solid red";
        return false;
    } else {
        console.log("mail ok");
        document.getElementById("usuario__email").style.borderBottom =
            "1px solid rgb(222, 222, 222)";
        return true;
    }
}

function validarTelefono() {
    let tel = $("#usuario__telefono").val();
    let found = BDU.find((usuario) => usuario.telefono == tel);

    if (tel != undefined && found != null) {
        console.log("Rellene el campo/Este telefono ya se ha registrado");
        document.getElementById("usuario__telefono").style.borderBottom =
            "1px solid red";
        return false;
    } else {
        console.log("telefono ok");
        document.getElementById("usuario__telefono").style.borderBottom =
            "1px solid rgb(222, 222, 222)";
        return true;
    }
}

function crearUsuario() {
    if (
        validarContrasenia() == true &&
        validarMail() == true &&
        validarTelefono() == true
    ) {
        let nombre = $("#usuario__nombre").val();
        let apellido = $("#usuario__apellido").val();
        let email = $("#usuario__email").val();
        let telefono = $("#usuario__telefono").val();
        let contrasenia = $("#usuario__contrasenia").val();

        BDU.push(new Usuario(nombre, apellido, email, telefono, contrasenia));

        var BDUJSON = JSON.stringify(BDU);
        localStorage.setItem("BaseDeUsuarios", BDUJSON);
        console.log(BDUJSON);
    } else {
        console.log("ERROR EN REGISTRO");
    }
}
