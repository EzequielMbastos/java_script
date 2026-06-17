//console.log("Hello word");

function somar() {
  const num1 = document.querySelector("#n1_soma");
  const num2 = document.querySelector("#n2_soma");
  const res = num1 + num2;
}

function multiplicar() {
  const n1 = Number(prompt("Digite primeiro numero"));
  const n2 = Number(prompt("Digite o segundo numero"));
  const res = num1 * num2;
  alert(`O resultado da multiplicação é ${res}`);
}

function dividir() {
  const num1 = Number(prompt("Digite primeiro numero"));
  const num2 = Number(prompt("Digite o segundo numero"));
  const res = num1 / num2;
  alert(`O resultado da divisão é ${res}`);
}

function somarInputs() {
  const n1 = Number(document.querySelector("#n1_soma").value);
  const n2 = Number(document.querySelector("#n2_soma").value);
  const resultado = n1 + n2;
  document.querySelector("#resultado_soma").textContent = `O resultado da soma e ${resultado}`;
  
}

function multiplicarInputs() {
    const n1 = Number(document.querySelector("#n1_multi").value);
    const n2 = Number(document.querySelector("#n2_multi").value);
    const resultado = n1 * n2;
    document.querySelector("#resultado_multi").textContent = `O resultado da multiplicacao é ${resultado}`;
}