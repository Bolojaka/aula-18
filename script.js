$(document).ready(function() {
      $('#pegaValor').click(function() {
        var valor1 = parseInt($('#entrada1').val());
        var valor2 = parseInt($('#entrada2').val());
        var resultado = valor1 + valor2;
        $('#resultado').val(resultado);
      });
    });
