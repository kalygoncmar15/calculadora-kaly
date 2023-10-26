
function calcular() {
    const a = Number(document.querySelector("#coeficiente").value); // Velocidade
    const L = Number(document.querySelector("#comprimentoinicial").value); // Ângulo
    const Ti = Number(document.querySelector("#temperaturainicial").value); // Tempo
    const Tf = Number(document.querySelector("#temperaturafinal").value); // Posição X

    const deltaL = a * (L * (Tf - Ti))

    document.querySelector("#dilatacao").textContent = "Dilatação: " + deltaL.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular);
});