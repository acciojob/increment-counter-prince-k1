//your JS code here. If required.
let counter = document.getElementById('counter');
let btn = document.getElementById('incrementBtn');
let count = 0;
function increase() {
	count++;
	counter.innerText = count;
}

