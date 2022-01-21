
const getPokemons = () => new Promise(async (res, rej) => {
    
    const consulta =  await fetch("http://192.168.150.217:3000/pokemons");

    if(consulta.ok){

        const data = await consulta.json();

        res(data);
        
    }else{
        rej("Houve um erro");
    }

});

const getPokemonsByID = pokemon => new Promise(async (res, rej) => {
    
    const resultado = await fetch(`http://192.168.150.217:3000/pokemons/${pokemon}`);

    if(resultado.ok){

        const data = await resultado.json();

        res(data);

    }else{
        rej("Houve um erro, pokemon não encontrado!");
    }

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
