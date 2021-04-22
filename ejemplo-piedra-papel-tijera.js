var op1 = "piedra"
var op2 = "papel"
var op3 = "tijera"

function juego (user, cpu){
    if (user==cpu){
        console.log("Empate")
    }else if(user==op1 && cpu==op3){
        console.log("Gano user")
    }else if(user==op2 && cpu==op1){
        console.log("Gano user")
    }else if(user==op3 && cpu==op2){
        console.log("Gano user")
    }else{
        console.log("Gano cpu")
    }

}
