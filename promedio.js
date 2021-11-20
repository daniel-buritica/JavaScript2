
 


 function calcularMediaAritmetica(lista){

/*    let sumList = 0;

    for (let i = 0; i < lista.length; i++) {
    
        sumList =  sumList + lista[i];
     };*/

     const sumList = lista.reduce(
         function(vlrAcumlado = 0, newElemeto){

            return vlrAcumlado + newElemeto;
         }
     )


     const promedioLista = sumList / lista.length;

     return promedioLista
 };