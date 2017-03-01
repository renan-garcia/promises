// function lavarBanheiro(){
//   return new new Promise(
//     // a função resolve() é chamada com a capacidade para resolver ou
//     // rejeitar a promise
//     //function(resolve, reject) {
//       var quantidadeDePromessasRealizadas = quantidadeDePromessasRealizadas++;
//       log.insertAdjacentHTML('beforeend', quantidadeDePromessasRealizadas +
//           ') Lavando Banheiro (<small>cógido assincrono</small>)<br/>');
//       // Isto é apenas um exemplo para criar assincronismo
//       window.setTimeout(
//         function() {
//           // Cumprimos a promessa !
//           resolve(quantidadeDePromessasRealizadas)
//         }, 3 * 1000);
//     });
// }


function lavarBanheiro(){
  return new Promise((resolve) => {
      log.insertAdjacentHTML('beforeend', 3 +
          ') Lavando Banheiro (<small>cógido assincrono</small>)<br/>');
      // Isto é apenas um exemplo para criar assincronismo
      window.setTimeout(
        function() {
          log.insertAdjacentHTML('beforeend', 3 +
              ') Banheiro Terminado! (<small>cógido assincrono</small>)<br/>');
          // Cumprimos a promessa !
          resolve("Três")
        }, 3 * 1000);
    });
}
