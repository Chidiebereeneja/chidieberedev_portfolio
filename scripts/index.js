"use strict";

const divElement = document.querySelector("div");
const textDisplay = `Welcome! I am glad that you make out time, to take a look at my portfolio, Explore my frontend journey!`;

function typeWriter(element, text, i = 0) {
	if (element.textContent === i) {
		element.textContent = "";
	}
	element.textContent += text[i];
	if (i === text.length - 1) {
		return;
	}

	setTimeout(() => typeWriter(element, text, i + 1), 70);
}
typeWriter(divElement, textDisplay);

function styleElement() {
	divElement.classList.add("styleAnimation");

	setTimeout(function () {
		window.location.replace("pages/homePage.html");
	}, 15000);
}
styleElement();

export { typeWriter };
