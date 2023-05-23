//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=KaTIjcVNGJuo53SpU9kiZWMHS6ILozVNoFuCBfx9&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
		if (data.media_type === 'video') {
			document.querySelector('iframe').src = data.url;
			document.querySelector('img').src = '';
		}
		else if (data.media_type === 'image') {
			document.querySelector('img').src = data.hdurl;
			document.querySelector('iframe').src = '';
		}
		document.querySelector('h3').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

