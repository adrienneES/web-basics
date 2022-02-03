const myHeading = document.querySelector('h1');
const heading = 'Gardening Place'
myHeading.textContent = heading;
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc == 'images/gardening.jpg') {
		myImage.setAttribute('src', 'images/garden-path.jpg')
	} else {
		myImage.setAttribute('src', 'images/gardening.jpg')
	}
}
myButton.onclick = function () {
	setUserName();
}
function setUserName() {
	let myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = myName + '\'s ' + heading;
}
if (localStorage.getItem('name') == null) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + '\'s ' + heading;
}
