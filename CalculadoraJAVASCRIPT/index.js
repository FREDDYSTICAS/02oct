// Función para calcular el IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    // Verificar si los valores son válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "<span>Por favor, ingresa valores válidos.</span>";
        return;
    }

    // Calcular el IMC
    const imc = peso / (altura * altura);

    // Clasificación del IMC
    let clasificacion = "";
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
        resultado.style.color = "#ffcc00";
        
    } else if (imc >= 18.5 && imc < 25) {
        clasificacion = "Peso normal";
        resultado.style.color = "#5cb85c";
    } else if (imc >= 25 && imc < 30) {
        clasificacion = "Sobrepeso";
        resultado.style.color = "#f0ad4e";
    } else if (imc >= 30 && imc < 35) {
        clasificacion = "Obesidad tipo 1";
        resultado.style.color = "#d9534f";
    } else if (imc >= 35 && imc < 40) {
        clasificacion = "Obesidad tipo 2";
        resultado.style.color = "#d43f3a";
    } else {
        clasificacion = "Obesidad tipo 3 (mórbida)";
        resultado.style.color = "#a94442";
    }

    // Mostrar el resultado
    resultado.innerHTML = `<span>Tu IMC es ${imc.toFixed(2)}: ${clasificacion}</span>`;
}

// Función para verificar si un número es primo
function verificarPrimo() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoPrimo = document.getElementById("resultadoPrimo");

    // Verificar si el número es válido
    if (isNaN(numero) || numero <= 1) {
        resultadoPrimo.innerHTML = "<span>Por favor, ingresa un número válido.</span>";
        return;
    }

    // Verificar si el número es primo
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    // Mostrar el resultado
    if (esPrimo) {
        resultadoPrimo.innerHTML = `<span>${numero} es un número primo.</span>`;
        resultadoPrimo.style.color = "#5cb85c";
    } else {
        resultadoPrimo.innerHTML = `<span>${numero} no es un número primo.</span>`;
        resultadoPrimo.style.color = "#d9534f";
    }
}
