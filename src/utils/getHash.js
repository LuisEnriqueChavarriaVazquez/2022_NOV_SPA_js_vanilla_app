//Obtenemos la locacion en donde esta el usuario
const getHash = () => {
    //Debemos darle tratamiento a la URL
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
};

export default getHash;