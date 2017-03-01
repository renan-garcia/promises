function aspirar(){
  return new Promise((resolve) => {
      var quantidadeDePromessasRealizadas = 1 ;
      log.insertAdjacentHTML('beforeend', quantidadeDePromessasRealizadas +
          ') Aspirando a casa (<small>cógido assincrono</small>)<br/>');
      // Isto é apenas um exemplo para criar assincronismo
      window.setTimeout(
        function() {
          log.insertAdjacentHTML('beforeend', 1 +
              ') Casa aspirada! (<small>cógido assincrono</small>)<br/>');
          resolve("Um")
        }, 3 * 1000);
    });
}
