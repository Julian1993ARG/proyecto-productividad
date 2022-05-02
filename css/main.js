//obteniendo donde escribir los resultados
const resultado1 = document.getElementById("resultadoProductividadEconomica");
const resultado2 = document.getElementById("resultadoProductividadFisica");
const resultado3= document.getElementById("resultadoProductividadFisica2")
const resultado4= document.getElementById("resultadoProductividadEconomica3");

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

//Calculando el segundo ejemplo
function productividadFisica2(){
    const horas = document.getElementById("horas").value;
    const polizas = document.getElementById("polizas").value;

    if(horas<=0||polizas<=0){
        resultado3.innerHTML = "Los datos ingresados son invalidos";
    } else{
        let resultado = Number(polizas/horas);
        resultado3.innerHTML ="Por cada hora tenemos una porductividad de " + resultado.toFixed(2) + " polizas";

    }
}

//Calculando 3er ejemplo

function productividadEconomica3(){
    const gasto = document.getElementById("gasto3").value;
    const venta = document.getElementById("venta3").value;

    if(gasto<=0|| venta<=0){
        resultado4.innerHTML ="Los datos ingresados son invalidos";
    } else {
        let resultado = Number(venta/gasto);
        resultado4.innerHTML ="Por cada $ invertido tenemos una poductividad de " + resultado.toFixed(2);
    }
}