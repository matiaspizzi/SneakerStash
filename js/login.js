
var BDU = JSON.parse(localStorage.getItem("BaseDeUsuarios"));

console.log(BDU);

//Si BDU no se encuentra en el localStorage, sería = Null, por lo que se ejecuta esto:
if (BDU == null) {
    BDU = [];
    localStorage.setItem("BaseDeUsuarios", JSON.stringify(BDU));
}

function validarUsuario() {

    let mail = $("#usuario__email").val();
    let found = BDU.find((usuario) => usuario.email == mail);

    if (mail == undefined && found == null) {

        console.log("eMAil no registrado");
        document.getElementById("usuario__email").style.borderBottom =
            "1px solid red";
        return false;

    } else {
        console.log("mail ok");
        document.getElementById("usuario__email").style.borderBottom =
            "1px solid rgb(222, 222, 222)";

        let contrasenia = $("#usuario__contrasenia").val();

        if (found.contrasenia == contrasenia) {
            console.log("contrasenia ok");
            document.getElementById("usuario__contrasenia").style.borderBottom =
                "1px solid rgb(222, 222, 222)";

        } else {
            console.log("contrasenia incorrecta");
            document.getElementById("usuario__contrasenia").style.borderBottom =
                "1px solid red";
        }
    }
}
