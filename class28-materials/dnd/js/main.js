//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
		  data.subclasses.forEach(obj => {
			const li = document.createElement('li');
			li.innerText = obj.name;
			document.querySelector('ul').appendChild(li);
		  })
		  document.querySelector('h3').innerText = `Classes: ${data.classes.map(spellClass => spellClass.name).join(', ')}`;
		// document.querySelector('h4').innerText = data.subclasses.map(subclass => subclass.name).join(', ');
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

