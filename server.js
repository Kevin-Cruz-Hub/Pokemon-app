// Imports
const express = require('express')
const jsxEngine = require('jsx-view-engine')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()
const port = 3000

const pokemon = require('./models/pokemon')
const Pokemon = require('./models/poke')
//* =================================================================
// App config
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
//* =================================================================
// Middleware
app.use((req,res,next)=>{
    console.log(`${req.method}\n${req.url}`)
    next()
})
app.use(express.urlencoded({extended: false}))
//* =================================================================
// Routes
// Main Page
app.get('/', (req, res) => {
    res.render('Main')
})
// Show all pokemon available (Index)
app.get('/pokemon', async (req, res) => {

    try{
        const pokemonFromDB = await Pokemon.find({})
        console.log(pokemonFromDB)
        res.render('List', { pokemon: pokemonFromDB })
    }catch(error){
        console.log(error)
    }
})
// form to add a new pokemon
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})
// Redirect user and data, then add a new pokemon
app.post('/pokemon', async(req,res)=>{
    try{
        const addedPokemon = await Pokemon.create(req.body)
        console.log(addedPokemon)
    }catch(error){
        console.log(error)
    }
    res.redirect('/pokemon')
})

// Show an individual pokemon
app.get('/pokemon/:id',async (req, res) => {
    const { id } = req.params

    try{
        const pokemon = await Pokemon.findById(id)
        res.render('Show', { pokemon: pokemon })
    }catch(error){
        console.log(error)
    }
})
//* =================================================================
// Connect to the Database
mongoose.connect(process.env.MONGO_URI)
// test connection
mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB')
})
//* =================================================================
// Listener
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})