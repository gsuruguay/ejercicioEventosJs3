const urlImg = document.getElementById("urlImg");
const inputFrase = document.getElementById("inputFrase");
const bntAgregar = document.getElementById("btnAdd")
const divContenedor = document.getElementById("contenedor");
const vistaGrande = document.getElementById("vistaGrande")
const imgGrande = document.getElementById("imgGrande");
const cerrarimgGrande = document.getElementById("cerrarimgGrande");
const btnX = document.getElementById("btnX");


bntAgregar.addEventListener("click", function(){
    const nuevaCaja = document.createElement("div");
    const nuevaImg = document.createElement("img");
    const nuevaFrase = document.createElement("p");

    nuevaFrase.textContent= inputFrase.value;
    nuevaImg.src = urlImg.value;
    nuevaCaja.classList.add("caja");

    nuevaImg.addEventListener("click", function(){
        imgGrande.src = nuevaImg.src;
        vistaGrande.classList.toggle("activo");
        vistaGrande.classList.remove("oculto");        
    })    
    
    nuevaCaja.appendChild(nuevaImg);
    nuevaCaja.appendChild(nuevaFrase);
    divContenedor.appendChild(nuevaCaja);
    inputFrase.value= "";
    urlImg.value="";
});

btnX.addEventListener("click", function(){
    vistaGrande.classList.remove("activo");
    vistaGrande.classList.toggle("oculto");
    cerrarimgGrande.classList.toggle("oculto");
    imgGrande.classList.toggle("oculto");    
})   