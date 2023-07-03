(function () {
  function desativarDragDrop() {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }
  desativarDragDrop()
}())

//o que vai ser escrito no Home

var texto = "A melhor empresa de paisagismo de Santa Catarina.";
var tempoEscrita = 100;

var elementoTexto = document.getElementById("animationTextHome");
var indiceCaractere = 0;

function escreverTexto() {
  elementoTexto.textContent += texto.charAt(indiceCaractere);
  indiceCaractere++;

  if (indiceCaractere < texto.length) {
    setTimeout(escreverTexto, tempoEscrita);
  }
}
escreverTexto();

// header fixo

window.addEventListener('scroll', function () {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});