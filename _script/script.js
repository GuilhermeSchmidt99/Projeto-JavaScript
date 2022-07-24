const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = dcoument.querySelector('.pokemon_image');
const form = document.querySelector('.form');

async function fetchPokemon(pokemon) {
    const APIresponse = await fetch('https://pokeapi.co/api/v2/${pokemon}');
    const data = await APIresponse.json();
    return data;
} 

const renderPokemon =  async (pokemon) => {

    const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML  = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
}

form.addEventListener('submit', (event) => {

    event.preventDefault();

    console.log('enviando formulario...')

});