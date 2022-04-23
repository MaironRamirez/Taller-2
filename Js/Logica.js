var btnAbrirPopUp = document.getElementById("Agregar"),
    Overlay = document.getElementById("Overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopUp = document.getElementById("btn-cerrar-PopUp");

btnAbrirPopUp.addEventListener("click", function(){
    Overlay.classList.add('Active');
    popup.classList.add("Active")
});

btnCerrarPopUp.addEventListener("click", function(){
    Overlay.classList.remove('Active');
    popup.classList.remove("Active")
});

var btnAbrirPopUp2 = document.getElementById("Modificar"),
    Overlay2 = document.getElementById("Overlay2"),
    popup2 = document.getElementById("popup2"),
    btnCerrarPopUp2 = document.getElementById("btn-cerrar-PopUp2");

btnAbrirPopUp2.addEventListener("click", function(){
    Overlay2.classList.add('Active');
    popup2.classList.add("Active")
});

btnCerrarPopUp2.addEventListener("click", function(){
    Overlay2.classList.remove('Active');
    popup2.classList.remove("Active")
});

var btnAbrirPopUp3 = document.getElementById("Eliminar"),
    Overlay3 = document.getElementById("Overlay3"),
    popup3 = document.getElementById("popup3"),
    btnCerrarPopUp3 = document.getElementById("btn-cerrar-PopUp3");

btnAbrirPopUp3.addEventListener("click", function(){
    Overlay3.classList.add('Active');
    popup3.classList.add("Active")
});

btnCerrarPopUp3.addEventListener("click", function(){
    Overlay3.classList.remove('Active');
    popup3.classList.remove("Active")
});