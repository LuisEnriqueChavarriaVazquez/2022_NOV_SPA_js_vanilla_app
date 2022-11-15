//Esto nos ayuda a ver que las rutas realmente funcionen bien.
const resolveRoutes = (route) => {
    //Validamos los id
    if(route.length <= 3){
        let validRoute = route === '/' ? route : '/:id';
        return validRoute
    }else{
        return `/${route}`;
    }
}

export default resolveRoutes;