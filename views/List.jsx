const React = require("react");

function List(props) {
	const { pokemon } = props;
	console.log(pokemon);
	return (
		<main>
			<nav>
				<a href="/">Back</a>
                <br/>
				<a href="/pokemon/new">Add a new Pokemon</a>
			</nav>
			<div>
				<h1>See All The Pokemon!</h1>
				<ul>
					{pokemon.map((poke, i) => {
						return (
							<li key={poke._id}>
								<a href={`/pokemon/${poke._id}`}>
									{poke.name[0].toUpperCase()}
									{poke.name.slice(1)}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</main>
	);
}
module.exports = List;
