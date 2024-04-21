const form = document.querySelector('#survey-form');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const age = document.querySelector('#age').value;
	const question1 = document.querySelector('#question1').value;
	const question2 = document.querySelector('#question2').value;
	const question3 = document.querySelector('#
