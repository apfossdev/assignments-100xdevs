const typeDropdown = document.getElementById("type");
const inputBox = document.getElementById("input-box-id");

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

async function getPokemonData(pokemonList, incrementCounter){
  try {
    const apiURL = pokemonList[incrementCounter];
    const response = await axios.get(apiURL);
    const pokemonData = response.data;
    return pokemonData;
    // console.log(response.data);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function submitFunctionality() {
  // send fetch request to poke api with above parameters (type and number), go to type, setup counter, count that many pokemons and their links store in an array
  const typeValue = typeDropdown.value;
  const inputBoxValue = parseInt(inputBox.value);
  const pokemonList = await getPokemonList(typeValue, inputBoxValue); //use await always to return required stuff from async functions
  console.log(pokemonList);

  // clear screen and load these pokemon data from these array links
  const parentNode = document.getElementById("main");
  parentNode.innerHTML = "";

  for (let i = 0; i < inputBoxValue; i++) {
    //fetch each card data from each url and update dom with each iteration
    const pokemonData = await getPokemonData(pokemonList, i);
    // console.log(pokemonData);
    //add cards to the dom here
    const cardDiv = document.createElement('div');
    const pokemonNameDisplay = document.createElement('h3');
    const pokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    pokemonNameDisplay.innerHTML = `Name: ${pokemonName}`;
    const experienceDisplay = document.createElement('h4');
    experienceDisplay.innerHTML = `Base Experience: ${pokemonData.base_experience}`;
    const heightDisplay = document.createElement('h4');
    heightDisplay.innerHTML = `Height: ${pokemonData.height}`;
    const weightDisplay = document.createElement('h4');
    weightDisplay.innerHTML = `Weight: ${pokemonData.weight}`;

    //append these to cardDiv, cardDiv to parentNode

    cardDiv.appendChild(pokemonNameDisplay);
    cardDiv.appendChild(experienceDisplay);
    cardDiv.appendChild(heightDisplay);
    cardDiv.appendChild(weightDisplay);
    parentNode.appendChild(cardDiv);
  }

}


