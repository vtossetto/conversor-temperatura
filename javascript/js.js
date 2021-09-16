function Fahrenheit() {
  var valorCelsius = document.getElementById("celsius");
  var valor = valorCelsius.value;
  var resultado = parseFloat(valor);

  var conversao = resultado * 1.8 + 32;
  console.log(conversao);

  var elementotemperaturaConvertida = document.getElementById(
    "temperaturaConvertida"
  );
  var temperaturaConvertida = "A temperatura em Fahrenheit é " + conversao;
  elementotemperaturaConvertida.innerHTML = temperaturaConvertida;
}

function Kelvin() {
  var valorCelsius = document.getElementById("celsius");
  var valor = valorCelsius.value;
  var resultado = parseFloat(valor);

  var conversao = resultado + 273.15;
  console.log(conversao);

  var elementotemperaturaConvertida = document.getElementById(
    "temperaturaConvertida"
  );
  var temperaturaConvertida = "A temperatura em Kelvin é " + conversao;
  elementotemperaturaConvertida.innerHTML = temperaturaConvertida;
}
