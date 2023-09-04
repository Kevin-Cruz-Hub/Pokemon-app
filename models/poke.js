const mongoose = require('mongoose')

// Schema
const pokemonSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})

// Model
const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon;