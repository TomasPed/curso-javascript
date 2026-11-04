//Menu
console.log("Celsius a Fahrenheit");
console.log("Fahrenheit a Celsius");
console.log("Metros a kilómetros");
console.log("Kilómetros a metros");
console.log("Salir")

//Funciones
function CelsiusaFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}
function FahrenheitaCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}
function Metrosakilómetros(metros){
    return metros/1000;
}
function Kilómetrosametros(kilometros){
    return kilometros*1000;
}

//Prueba
let resultado = CelsiusaFahrenheit(0);
console.log(resultado);