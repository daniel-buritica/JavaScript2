function calcularPresioDescuento(presio, descuento){
    const porcentajeDescuento = 100 - descuento;
    const presioDescuento = ((presio * porcentajeDescuento)/100);

    return presioDescuento;
};


function onclickButtonPriceDescount(){
    
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    
    const inputDescount = document.getElementById("inputDescount");
    const descountValue = inputDescount.value;

    const descountPrice = calcularPresioDescuento(priceValue, descountValue); 

    const resultP = document.getElementById("resultP");
     resultP.innerText = "El Presio del producto con el " + descountValue + "% es $"+descountPrice;    
    
}