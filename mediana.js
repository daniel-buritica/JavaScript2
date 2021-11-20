
function esPar(num){

    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }

};




function calcularMediana(lista){
    const mitadLista1 = parseInt(lista.length /2);
    let mediana;

    if(esPar(lista.length)){
         
        const num1 = mitadLista1 -1;    
        const num2 = mitadLista1;    
    
        mediana = (lista[num1] +lista[num2])/2;
    
        return mediana;

    }else{    
        mediana = lista[mitadLista1];
        return mediana;
    }
};


