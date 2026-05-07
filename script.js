let contactos = [];

function agregarContacto(){

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;

    let mensaje = document.getElementById("mensaje");

    if(nombre === "" || telefono === "" || correo === ""){

        mensaje.innerText = "Complete todos los campos.";
        mensaje.style.color = "red";

        return;
    }

    let contacto = {
        nombre: nombre,
        telefono: telefono,
        correo: correo
    };

    contactos.push(contacto);

    mostrarContactos();

    mensaje.innerText =
        "Contacto agregado correctamente.";

    mensaje.style.color = "green";
}

function mostrarContactos(){

    let lista =
        document.getElementById("listaContactos");

    lista.innerHTML = "";

    contactos.forEach((contacto, index) => {

        lista.innerHTML += `

            <div class="contacto">

                <h3>${contacto.nombre}</h3>

                <p>${contacto.telefono}</p>

                <p>${contacto.correo}</p>

                <button onclick="eliminarContacto(${index})">
                    Eliminar
                </button>

            </div>

        `;
    });
}

function eliminarContacto(index){

    contactos.splice(index, 1);

    mostrarContactos();

    let mensaje =
        document.getElementById("mensaje");

    mensaje.innerText = "Contacto eliminado.";
    mensaje.style.color = "orange";
}

function buscarContacto(){

    let texto =
        document.getElementById("buscar")
        .value
        .toLowerCase();

    let filtrados = contactos.filter(contacto =>
        contacto.nombre.toLowerCase().includes(texto)
    );

    let lista =
        document.getElementById("listaContactos");

    lista.innerHTML = "";

    filtrados.forEach((contacto, index) => {

        lista.innerHTML += `

            <div class="contacto">

                <h3>${contacto.nombre}</h3>

                <p>${contacto.telefono}</p>

                <p>${contacto.correo}</p>

            </div>

        `;
    });
}