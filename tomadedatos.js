const container = document.getElementById('container');

// function convertirTiempoAMinutos(tiempo) {
//   let partes = tiempo.split(":");
//   let minutos = parseInt(partes[0]);
//   let segundos = parseInt(partes[1]);
//   let totalMinutos = minutos + segundos / 60;
//   return totalMinutos;
// }

function calcularN() {
  let celdasConValor = 0
  let sumaArgumentos = 0
  let sumaDeCuadrados = 0
  let potenciaDeLaSuma = 0

  for (let i = 1; i < 11; i++) { //si deseo agregar mas tomas, añadir el numero de tomas añadidas al numero que esta despues del simbolo menor
    const minutos = parseFloat(document.getElementById(`toma${i}`).value)

    if (!isNaN(minutos)) {
      celdasConValor += 1
      sumaDeCuadrados += Math.pow(minutos, 2)
      sumaArgumentos += minutos
    }
  }
  potenciaDeLaSuma = Math.pow(sumaArgumentos, 2)

  // debugger;
  document.getElementById("resultado").innerHTML = Math.pow(((40 * Math.sqrt(celdasConValor * sumaDeCuadrados - potenciaDeLaSuma)) / sumaArgumentos), 2)
}