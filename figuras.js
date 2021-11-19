console.log("Hello, world");

// Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("LAdos del cuadro miden :",ladoCuadrado, "cm");

const perimetroCuadrado = ladoCuadrado*4;

console.log("El perimetro del cuadrado es: ", perimetroCuadrado, "cm"); 


const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El àrea del cuadrado es: ", areaCuadrado, "cm 2"); 

console.groupEnd;
 

// Funciones para hallar datos geometricos 


function fPerimetroCuadrado(lado){

    return lado *  4; 
};

function fAreaCuadrado(lado){

      return lado *  lado; 
};

// Aquí interactuamos con el html 

function calcularArea(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = fAreaCuadrado(value);
    alert(area);
};
function calcularPerimetro(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = fPerimetroCuadrado(value);
    alert(perimetro);
};