const React = require("react");
const pokemon = require("../models/pokemon");

const center = {
    textAlign: 'center',
    backgroundColor: 'brown',
    padding: '10px'
}
const poke = {
    color: 'white',
    fontSize: '30px',
    textDecoration: ' 1px double underline black'
}
const slogan = {
    fontSize: '50px',
    color: 'yellow',
    textShadow: '6px 1px #0466c8'
}
const img = {
    borderRadius: '20%',
    margin: '10px',
    border: '4px double black',
    boxShadow: '5px 10px 5px black'
}
function Show(props) {
	const { pokemon } = props;
	return (
		<main>
            <nav>
                <a href="/pokemon">Back</a>
            </nav>
			<div style={center}>
                <h1 style={slogan}>Gotta Catch Em' All</h1>
                <h2 style={poke}>{pokemon.name[0].toUpperCase()}{pokemon.name.slice(1)}</h2>
                <img src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} style={img}/>
            </div>
		</main>
	);
}
module.exports = Show;
