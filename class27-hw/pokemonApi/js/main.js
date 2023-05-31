document.querySelector('button').addEventListener('click', getPokemon);

function getPokemon() {
	const pokemonReq = document.querySelector('input').value.toLowerCase();
	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonReq}`)
		.then(res => res.json())
		.then(data => {
			const abilities = data.abilities;
			const names = abilities.map(element => element.ability.name);
			for (const name of names) {
				liNode = document.createElement('li');
				liNode.innerText = name;
				document.querySelector('.abilities').appendChild(liNode);
			}
			const types = data.types;
			const typeNames = types.map(element => element.type.name);
			for (const typeName of typeNames) {
				liNode = document.createElement('li');
				liNode.innerText = typeName;
				document.querySelector('.types').appendChild(liNode);
			}
		})
		.catch(err => console.log(`Error: ${err}`))
}