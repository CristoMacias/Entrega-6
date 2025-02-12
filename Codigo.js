
//Seleccion de las imagenes
const imagen1 = document.querySelector("#img1");
const imagen2 = document.querySelector("#img2");

//Vector de rutas de las zapatillas negras
const zapatillasNegras = [
    "imagenes/zapatillas1.png",
    "imagenes/zapatillas2.png",
    "imagenes/zapatillas4.png",
    "imagenes/zapatillas3.png"
];

//Vector de rutas de las zapatillas azules
const zapatillasAzules = [
    "imagenes/zapatillasAzules1.png",
    "imagenes/zapatillasAzules4.png",
    "imagenes/zapatillasAzules2.png",
    "imagenes/zapatillasAzules3.png"
];

//Vinculación de botones
const botonIzq = document.querySelector("#boton1");
const botonVolver = document.querySelector("#boton2");
const botonDrc = document.querySelector("#boton3");

//Funcion para seleccionar las imagenes, en este caso la imagen 1.
const seleccionarImagen1 = function(){
    
    //Se le indica que cuando se seleccione, se le apliquen los diseños de la página del css.
    imagen1.classList.add("seleccionada");
    imagen2.classList.add("oculta");
    //En el caso de los botones, que se elimine el diseño de css.
    botones.classList.remove("oculta");
}
//Se asigna el evento a la imagen 1 mediante el callback
imagen1.addEventListener("click",seleccionarImagen1);

//Funcion para seleccionar las imagenes, en este caso la imagen 2.
const seleccionarImagen2 = function(){

    //Se le indica que cuando se seleccione, se le apliquen los diseños de la página del css.
    imagen2.classList.add("seleccionada");
    imagen1.classList.add("oculta");
    //En el caso de los botones, que se elimine el diseño de css.
    botones.classList.remove("oculta");
}
//Se asigna el evento a la imagen 2 mediante el callback
imagen2.addEventListener("click",seleccionarImagen2);

//Función para restablecer la página a su inicio
const volver = function(){

    //Método para restablecer.
    location.reload();
}
//Se asigna el evento a l botón volver mediante el callback
botonVolver.addEventListener("click", volver);

//Se declara el indice para la imagen 1
    var i = 0;

//Funcion para el boton de girar a la derecha
const derechaImg1 = function(){

    //Se le suma al índice para que recorra el vector sumando 1
    i++;

    //Cuando salga del vector, que vuelva al inicio.
    if(i == 4){
        i = 0;
    }

    //Se le indica que al src de ese objeto seleccionado con los links que están dentro del vector.
    imagen1.src = zapatillasNegras[i];
}
//Se le asigna el evento al botón.
botonDrc.addEventListener("click", derechaImg1);

//Funcion para el boton de girar a la izquierda
const izquierdaImg1 = function(){

    //Se le suma al índice para que recorra el vector restando 1
    i--;

    //Cuando salga del vector, que vuelva al inicio.
    if(i < 0){
        i = 3;
    }

    //Se le indica que al src de ese objeto seleccionado con los links que están dentro del vector.
    imagen1.src = zapatillasNegras[i];
}

//Se le asigna el evento al botón.
botonIzq.addEventListener("click", izquierdaImg1);

//El código inferior, es exactamente igual al superior, pero esta vez tratando la imagen 2.
var j = 0;

const derechaImg2 = function(){

    j++;
    if(j == 4){
        j = 0;
    }
    imagen2.src = zapatillasAzules[i];
}
botonDrc.addEventListener("click", derechaImg2);

const izquierdaImg2 = function(){
    j--;
    if(j < 0){
        j = 3;
    }
    imagen2.src = zapatillasAzules[i];
}
botonIzq.addEventListener("click", izquierdaImg2);