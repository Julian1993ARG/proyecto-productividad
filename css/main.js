//obteniendo donde escribir los resultados
const resultado1 = document.getElementById("resultadoProductividadEconomica");
const resultado2 = document.getElementById("resultadoProductividadFisica");


//funcion calcular productividad economica

function productividadEconomica(){
    const gasto = document.getElementById("gasto").value;
    const ganancia = document.getElementById("venta").value;
    if(gasto<=0 || ganancia<=0){
        resultado1.innerHTML = "Los datos ingresados son invalidos"
    }else{
        let resultado = Number(ganancia / gasto );
        resultado1.innerHTML = "Por cada $ invertido tenemos una poductividad de " + resultado.toFixed(2);
    
    }
}

//Funcion calcular la pruductividad fisica

function productividadFisica(){
    const insumo = document.getElementById("insumo").value;
    const obtenido = document.getElementById("obtenido").value;

    if(insumo<=0 || obtenido<=0){
        resultado2.innerHTML = "Los datos ingresados son invalidos"
    }else{
        let resultado = Number(obtenido / insumo );
        resultado2.innerHTML = "Por cada Kg utilizado tenemos una productividad de " + resultado.toFixed(2);
    }
}