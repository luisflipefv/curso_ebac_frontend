document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form-sorteador")
    .addEventListener("submit", function (evento) {
      evento.preventDefault();
      let numeroMaximo = document.getElementById("numero").value;
      numeroMaximo = parseInt(numeroMaximo);

      let numeroAleatorio = Math.random() * numeroMaximo + 1;

      document.getElementById("resultado").innerText =
        Math.floor(numeroAleatorio);
      document.querySelector(".numero-sorteado").style.display = "block";
      block;
    });
});
