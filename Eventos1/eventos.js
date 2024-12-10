//script que asigne un evento a un botón y a una imagen.

document.getElementById("boton").addEventListener("click", function(){
    alert("Has dado click al botón");
});
document.getElementById("imagen").addEventListener("mouseover", function(){
    alert("Has pasado el cursor sobre la imagen");
});