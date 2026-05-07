function agregarContacto(){

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;

    let mensaje = document.getElementById("mensaje");

    if(nombre === "" || telefono === "" || correo === ""){

        mensaje.innerText = "Complete todos los campos.";
        mensaje.style.color = "red";

    }else{

        mensaje.innerText =
            "Contacto agregado correctamente.";

        mensaje.style.color = "green";
    }
}