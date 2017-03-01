function promessaArrumarCasa() {
  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend',
      ' - Começei a arrumar a casa (<small>código sincrono</small>)<br/>');

  log.insertAdjacentHTML('beforeend',
      ' - Como sou esperto chamei 3 amigos e pedi cada um pra fazer uma tarefa e fui dormir (<small>código sincrono</small>)<br/>');
  setTimeout(function(){
    var resultado = Promise.all([aspirar(),passarPano(),lavarBanheiro()]).then(
      function(val) {
        setTimeout(function(){
          console.log(val);
          log.insertAdjacentHTML('beforeend',
              'Promessas '+ val +' realizadas tudo arrumadinho Paloma chegou e fez massagem nos meus pés como agradecimento (<small>Cógigo assincrono terminado</small>)<br/>');
          return val;
        }, 1000);
      }).catch(function(err) {
        setTimeout(function(){
          log.insertAdjacentHTML('beforeend',
              ' - Não terminei as tarefas ' + err + ' paloma chegou encheu o saco ... tudo por culpa de um viadinho nutella (<small>Cógigo assincrono terminado</small>)<br/>');
          });
        }, 1000);
    }, 3000);
}
