//Aqui debemos importar el router
import router from './routes/index';
//Cuando la página cargue pasamos la función de router
window.addEventListener('load', router);
//Cuando el hash o la ruta cambia se ejecuta el router
window.addEventListener('hashchange', router);