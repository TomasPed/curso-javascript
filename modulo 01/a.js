console.log("hello, world");
console.log("Estoy aprendiendo JavaScript.");

let edad1 = 25;
const nombre1 = "Juan";

let ciudad = "Madrid";
ciudad = Barcelona;

const pais= "España";

const nombre2 = "Ana";
const edad2 = "30";
const direccion ;
let ;
const ;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof);
console.log(typeof direccion);


const nombreUsuario ="maria";
const edadUsuario= "25";

const mensaje = `El nombre del usuario es ${nombreUsuario} y tiene ${edadUsuario} años.`;
console.log(mensaje );



const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);
console.log(a !== b);

const edadpersona= 20;
const tipodedocumento= true;

const puedeingresar = edadpersona >=18 && tipodedocument;
console.log(puedeingresar);// true

const esMayordeEdad = edadpersona >= 18 || tienedocumento;
console.log(esMayordeEdad);// true

const nopuedeingresar = !puedeingresar;
console.log(nopuedeingresar); //true

const precio ="100";
const capacidad = "5";

const total= Number(precio) * Number(cantidad);
console.log(total);

//desarrollar un programa que calcule el salario semanal de un trabajador,
//considerando horas trabajadas y tarifa por hora. Agregar una bonificacion del 10% 
//cuando el salario base supere $500000

const tarifaporhora ="20000";
const diasdetrabajo ="5";
const horasdetrabajopordia ="8"

const salariodia= number(tarifaporhora) * number(horasdetrabajopordia);
console.log(salariodia);

const salariosemanal= number(salariodia)* number(diasdetrabajo);
console.log(salariosemanal);

const bono = (salariosemanal >500000);

const calificacion = 85;
if(calificacion >= 90){
    console.log("excelente");
}else if (calificacion >=80){
    console.log("muy bien");
} else if (calificacion >=70){
    console.log("bien");
}else if (calificacion >=60){
    console.log("suficiente")
}else {
    console.log("insuficiente");
}

//condiconales compuestos

const edad3 = 25;
const tieneentrada = true;

if(edad3 >= 18 && tieneentrada){
    console.log("puedes ingresar al evento")
}