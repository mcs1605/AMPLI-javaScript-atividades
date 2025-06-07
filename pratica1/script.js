function multiplicar() {
    const numero = parseInt(document.getElementById("entrada").value);
    const resultadoHTML = document.getElementById("resultado");

    // Limpa o conteúdo anterior
    resultadoHTML.innerHTML = "";

    if ((isNaN(numero) || (numero < 1) || (numero > 10))) {
        resultadoHTML.innerHTML = "Entrada inválida. Tente novamente!";
        return;
    }

    // Gera a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
    const linha = document.createElement("p");
    linha.textContent = `${numero} x ${i} = ${numero * i}`;
    resultadoHTML.appendChild(linha);
    }
}