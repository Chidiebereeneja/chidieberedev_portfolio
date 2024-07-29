"use strict";

const addressBtn = document.querySelector(".my--address--btn");
const showAddressCont = document.querySelector(".test--typeWriter");

const fullAddress = `Achara okutu, 
	Nsukka Local Government, 
	Enugu State, Nigeria.`;

let check = false;

function typeWriter(element, text, i = 0) {
	if (element.textContent === i) {
		element.textContent = "";
	}

	element.textContent += text[i];

	if (i === text.length - 1) {
		return;
	}

	setTimeout(() => typeWriter(element, text, i + 1), 50);
}

function renderAddress() {
	if (!check) {
		addressBtn.setAttribute("disabled", "");
		typeWriter(showAddressCont, fullAddress);
		check = true;
	} else {
		showAddressCont.textContent = "";
		check = false;
	}
}

addressBtn.addEventListener("click", renderAddress);

export { typeWriter };
