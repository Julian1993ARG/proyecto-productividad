//obteniendo donde escribir los resultados
const resultado1 = document.getElementById("resultadoProductividadEconomica");
const resultado2 = document.getElementById("resultadoProductividadFisica");


//funcion calcular productividad economica

function productividadEconomica(){
    const gasto = document.getElementById("gasto").value;
    const ganancia = document.getElementById("venta").value;
    let resultado = Number(ganancia / gasto );
    resultado1.innerHTML = "La pruductividad de los datos ingresados es de " + resultado.toFixed(2);
}

//Funcion calcular la pruductividad fisica

function productividadFisica(){
    const insumo = document.getElementById("insumo").value;
    const obtenido = document.getElementById("obtenido").value;
    let resultado = Number(obtenido / insumo );
    resultado2.innerHTML = "La pruductividad de los datos ingresados es de " + resultado.toFixed(2);
}