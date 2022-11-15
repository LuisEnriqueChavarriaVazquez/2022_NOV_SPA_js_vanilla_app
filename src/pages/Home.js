import getData from "../utils/getData";

//La funcion debe ser asincrona porque hace el llamado a una API
const Home = async () => {
    //Llamamos a la función que hace fetch a la API
    //Nos guarda los personajes.
    const characters = await getData();
    const view = `
        <div class="Characters">
        ${characters.results.map(character => `
            <article class="Character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
        `).join('')}
        </div>
    `;
    return view;
}

export default Home;