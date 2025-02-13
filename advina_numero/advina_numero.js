/*
Instrucciones creacion juego

1. Generar un numero aleatorio

2. Registrar el numero del intento en el que
el jugardo se encuentre, empazada por el 1

3. Darle al juador una forma de advinar el numero

4.Una vez que se ha introducido el numero
registrarlo en alguna parte para que el jugador
pueda ver sus intentos

5. A continuacion, comprobar si el numero es correcto

6.Si es correcto:

    -mostrar un mensaje de felicitation
    -hacer que el jugador no pueda introducir
    mas intentos
    -mostrar un control que permita al jugador 
    volver a empazar a juego

7. Si es incorrecto y al jugador le quedan intentos

    -decirle al jugador que ha fallado
    -dejar que el jugador lo intente de nuevo
    -Incrementa el numero de intentos el 1

    8. Si el jugador falla y no quedan intentos:

        -Decirle al jugador que ha terminado (GameOver)
        -Hacer que el jugador no pueda introducir mas intentos
        -mostrar un control que permita al jugador
        empezar de nuevo

    9.Once the game restarts make sure the UI are completly restored, 
    going back to the step 1

*/

//GEnerar numero aleatorio

let randomNumber = Math.floor(Math.random() * 100) + 1;

//guardar referencia a cada parrafo de informacion

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lastOrHi = document.querySelector(".lastResult");

//Guardar referencia al input y al boton enviar

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessfield");

//Variables para los intentos
//LA segunda variable guarda le referencia al buton reset

let guessCount = 1;
let resetButton;
guessField.focus();

//FUncion para comprobar el numero a adivinar
function chackGuess(){
    //guardamos el valor ingresado en el input y nos aseguramos
    //que es un numero, con Number()
    let userGuess = Number(guessField.value);

    //Comrobamos si estamos en el primer intento
    if(guessCount==1){
        guessCount.textContent = "Intentos Anteriores";
    }
    guesses.textContent += userGuess+" ";

    //En este bloque comprabaremos los pasos del 5 al 8
    if(userGuess === randomNumber){
        lastResult.textContent = "¡Felicidades! ¡Lo Adivinaste!";
        lastResult.style.backgroundColor= "green";
        lowOrHi.textContent =" ";
        setGameOver();
    } else if(guessCount === 10){
        lastResult.textContent = "¡Fin del juego!";
        setGameOver
    } else {
        lastResult.textContent = "¡Incorrecto!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber){
            lowOrHi.textContent= "¡El numero es muy bajo!";
        } else if(userGuess > randomNumber){
            lowOrHi.textContent = "¡El numero es muy grande!";
        }
    }

    //Preparamos la variables para el siguiente intento
    //Vaciamos el valor del campo numero
    //Aplicamos el foco al input
    guessCount++;
    guessField.value=" ";
    guessField.focus ();
}

//Agrepamos un listener al buton submit
guessSubmit.addEventListener("click", checkGuess);

//DEclaramos la funcion 
function setGameOver(){
    guessField.disabled = true;  //deshibilita el input
    guessSubmit.disabled = true;
    //creamos un boton para  reseatar el juego
    resetButton = document.createElement("button");
    resetButton.textContent="Iniciar nuevo juego";
    document.body.append(resetButton);

    //Creamos un lkstener al botton creator
    resetButton.addEventListener("click", resetGame);

}

//creamos la funcion reset game
function resetGame(){

}