const React = require("react");
const pokemon = require("../models/pokemon");

const center = {
    textAlign: 'center',
    backgroundColor: 'brown',
}
const poke = {
    color: 'white',
    fontSize: '30px'
}
const slogan = {
    fontSize: '50px',
    color: 'yellow',
    textShadow: '6px 1px #0466c8'
}
const img = {
    borderRadius: '20%',
    margin: '10px',
    border: '4px double black'

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
                <img src={`${pokemon.img}.jpg`} style={img}/>
            </div>
		</main>
	);
}
module.exports = Show;
