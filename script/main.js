//Script Scroll dispara evento al 50%
if (window.location.href.indexOf('index') > -1) {
var maxScroll = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
var halfScroll = maxScroll / 2;
window.onscroll = function () {
    var currentScroll = window.scrollY;
    for (var i = currentScroll; i >= halfScroll; i++) {
        // INSERTAR contenido que se ejecutara
        var modal = document.getElementById("contenedeor-modal");
        var span = document.getElementsByClassName("close")[0];
        var body = document.getElementsByTagName("body")[0];
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        span.onclick = function () {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                body.style.position = "inherit";
                body.style.height = "auto";
                body.style.overflow = "visible";
            } else {}
        }
        //esta parte hace que el evento se ejecute solo 1 vez
        this.window.scrollY = function () {
            return false
        };
        break;
    }
}};


// Validar Formulario

if (window.location.href.indexOf('contacto') > -1) {
const nombre = document.getElementById("name")
const apellido = document.getElementById("lastName")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length ==0){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length ==0){
        warnings += `El apellido no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = " <p style='color:green'> Enviado</p>"
    }})};