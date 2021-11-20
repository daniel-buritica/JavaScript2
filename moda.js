

const lista1 = [
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    5,
    6,
    1,
    2,
    3
];

const objList = {};

lista1.map(
    function(elemento){

        if(objList[elemento]){

            objList[elemento] += 1;
        }else {
            
            objList[elemento] = 1;
        }
        
    }
);