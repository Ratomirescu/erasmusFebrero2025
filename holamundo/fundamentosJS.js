//continuamos con los fundamentos de JS

//coversion de tipos
//JAvascript es de tipo dinamico

let variable = 55;
variable = "texto";

//cambiar un string a number

variable = "1234";
console.log(typeof variable);
console.log(variable);

variable = parseInt(variable);
console.log(typeof variable);
console.log(variable);

//Convertir numero a float (decimal) (convert a number to float)

let pi = 3.1416;
let n = parseInt(pi); //devuelve 3
console.log(n);

n = parseFloat(pi); //devuelve 3.1416
console.log(n);

//operadore de asignacion
/*


    =, 
    += sumar y asignar, x += 4
    -= substracts y asignar, x -= 4 
    *= multiplicar y asignar, x *= 4  
    /= dividir y asignar, x /= 4
    %= modulor(resto de division) y asignar x %= 4 


*/

let numero = 10;
numero += 5; //numero = numero + 5;
console.log(numero);

// Operadores de comparacion

/*

    Iguadad == Los dos valores son iguales, sin importar el tipo
    distinto != Los dos valores son distintos
    extricamente iguales === los dos valores son iguales y el tipo tambien (si valoarea si tipul)
    extricamente distintos !== Son diferentes en valor y/o tipo
    MAyor que > 
    Mayor igual >=
    menor que <
    menor iguale que <=

*/

let variableString = "1234";
let variableNumber =1234;

console.log(variableString == variableNumber);
console.log(variableString === variableNumber);

// Operadores aritmeticos

/*

    Resto o modulo %, devuelve el reso de la division

    incremento ++ Incrementa en una unidad el operando
    
    decremento -- resta una unidad al operando

*/

//Incremento
variable = 3;

++variable //devuelve 4
variable++ //devuelve 3 y despues le sumo uno asignanod 4

--variable //devuelve 2
variable-- //devuelve 3 y despues resta uno y asigna el resultado

// operador de concatenacion

// Une (it makes a union between the two strings) dos string, devolviendo otro string corespondiente a la union

variableString = "hola";
otroString = "Mundo";
let concatenacion = variableString + otroString;
console.log(concatenacion);

concatenacion = variableString * 5; //Devuelve NaN
console.log(concatenacion);

//Operador ternario
/* Se necesitan 3 operadores,

    condicion ? valor 1 : valor 2

    Si la condicion es true devolvera el valor 1, sino el valor 2
*/

/* Sentencias de condicios

    if condicion {
        codigo si verdadero / true
    } else {
        codigo si false / false
    }

    swich (expresion condicional){

        case valor1:
            codigo si valor1
            break;
        case valor 2:
            codigo si expresion es valor 2
            break;
        default:
            codigo que se ejecuta por defecto si no
            es valor1 o valor2 (default is the code that is executed by default if it not the 1st value or the 2nd value)

    }   

*/

//ejemplo if

let nombre = "Luna";
nombre = "Antonio";
if(nombre ==="Luna"){
    console.log("hola soy " + nombre);
} else {
    console.log("Hola soy " + nombre);
}

switch (nombre){
    case "Luna":
        console.log("Mi nombre es" + nombre);
        break;
        case "Antonio":
        console.log("Mi nombre es" + nombre);
        break;
    default:
console.log("no tengo nombre")
}

//bucles e iteraciones (loops and repetitions)

/*
    bucle for
    bucle while
    bucle do ... while
*/

//bucle for

/*
    Sintaxis:

    for(expresionInicial; condicion; expresionIncremento)
        codigo que se ejecutar en bucle

}

*/

for(i=0; i<10; i++){
    console.log(i);
}

//Bucle while

/*
    Sintaxis:

    while(condicion){
        codigo a ejecutar
    }
*/

let a = 0;
while (a <= 10){
    console.log(a);
    a++;
}

//do ... while

/*

 Sintaxis:

    do{
    } while(condition)

     */

    a=0;
    do{
        console.log("Se ejecuta al menos una vez");
        console.log(a);
    } while(a>0);

    //Funciones

    /*

        Sintaxis:

        function nombreFunction (argumento1, argumento2, ....){
            bloque de codigo de la funcion;

            return x --> devuelve un resultando si la function tiene esa opcion

        }

        Tres formas:

        1. Funcion sin argumentos y sin devolver datos
        2. Funcion with arguments and without giving back data
        3. FUncion with argument and giving back data

    ejemplo funcion:

    console.log(argumento);

    */

function suma (valor1, valor2){
    resultado = valor1 + valor2;
    return resultado;
}

let resultadoSuma = suma(5,10);
console.log(resultadoSuma);

//Array-vector

/*

    Un array es una variable que contiene un conjunto de datos ordenado
    por posiciones o indice(index).

*/

//declaracion de un array
let miArray = [12, "hola", 3.156, "mas datos"];

let otroArray = new Array(5);
let newArray = new Array('elemento1', 3, 'javascript');

console.log(miArray);
console.log(otroArray);
console.log(newArray);

console.log(miArray[0]);
console.log(newArray[3]);

let matriz = [[2,4,5],[5,7,9]];
console.log(matriz);
console.log(matriz[1][0]);

//añadir elemento al final del array+

let languajesProgramacion = ['Java', 'Python', 'C++'];
console.log(languajesProgramacion);
languajesProgramacion.push('Javascript', 'Basic');
console.log(languajesProgramacion);

//eliminar elemento del final

let elementoEliminado = languajesProgramacion.pop();
console.log(languajesProgramacion);
console.log(elementoEliminado);

//Añadir elemento al principio del Array

languajesProgramacion.unshift('basic', 'ensemblador')
console.log(languajesProgramacion);

//saber el tamaño de un array (the size)
console.log(languajesProgramacion.length);

let cadenaLetras = "Hola";
console.log(cadenaLetras.length); //arata lungimea stringului


//declaracion de un objeto

let persona = {
    name: 'Luna',
    edad: 3,
    profesion: 'Ser feliz'
};

//Acceder a una propriedad del objeto

console.log(persona.name);

console.log(persona['name']);

//Cambiar el valor de una propriedad (change)

persona.edad = 4;
console.log(persona.edad);

//Clases en Javascript

class Rectangale {
    constructor (height, width){
        this.height = height;
        this.width = width;

    }
}

let cuadrado = new Rectangale(100,100);
console.log(cuadrado);

let rectangulo = new Rectangale(200,600);
console.log(rectangulo);

console.log(cuadrado.width);
console.log(rectangulo.height);

cuadrado.color = 'black';
console.log(cuadrado);

class Personaje {
    constructor(tipo, herramientas){
        this.tipo = tipo;
        this.herramientas = herramientas;
        this.andar();
    }

    andar(){
        console.log("Personaje"+this.tipo+"caminando");
    }


}

let mago = new Personaje('mago', ['varita magica', 'sombrero']);
console.log(mago);

mago.andar();

