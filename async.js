
const getPokemons = () => new Promise(async (res, rej) => {
    
    const consulta =  await fetch("http://192.168.150.217:3000/pokemons");

    const data = await consulta.json();

    res(data);

});

const getPokemonsByID = pokemon => new Promise(async (res, rej) => {
    
    const resultado = await fetch(`http://192.168.150.217:3000/pokemons/${pokemon}`);

    const data = await resultado.json();

    res(data);

});

async function init(){

    try {
        console.log(await getPokemonsByID("001"));

        console.log(await getPokemons());
    }
    catch(error){
        console.log(error);
    }
    
}

init();
