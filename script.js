console.log ("Start");


let pesoElement = document.querySelector("#peso");
let alturaElement = document.querySelector("#altura");

let buttonElement = document.querySelector("#button");

let imcElement = document.querySelector("#imc");

let containerIMC = document.querySelector("#container-imc");

let varIMC = document.querySelector("#container-imc")


function MyFuncCalc(){
    alert(document.querySelector("#peso").innerHTML);
    document.querySelector("#container-imc").classList.remove("hide");
    document.querySelector("#imc").innerHTML = "AKI";

}

console.log ("End");