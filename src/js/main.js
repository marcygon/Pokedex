import pokemons from "./data.js";

const addItems = () => {
    for (let i=1; i<pokemons.length; i++){
        const listItem = document.createElement('article');
        listItem.classList.add('list-pokemons-item');
        listItem.innerHTML = `
        <div class="list-pokemons-item-content">
            <img src=${pokemons[i].sprite} alt=${pokemons[i].url}>
            <h3>${pokemons[i].name}
                <span>${pokemons[i].type}</span> 
            </h3>
        </div>
        `;
        document.querySelector('.list-pokemons').appendChild(listItem);
    }
}
addItems();