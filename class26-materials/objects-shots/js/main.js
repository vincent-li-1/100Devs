//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getCocktail);

function getCocktail() {
	const cocktailRequest = document.querySelector('input').value.toLowerCase();
	fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailRequest}`)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			const drink = data.drinks[0];
			document.querySelector('h2').innerText = `Name: ${drink.strDrink}`;
			document.querySelector('img').src = drink.strDrinkThumb;
			document.querySelector('h3').innerText = `Instructions: ${drink.strInstructions}`;
		})
		.catch(err => console.log(`Error: ${err}`));
}