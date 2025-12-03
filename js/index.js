// Esperar a que Cordova esté listo
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  console.log('Cordova listo: ' + cordova.platformId + ' @ ' + cordova.version);

  // Inicializar todos los componentes de Materialize automáticamente
  M.AutoInit();

  // Si quieres opciones personalizadas para el sidenav:
  // const elems = document.querySelectorAll('.sidenav');
  // const instances = M.Sidenav.init(elems, { edge: 'left', draggable: true });
}
