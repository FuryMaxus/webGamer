const form_inicio = document.getElementById('form_inicio');
const email = document.getElementById('e-mail');
const contraseña = document.getElementById('contraseña');
const error = document.getElementById('error');


email.addEventListener('keyup', function (e) {
    if (!email.value.includes("@")) {
        email.classList.add("error");  
        error.innerHTML = "Error, ingrese un signo arroba (@)!.";


    }else{  
        email.classList.remove("error");
        error.innerHTML = "&nbsp;";
    
    }
})

contraseña.addEventListener('keyup', function (e) {
    if (contraseña.value.length == 0 ) {
        contraseña.classList.add("error");
    }else{
        contraseña.classList.remove("error");
        error.innerHTML = "&nbsp;";
    }
})


form_inicio.addEventListener('submit', function (e) {
    if(!email.value.includes("@")){
        email.classList.add("error");
    }
    if(contraseña.value.length == 0){
        contraseña.classList.add("error");
    } 
    document.querySelectorAll("input").forEach(el=>{
        if(el.classList.contains("error")){
            e.preventDefault()
            error.innerHTML = "Revisa los campos en rojo!.";
            return;
        }
    })

})