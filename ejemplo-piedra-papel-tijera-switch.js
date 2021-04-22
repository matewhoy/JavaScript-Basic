var op1 = "piedra"
var op2 = "papel"
var op3 = "tijera"
var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var cpu = options[Math.floor(Math.random() * 3)];
console.log(cpu)
switch(true){
    case(user==cpu):
        console.log("Empate");
        break;
    case(user==op1 && cpu==op3):
        console.log("Ganó el usuario con "+ op1);
        break;
    case(user==op2 && cpu==op1):
        console.log("Ganó el usuario con "+ op2)
        break;
    case(user==op3 && cpu==op2):
        console.log("Ganó el usuario con "+ op3);
        break;
    default:
        console.log("Perdiste")
    
}