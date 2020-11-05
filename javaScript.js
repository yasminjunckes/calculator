let operacao = "nd";
let calculo = "";
let resultado = 0;
let verif = 0;

let num1 = "";
let num2 = "";

function calcular(numero){
    console.log(verif);
    
    if (verif == 1){
        console.log("ois")
        window.location.reload();
        igual = 0;
    }
    if (operacao == "nd"){
        num1 = num1 + numero;
        calculo = calculo + numero;
        atualizar = document.getElementById("resultado");

        atualizar.textContent = calculo;
    }
    else{
        num2 = num2 + numero;
        calculo = calculo + numero;
        atualizar = document.getElementById("resultado");

        atualizar.textContent = calculo;
    }  
}

function operacoes(op){
    if (operacao == "nd"){

        operacao = op;
        calculo = calculo + op;
        atualizar = document.getElementById("resultado");

        atualizar.textContent = calculo;
    }
    else{
        alert("error")
    }
}


function ponto(){
    if (num1 == ""){
        num1 = "0."
        calculo = "0.";
        atualizar = document.getElementById("resultado");

        atualizar.textContent = calculo;
    }
    else if (num1 != "" && num2 == ""){
        num1 = num1 + ".";
        calculo = calculo + ".";
        atualizar = document.getElementById("resultado");

        atualizar.textContent = calculo;
    }
    else{
        num2 = num2 + ".";
        calculo = calculo + ".";
        atualizar = document.getElementById("resultado");

        atualizar.textContent = calculo;
    }
}

function igual(){
    if (operacao == "nd"){
        return alert("error")
    }
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    verif = 1;

    if (operacao == " + "){
        resultado = num1 + num2;
        calculo = calculo + " = " + resultado;
        atualizar = document.getElementById("resultado");

        atualizar.textContent = calculo;
    }else if (operacao == " - "){
        resultado = num1 - num2;
        calculo = calculo + " = " + resultado;
        atualizar = document.getElementById("resultado");

        atualizar.textContent = calculo;
    }else if (operacao == " * "){
        resultado = num1 * num2;
        calculo = calculo + " = " + resultado;
        atualizar = document.getElementById("resultado");

        atualizar.textContent = calculo;
    }else if (operacao == " / "){
        resultado = num1/num2;
        calculo = calculo + " = " + resultado;
        atualizar = document.getElementById("resultado");

        atualizar.textContent = calculo;
    }
}