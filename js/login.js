var BDU = JSON.parse(localStorage.getItem("BaseDeUsuarios"));

if (BDU == null) {
  BDU = [];
  localStorage.setItem("BaseDeUsuarios", JSON.stringify(BDU));
}

function validarUsuario() {
  let mail = $("#usuario__email").val();

  //verifica email
  if (mail != undefined && mail != "") {
    let found = BDU.find((usuario) => usuario.email == mail);
    if (found != null) {
      document.getElementById("usuario__email").style.borderBottom =
        "1px solid rgb(222, 222, 222)";

      let contrasenia = $("#usuario__contrasenia").val();
      
      //verifica contraseña
      if (found.contrasenia == contrasenia) {
        document.getElementById("usuario__contrasenia").style.borderBottom =
          "1px solid rgb(222, 222, 222)";

        //popup de sweetalert
        SALogin();
        return true;
      } else {
        document.getElementById("usuario__contrasenia").style.borderBottom =
          "1px solid red";
        $("#mensajeErrorLogin").html("contraseña incorrecta");
      }
    } else {
      document.getElementById("usuario__email").style.borderBottom =
        "1px solid red";
      $("#mensajeErrorLogin").html("Mail no registrado");
    }
  }
}
