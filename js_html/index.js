const form = document.getElementById("form-numeros");
let comparaNumeros = false;

function validNumber(numeroA, numeroB) {
  if (numeroA < numeroB) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const numeroA = parseInt(document.getElementById("numberA").value);
  const numeroB = parseInt(document.getElementById("numberB").value);
  const mensagemSucesso = document.querySelector(".success-message");
  const mensagemErro = document.querySelector(".error-message");

  comparaNumeros = validNumber(numeroA, numeroB);
  if (comparaNumeros) {
    mensagemSucesso.style.display = "block";
  } else {
    mensagemErro.style.display = "block";
  }
});
