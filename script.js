function calcule() {
  let weight = window.document.getElementById("weight");
  let height = window.document.getElementById("height");
  result.innerHTML = "";
  result2.innerHTML = "";

  if (weight.value.length == 0) {
    window.alert("Dados incorretos, digite os dados novamente!");
  } else {
    let peso = Number(weight.value);
    let altura = Number(height.value) / 100;
    let res = peso / altura ** 2;
    window.document.getElementById("result").innerText = `(IMC ${res.toFixed(1)})`;
    if (res < 18.5) {
      window.document.getElementById("result2").innerText += `Abaixo do Peso`;
    } else if (res < 24.99) {
      window.document.getElementById("result2").innerText += `Peso Normal`;
    } else if (res < 29.99) {
      window.document.getElementById("result2").innerText += `Sobrepeso`;
    } else if (res > 30) {
      window.document.getElementById("result2").innerText += `Obesidade`;
    }
  }
}


