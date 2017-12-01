
// var ik = document.querySelector('.ik');

document.getElementById('button').addEventListener('click', () => {
	if (screenfull.enabled) {
		screenfull.request(document.querySelector("img"));

	} else {
		// Ignore or do something else
	}
});
