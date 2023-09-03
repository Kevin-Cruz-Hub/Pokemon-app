// Imports
const express = require('express')
const jsxEngine = require('jsx-view-engine')
const app = express()
const port = 3000

const pokemon = require('./models/pokemon')
//* =================================================================
// App config
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
//* =================================================================
// Routes
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
})

// Show all pokemon available
app.get('/pokemon', (req, res) => {
    res.render('List', { pokemon: pokemon })
})

// Show an individual pokemon
app.get('/pokemon/:id', (req, res) => {
    const { id } = req.params
    res.render('Show',{pokemon : pokemon[id]})
})
//* =================================================================
// Listener
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})