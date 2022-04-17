self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
      self.postMessage('WORKER Iniciado: ' + data.msg);
      break;
    case 'stop':
      self.postMessage('WORKER DETENIDO: ' + data.msg +
                       '. (Los botones ya no funcionan)');
      self.close(); // Terminates the worker.
      break;
    default:
      self.postMessage('comando desconocido: ' + data.msg);
  };
}, false);