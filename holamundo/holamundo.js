//comentarios

//comentario de una sola line

/*
    comentario 
    de varias
    lineas o multilinea
*/

console.log("hola mundo!");

//Declaracion de la variable
/* como nombrar las variables en JS

    el nombre puede empezar por _, $, o una letra
    nombreVariable
    $nombrevariable
    _nombrevariable
    variable01

    no esta permitido empazar por un numero
    no se puede usar palabras clave del languaje-keywords

    el anguaje distingue entra mayusculas y minusculas

    miVariable distinto de miVARiable

declaracion de la variables
    Tres forms de declarr una variable:

    1. var nombreVariable;
    2. let nombreVariable;
    3. const nombreVariable;


    */

var nombre = "luna";
let apellido ="Mesa";
const PI = "3.1416";

/* Tipos de datos

    string -->chain of characters "Esto un string";
    number --> numeros enteros o decimales 34, 3.67, 232442.9823
    boolean --> valores true or false
    null --> Declara valor nulo. null no es lo mismo que NULL o Null
    undefined --> valor sin definir (fara definitie)
    symbol--> tipo de dato especial, cuyos casos son unicos e inmutabile
    object --> tipo de dato objeto{}, puede contener mas variables (poate contine mai multe variabile)
    dentro.
    
    Para saber o comprobar el tipo de dato de una variable usamos:

    typeof

    ejamplo

*/

let variableObjeto = {
    nombre: "luna",
    edad: 3
}

let sinDefinir

console.log(typeof nombre);
console.log(typeof variableObjeto);
console.log(typeof PI);
console.log(typeof sinDefinir);


