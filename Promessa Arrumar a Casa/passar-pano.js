function passarPano(){
  return new Promise((resolve,reject) => {
      log.insertAdjacentHTML('beforeend', 2 +
          ') Passando pano (<small>cógido assincrono</small>)<br/>');
      // Isto é apenas um exemplo para criar assincronismo
      window.setTimeout(
        function() {
              if (confirm('Você meu amigão, vai ajudar o Renan passando pano na casa?')){
                resolve("Dois (um trouxa me ajudou kkkk)")
                log.insertAdjacentHTML('beforeend', 2 +
                    ') Pano foi terminado pq um otario me ajudou! (<small>cógido assincrono</small>)<br/>');
              }else{
                log.insertAdjacentHTML('beforeend', 2 +
                    ') Pano não foi terminado pq um viado não pode ajudar! (<small>cógido assincrono</small>)<br/>');
                reject("Dois");
              }
        }, 6 * 1000);
    });
}
