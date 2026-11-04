//Menu
console.log("Celsius a Fahrenheit");
console.log("Fahrenheit a Celsius");
console.log("Metros a kilómetros");
console.log("Kilómetros a metros");
console.log("Salir");

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

//Switch
switch (Opcion){
    case 1:
        console.log("Seleccionado Celsius a Fahrenheit");
        break;
    case 2:
        console.log("Seleccionado Fahrenheit a Celsius");
        break;
    case 3:
        console.log("Seleccionado Metros a kilómetros");
        break;
    case 4:
        console.log("Seleccionado Kilómetros a metros");
        break;
    case 5:
        console.log("Seleccionado Salir");
        break;
    default:
        console.log("Opción no valida");
}

//Evitar un ciclo y que el usuario tenga que seleccionar alguna de las opciones

let opcion;
do {
    console.log("Conversor Unidades");
    console.log("Celsius a Fahrenheit");
    console.log("Fahrenheit a Celsius");
    console.log("Metros a kilómetros");
    console.log("Kilómetros a metros");
    console.log("Salir");
} while (opcion !== 5);

let opcion = Number(prompt("Selecciona Una opcion"));

case 1:
    let celsius = Number(prompt("Ingresa la unidad a convertir:"));
    let resultado =CelsiusaFahrenheit(celsius);

    console.log(resultado + "°F");
    break;

case 2:
    let Fahrenheit = Number(prompt("Ingresa la unidad a convertir:"));
    let resultado =FahrenheitaCelsius(Fahrenheit);

    console.log(resultado + "°C");
    break;

case 3:
    let Metros = Number(prompt("Ingresa la unidad a convertir:"));
    let resultado = Metrosakilómetros(Metros);

    console.log(resultado + "m");
    break;

case 4:
    let Kilometros = Number(prompt("Ingresa la unidad a convertir:"));
    let resultado = Kilometros (Km);

    console.log(resultado + "Km");
    break;

let entrada = prompt("Ingrese Un valor:");
if (entrada === null || entrada.trim() === ""){
    console.log ("Debes de Ingresar un valor");
}else{
    let valor = Number(entrada);

    if (!Number.isFinite(valor)){
        console.log("Ingresa un número Valido");
    } else{
        console.log("Valor valido:", valor);
    }
}

if (valor < 0){
    console.log("La longitud no puede ser negativa");
}
//pruebas
// Prueba 1: Celsius a Fahrenheit
console.log("0 °C =", celsiusAFahrenheit(0), "°F");
// Esperado: 32 °F

// Prueba 2: Celsius a Fahrenheit
console.log("100 °C =", celsiusAFahrenheit(100), "°F");
// Esperado: 212 °F

// Prueba 3: Fahrenheit a Celsius
console.log("32 °F =", fahrenheitACelsius(32), "°C");
// Esperado: 0 °C

// Prueba 4: Metros a Kilómetros
console.log("1500 m =", metrosAKilometros(1500), "km");
// Esperado: 1.5 km

// Prueba 5: Kilómetros a Metros
console.log("2.5 km =", kilometrosAMetros(2.5), "m");
// Esperado: 2500 m

// Prueba 6: Temperatura negativa
console.log("-10 °C =", celsiusAFahrenheit(-10), "°F");
// Esperado: 14 °F