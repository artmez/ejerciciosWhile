const titulo = document.querySelector("#miTitulo");
const texto = document.querySelector("#miTexto");
const entrada = document.querySelector("#miEntrada");
const entrada2 = document.querySelector("#miEntrada2");
const boton = document.querySelector("#miBoton");
const resultado = document.querySelector("#salida");

let estatus = "inicio";
let numero = "";
let numero2 = "";
let miArreglo = [];
let entradaArreglo = [];
entrada.style.display = "none";
entrada2.style.display = "none";
boton.style.visibility = "hidden";
resultado.style.visibility = "hidden";

function ejercicio1() {
    resultado.value = "";
    miArreglo = [];
    estatus = "ej1"
    titulo.innerHTML ="Ejercicio 1";
    texto.innerHTML ="Ingresa un número entero:";
    entrada.value = "";
    entrada.style.display = "";
    entrada.placeholder = "Número";
    entrada2.style.display = "none";
    boton.style.visibility = "";
    resultado.style.visibility = "";
}

function ejercicio2() {
    resultado.value = "";
    miArreglo = [];
    estatus = "ej2"
    entrada.value = "";
    titulo.innerHTML ="Ejercicio 2";
    texto.innerHTML ="Ingresa dos números entre 1 y 50:";
    entrada.style.display = "";
    entrada.placeholder = "Primer Número";
    entrada2.style.display = "";
    entrada2.placeholder = "Segundo Número";
    boton.style.visibility = "";
    resultado.style.visibility = "";
}

function ejercicio3() {
    resultado.value = "";
    miArreglo = [];
    estatus = "ej3"
    entrada.value = "";
    titulo.innerHTML ="Ejercicio 3";
    texto.innerHTML ="Ingresa varios números, sin espacios, terminando en 0:";
    entrada.style.display = "";
    entrada.placeholder = "Números";
    entrada2.style.display = "none";
    boton.style.visibility = "";
    resultado.style.visibility = "";
}

function ejercicio4() {
    resultado.value = "";
    miArreglo = [];
    estatus = "ej4"
    entrada.value = "";
    titulo.innerHTML ="Ejercicio 4";
    texto.innerHTML ="Ingresa varias letras o palabras separadas por un espacio:";
    entrada.style.display = "";
    entrada.placeholder = "Letras o Palabras";
    entrada2.style.display = "none";
    boton.style.visibility = "";
    resultado.style.visibility = "";
}

function ejercicio5() {
    resultado.value = "";
    miArreglo = [];
    estatus = "ej5"
    entrada.value = "";
    titulo.innerHTML ="Ejercicio 5";
    texto.innerHTML ="Ingresa un día de la semana:";
    entrada.style.display = "";
    entrada.placeholder = "Día de la Semana";
    entrada2.style.display = "none";
    boton.style.visibility = "";
}


boton.addEventListener("click", () => {
    resultado.value = "";
    miArreglo = [];
    if (entrada.value === "") {
        texto.innerHTML ="No ingresaste ningún dato. Intenta de nuevo:";
    }
    else if (estatus==="ej1") {
        numero = Number(entrada.value);
        let i = 0;
        while (i <= numero) {
            if(i % 5 === 0) {
                miArreglo.push(i);
                i++;
            } else i++;
        }
        resultado.value = miArreglo;
        entrada.value = "";
    } else if (estatus === "ej2") {
        numero = Number(entrada.value);
        numero2 = Number(entrada2.value);
        let i = 0;
        while (i<= 50) {
            if (i == numero || i == numero2) {
                miArreglo.push(" " + i+" Loteria!");
                i++;
            } else {
                miArreglo.push(" " + i);
                i++;
            }
        }
        resultado.value = miArreglo;
        entrada.value = "";
        entrada2.value = "";
    } else if (estatus === "ej3") {
        let myString = entrada.value;
        if (myString[myString.length-1] != 0) {
            texto.innerHTML ="El último número ingresado debe ser 0. Intenta de nuevo:";
            entrada.value = "";
        } else {
            let i = 0;
            while (i <= myString.length-1) {
                miArreglo.push(myString[i]);
                i++;
            }
            resultado.value = miArreglo;
            entrada.value = "";
        }
    } else if (estatus === "ej4") {
        let myString = entrada.value;
        let i = 0;
        while (i <= myString.length-1) {
            if (myString[i] === " ") {
                i++;
            } else {
                numero += myString[i];
                i++;
            }
        }
        resultado.value = numero;
        entrada.value = "";
        numero = "";
    } else if (estatus === "ej5") {
        numero = entrada.value;
        switch (numero.toLowerCase()) {
            case "lunes":
                alert("No temas los lunes, ¡que te teman a ti!")
                break;
            case "martes":
                alert("El martes es ideal para terminar todo lo que no hiciste el lunes!")
                break;
            case "miercoles":
                alert("Ya es miércoles! ¿Ves como la semana se pasa más rápido de lo que piensas?")
                break;
            case "jueves":
                alert("Llena de amor tu jueves, queda muy poco para el fin de semana")
                break;  
            case "viernes":
                alert("Disfruta del viernes, como si no existieran los lunes")
                break;   
            case "sabado":
                alert("Los sábados deberían tener, al menos, 48 horas")
                break;  
            case "domingo":
                alert("Es domingo, ve a descansar!")
                break;                         
            default:
                alert("Ese no es un día de la semana!😅")
                break;
        }
        entrada.value = "";
        numero = "";
    }
})