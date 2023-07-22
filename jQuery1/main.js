$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#nova-tarefa").val();
    const adicionaTarefa = $(
      `<li><a href="#" class="tarefa" style ='text-decoration: none'>${novaTarefa}<a/></li>`
    );

    adicionaTarefa.appendTo("ul");
    $("#nova-tarefa").val("");

    $(".tarefa").on("click", function () {
      $(adicionaTarefa).css("text-decoration", "line-through");
    });
  });
});
