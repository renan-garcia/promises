var contadorDePromessas = 0;
function promessaDeTeste() {
  var quantidadeDeSegungos = document.getElementById('segundos');
  var quantidadeDePromessasRealizadas = ++contadorDePromessas;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', quantidadeDePromessasRealizadas +
      ') Entrei na função com (<small>código sincrono</small>)<br/>');

  // Criamos uma nova promise: prometemos a contagem dessa promise (após aguardar 3s)
  var promessa = new Promise(
    // a função resolve() é chamada com a capacidade para resolver ou
    // rejeitar a promise
    function(resolve, reject) {
      log.insertAdjacentHTML('beforeend', quantidadeDePromessasRealizadas +
          ') Começei a cumprir a promessa (<small>cógido assincrono</small>)<br/>');
      // Isto é apenas um exemplo para criar assincronismo
      window.setTimeout(
        function() {
          // Cumprimos a promessa !
          resolve(quantidadeDePromessasRealizadas)
        }, quantidadeDeSegungos.value * 1000);
    });

  // definimos o que fazer quando a promise for realizada
  promessa.then(
    // apenas logamos a mensagem e o valor
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
          ') Promessa realizada (<small>Cógigo assincrono terminado</small>)<br/>');
    });

  log.insertAdjacentHTML('beforeend', quantidadeDePromessasRealizadas +
      ') Promessa feita (<small>Cógido sincrono terminado</small>)<br/>');
}
