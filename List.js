const datos = [
    {user: "Pikachu", password:"pikachu1234"},
    {user: "Bulbasaur", password:"bulbasaur1234"}
];
console.log(datos);
//funcion de validar
function validarlogin(evento){
    evento.preventDefault()  
    var usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    for (let i = 0; i < datos.length; i++) {
        if(usuario==" " || contraseña==" "){
            alert ("Por favor ingrese los datos");
            return false;
        }else{
            if (usuario==datos[i].user && contraseña==datos[i].password) {
                alert("Bienvenido " + datos[i].user);
                window.location.href="index2.html"
                return false;
            }
        }
    }
    alert("Usuario no registrado y/o Invalido");
    return true;
}
const boton_login = document.getElementById("boton_login")
boton_login.addEventListener( "click", validarlogin)
//fin de la funcion

var list = document.getElementById("listproducts");
var products = ["Rosas", "Tulipanes", "Claveles", "Gerbera", "Orquideas", "Lilis", "Alcatrace"]
products.push()
for (let i = 0; i < products.length; i++) {
     const element = products[i];
     var li = document.createElement("li");
     li.textContent = element;
     list.appendChild(li);//agregar elemento


    }
    