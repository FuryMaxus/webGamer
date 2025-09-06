
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const contraseña1 = document.getElementById('contraseña1');
const contraseña2 = document.getElementById('contraseña2');
const formulario = document.getElementById('formulario');
const errores = document.getElementById('errores');

nombre.addEventListener('keyup', function (e) {
    if (nombre.value.length < 3) {
        nombre.classList.add("error");
        errores.innerHTML = "Error, ingrese al menos 3 caracteres!.";
    } else {
        nombre.classList.remove("error");
        errores.innerHTML = "&nbsp;";
    }
}) 

email.addEventListener('keyup', function (e) {
    if (!email.value.includes("@")) {
        exportemail.classList.add("error");
        errores.innerHTML = "Error, ingrese un signo arroba (@)!.";
    } else {
        email.classList.remove("error");
        errores.innerHTML = "&nbsp;";
    }
})

contraseña1.addEventListener('keyup', (e) => contraseñas());
contraseña2.addEventListener('keyup', (e) => contraseñas());

function contraseñas() {
    if (contraseña2.value != contraseña1.value) {
        contraseña2.classList.add("error");
        errores.innerHTML = "Error, Las contraseñas no coinciden!.";
    } else {
        contraseña2.classList.remove("error");
        errores.innerHTML = "&nbsp;";
    }
}

formulario.addEventListener('submit', function (e) {
    if (nombre.value.length < 3) {
        nombre.classList.add("error");
    }
    if (!email.value.includes("@")) {
        email.classList.add("error");
    }
    if (contraseña2.value != contraseña1.value || contraseña2.value == "") {
        contraseña2.classList.add("error");
    }
    document.querySelectorAll("input").forEach(el=>{
        if(el.classList.contains("error")){
            e.preventDefault()
            errores.innerHTML = "Revisa los campos en rojo!.";
            return;
        }
    })
})
