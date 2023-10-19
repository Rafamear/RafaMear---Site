$(document).ready(function() {
  $(".Caixa").click(function() {
    // Obtenha o valor do atributo data-target
    var target = $(this).data("target");

    // Se o atributo data-target estiver definido
    if (target) {
      // Selecione a página com o ID correspondente
      var pagina = $("#" + target);

      // Verifique se a página já está visível
      if (!pagina.is(":visible")) {
        // Oculte todas as páginas antes de abrir a nova
        $(".Pagina").hide();

        // Redefina o tamanho e a posição da página
        pagina.css({
          opacity: 0,
          width: "0",
          height: "0",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) scale(1)" // Defina a escala como 1 (tamanho original)
        });

        // Animação para expandir a página com fade e zoom
        pagina.show().animate({
          opacity: 1,
          width: "1200px", // Defina o tamanho original da página
          height: "700px", // Defina o tamanho original da página
        }, {
          duration: 500
        });
      }
    }
  });
});

$(document).ready(function() {
  var caixaSelecionada = null; // Variável para armazenar a caixa selecionada
  
  $(".Caixa").click(function() {
    // Armazena a caixa atualmente clicada
    caixaSelecionada = $(this);
  
    // Animação para diminuir a largura e altura da .Caixa
    $(this).animate({
      width: "0",
      height: "0"
    }, 500, function() {
      // Após a animação, esconde a .Caixa
      $(this).hide();
    });
  
    // Mostra a .Pagina com uma animação de fade
    $(".PaginaContainer").fadeIn(500);
  });
  
  // Lidar com o clique na imagem de fechar
  $(".Fechar").click(function() {
    // Esconde a .Pagina
    $(".PaginaContainer").fadeOut(500, function() {
      // Após a animação de fade, mostra a .Caixa novamente
      if (caixaSelecionada) {
        caixaSelecionada.show();
        caixaSelecionada.animate({
          width: "100px", // A largura e altura originais da .Caixa
          height: "100px"
        }, 500);
      }
    });
  });
});

$(document).ready(function() {
  $('#Modo').change(function() {
    $('.TxtNavegacao').toggleClass('dark');
    $('.TituloCaixa').toggleClass('dark');
  });
});










