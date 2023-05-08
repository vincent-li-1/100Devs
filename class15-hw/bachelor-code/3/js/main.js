// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	}else{
// 		alert("Wrong!");
// 	}
// }

const contestants = document.querySelectorAll('.contestant');

Array.from(contestants).forEach(ele => ele.addEventListener('click', checkForRose));

function checkForRose(click) {
	if (click.target.classList.contains('rose')) {
		document.querySelector('#nikki').classList.toggle('hidden');
		document.querySelector('body').style.background = 'green';
	}
	else {
		alert("Wrong!");
		document.querySelector('body').style.background = 'white';
	}
}