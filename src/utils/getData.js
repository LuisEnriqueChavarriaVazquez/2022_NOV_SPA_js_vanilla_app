//Accedemos a la URL de la API
const URL = "https://rickandmortyapi.com/api/character/";
//Creamos una funcion asincrona para acceder a los datos
async function getData(id){
    //Validamos que la ID exista
    const apiUrl = id ? `${URL}${id}` : URL;
    //Si todo sale bien...
    try{
        //Bajamos lo datos de la API
        const response = await fetch(apiUrl);
        //Los pasamos a JSON
        const data = await response.json(); 
        return data;
    }catch(error){
        console.log('Fetch error', error);
    }
}

export default getData;