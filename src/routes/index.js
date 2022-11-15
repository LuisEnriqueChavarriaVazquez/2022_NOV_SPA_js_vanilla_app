//Importamos los templates
import Header from '../templates/Header';
//Importamos las pages
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
//Importamos los utils
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes'

//Creamos las rutas de la aplicacion
const routes = {
    //La ruta del home (lo primero que carga)
    '/': Home,
    //La ruta de los personajes, id es un valor dinamico
    '/:id': Character,
    '/contact': 'Contact',
}

/*
 * Es asincrona porque el manejador de la
 * ruta se va a esperar a que el usuario
 * se mueva hacia una url concreta.
 * Esta siempre a la escucha...
 */
const router = async () => {
    //Debemos seleccionar los divs donde queremos renderizar nuestro contenido
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    //Renderizamos los templates o pages
    header.innerHTML = await Header();

    //Ejecutamos la logica de nuestro utils
    let hash = getHash();
    let route = await resolveRoutes(hash);
    //En caso de que no se encuentre el recurso metemos el 404
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
}

export default router;
