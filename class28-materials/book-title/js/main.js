//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
if (localStorage.getItem('books')) {
	document.querySelector('h2').innerText = localStorage.getItem('books');
}
localStorage.setItem('books', '');

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${choice}.json`;
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
		  if (!localStorage.getItem('books')) {
			  localStorage.setItem('books', data.title);
		  }
		  else if (!localStorage.getItem('books').includes(data.title)) {
			  localStorage.setItem('books', `${localStorage.getItem('books')} ; ${data.title}`);
		  }
		  document.querySelector('h2').innerText = localStorage.getItem('books');
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

