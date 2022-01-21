
const getPokemons = () => new Promise((res, rej) => {
    
    fetch(`http://192.168.150.217:3000/pokemons`).then((data) => {
        data.json().then((data) => {
            res(data);
        });
    });

});

const getPokemonsByID = pokemon => new Promise((res, rej) => {
    
    fetch(`http://192.168.150.217:3000/pokemons/${pokemon}`).then((data) => {
        data.json().then((data) => {
            res(data);
        });
    });

});


getPokemons().then((data) => {
        console.log(data);
        getPokemonsByID("001").then((data) => {
            console.log(data);
        })
    })

