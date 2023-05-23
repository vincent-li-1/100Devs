//Example fetch using pokemonapi.co
if (!localStorage.getItem('deck')) {
	fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
	.then(res => res.json())
	.then(data => localStorage.setItem('deck', data.deck_id))
	.catch(err => console.log(`Error: ${err}`));
}

if (!localStorage.getItem('player1Score')) {
	localStorage.setItem('player1Score', 0);
	localStorage.setItem('player2Score', 0);
}

document.querySelector('#p1Score').innerText = `Score: ${localStorage.getItem('player1Score')}`;
document.querySelector('#p2Score').innerText = `Score: ${localStorage.getItem('player2Score')}`;

document.querySelector('#deal').addEventListener('click', playGame);
document.querySelector('#reset').addEventListener('click', reset);

function playGame(){
	const deck = localStorage.getItem('deck');
	const url = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`;
  	fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
		checkWinner(data.cards[0], data.cards[1], data.remaining);
		if (data.remaining < 2) {
			declareGameWinner();
		}
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function reset() {
	fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
		.then(res => res.json())
		.then(data => localStorage.setItem('deck', data.deck_id))
		.catch(err => console.log(`Error: ${err}`));
	
	localStorage.setItem('player1Score', 0);
	localStorage.setItem('player2Score', 0);

	document.querySelector('#p1Score').innerText = `Score: ${localStorage.getItem('player1Score')}`;
	document.querySelector('#p2Score').innerText = `Score: ${localStorage.getItem('player2Score')}`;
	document.querySelector('#gameOver').innerText = '';
	document.querySelector('#player1').src = '';
	document.querySelector('#player2').src = '';
}

function checkWinner(card1, card2, remaining, stake = 2) {
	document.querySelector('#player1').src = card1.image;
	document.querySelector('#player2').src = card2.image;
	if (getValue(card1) > getValue(card2)) {
		localStorage.setItem('player1Score', Number(localStorage.getItem('player1Score')) + stake);
		document.querySelector('#p1Score').innerText = `Score: ${localStorage.getItem('player1Score')}`;
	}
	else if (getValue(card1) < getValue(card2)) {
		localStorage.setItem('player2Score', Number(localStorage.getItem('player2Score')) + stake);
		document.querySelector('#p2Score').innerText = `Score: ${localStorage.getItem('player2Score')}`;
	}
	else {
		goToWar(stake, remaining);
	}
}

function declareGameWinner() {
	let winner;
	if (Number(localStorage.getItem('player1Score')) > Number(localStorage.getItem('player2Score'))) {
		winner = 'Player 1 wins!';
	}
	else if (Number(localStorage.getItem('player2Score')) > Number(localStorage.getItem('player1Score'))) {
		winner = 'Player 2 wins!';
	}
	else {
		winner = 'It\'s a tie!';
	}
	document.querySelector('#gameOver').innerText = winner;
}

function getValue(card) {
	switch (card.value) {
		case 'ACE': 
			return 14;
		case 'KING': 
			return 13;
		case 'QUEEN':
			return 12;
		case 'JACK':
			return 11;
		default:
			return Number(card.value);
	}
}

function goToWar(stake, remaining) {
	if (remaining < 8) {
		declareGameWinner();
		return;
	}
	alert('Going to war!');
	fetch(`https://deckofcardsapi.com/api/deck/${localStorage.getItem('deck')}/draw/?count=6`)
      .catch(err => {
          console.log(`error ${err}`)
      });
	fetch(`https://deckofcardsapi.com/api/deck/${localStorage.getItem('deck')}/draw/?count=2`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
		checkWinner(data.cards[0], data.cards[1], data.remaining, stake += 8);
		if (data.remaining < 2) {
			declareGameWinner();
		}
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
