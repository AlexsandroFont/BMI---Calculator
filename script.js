document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("calc-form");
    const nomeImput = document.getElementById("nome");
    const nomeError = document.getElementById("nome-error");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();


//Validação do Nome
        if (!nomeImput.value){
            nomeError.style.display = "block";
            return;
        } else {
            nomeError.style.display = "nome";
        }

        const nome = nomeImput.value;
        const altura = parseFloat(document.getElementById("altura").value);
        const peso = parseFloat(document.getElementById("peso").value);

        const imc = peso / (altura * altura);
        const resultadoElement = document.getElementById("resultado");

        let categoria;

        if (imc < 18.5){
            categoria = "abaixo do peso";
            resultadoElement.style.backgroundColor = "#FFFF00";
        } else if (imc < 25){
            categoria = "peso normal";
            resultadoElement.style.backgroundColor = "#00FF00";
        } else if (imc < 30) {
            categoria = "sobrepeso"
            resultadoElement.style.backgroundColor = "#FFA500";
        }else {
            categoria ="obesidade";
            resultadoElement.style.backgroundColor = "#FF0000";
        }

        resultadoElement.innerHTML = `<p> ${nome}, seu IMC é ${imc.toFixed(
            2
        )}.</p><p>Voce está na categoria: ${categoria}</p>`

        //atualizar a categoria - input
        document.getElementById("categoria").value = categoria;

        let dados = new FormData(formulario)

        for (let [chave, valor] of dados.entries()) 
            console.log(chave + ":" + valor);
        
    });
});
