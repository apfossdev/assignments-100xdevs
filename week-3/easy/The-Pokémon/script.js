const typeDropdown = document.getElementById("type");
const inputBox = document.getElementById("input-box-id");

function submitFunctionality() {
  // send fetch request to poke api with above parameters (type and number), go to type, setup counter, count that many pokemons and their links store in an array
    const typeValue = typeDropdown.value;
    const inputBoxValue = parseInt(inputBox.value);
    const pokemonList = getPokemonList(typeValue, inputBoxValue);
    console.log(pokemonList);
    
  // clear screen and load these pokemon data from these array links

  
}

async function getPokemonList(typeValue, inputBoxValue) {
    const pokemonList = [];
    try{
        const apiURL = `https://pokeapi.co/api/v2/type/${typeValue}`;
        const response = await axios.get(apiURL);
        for(let i = 0; i < inputBoxValue; i++){
            const pokemonURL = response.data.pokemon[i].pokemon.url;
            pokemonList.push(pokemonURL);
        }
        return pokemonList;
    }
    catch(error){
        console.error("Error fetching data:",error);
        }
}
