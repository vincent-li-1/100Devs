const andi = document.querySelector('#andi').classList;
const claire = document.querySelector('#claire').classList;
const sharleen = document.querySelector('#sharleen').classList;

document.querySelector('#andiNext').addEventListener('click', andiNext);
document.querySelector('#claireNext').addEventListener('click', claireNext);
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext);
document.querySelector('h1').addEventListener('click', showAll);

function andiNext() {
	andi.toggle('hidden');
	claire.add('hidden');
	sharleen.add('hidden');
}

function claireNext() {
	andi.add('hidden');
	claire.toggle('hidden');
	sharleen.add('hidden');
}

function sharleenNext() {
	andi.add('hidden');
	claire.add('hidden');
	sharleen.toggle('hidden');
}

function showAll() {
	andi.add('hidden');
	claire.add('hidden');
	sharleen.add('hidden');
	andi.toggle('hidden');
	claire.toggle('hidden');
	sharleen.toggle('hidden');
}