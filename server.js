const express = require('express');

const cors = require('cors');

const prisma = require('prisma');

const app = express();

const data = require('./data.json');

// Verbos HTTP

app.use(cors());

// get FULL
app.get("/pokemons", function (req, res) {
    res.json(data);
});

// get by id
app.get("/pokemons/:id", function (req, res) {

    const { id } = req.params
    const pokemon = data.find(poke => poke.id == id);

    if(!pokemon) return res.status(204).json();

    res.json(pokemon);

});

// post with body
app.post("/pokemons", function (req, res) {

    const { name, email } = req.body;

    res.json({name, email}); 

});

// update by id
app.put("/pokemons/:id", function (req, res) {

    const { id } = req.params;
    const pokemon = data.find(poke => poke.id == id);

    if(!pokemon) return res.status(204).json();

    const { name } = req.body;

    pokemon.name = name;

    res.json(pokemon);

});

// 
app.delete("/pokemons/:id", function (req, res) {

    const { id } = req.params
    const pokemonFilter = data.filter(poke => poke.id == id);

    res.json(pokemonFilter);

});

app.listen(3000, function () {
    console.log("Server is running");
})