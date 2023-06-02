console.log ("Start");

function MyFuncCalc(){
    let varPeso = document.getElementById("peso").value;

    if (isNaN(varPeso) || varPeso < 1 || varPeso > 999)
    {
        alert ("Valor informado para o Peso incorreto");
        document.getElementById("peso").value = "";
    }
    else
    {
        let varAltura = document.getElementById("altura").value;
        if (isNaN(varAltura) || varAltura < 1 || varAltura > 3)
        {
            alert ("Valor informado para a Altura incorreto");
            document.getElementById("altura").value = "";
        }
        else
        {
            let varIMCResult = varPeso / (varAltura ** 2)
            
            document.getElementById("imc").innerHTML = varIMCResult.toFixed(2);
            document.getElementById("container-imc").classList.remove("hide");
            
        }
    }
}

console.log ("End");