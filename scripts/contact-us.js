"use strict";

const btnsContainer = document.querySelectorAll("main li");

btnsContainer.forEach((li) => {
	li.addEventListener("click", (e) => {
		e.target.classList.contains("email--btn") &&
			socialMediaTask(
				"mailto:chidiebereravy@gmail.com?subject=Mail from your portfolio"
			);

		e.target.classList.contains("call--btn") &&
			socialMediaTask("tel:+2349159263373");

		e.target.classList.contains("whatsapp--btn") &&
			socialMediaTask("https://wa.me/+2349159263373");

		e.target.classList.contains("facebook--btn") &&
			socialMediaTask("https://www.facebook.com/chidiebereravy");

		e.target.classList.contains("instagram--btn") &&
			socialMediaTask("https://www.instagram.com/ravychididere_/");

		e.target.classList.contains("twitter--btn") &&
			socialMediaTask("https://twitter.com/Chidiebererayv");
	});
});

function socialMediaTask(str) {
	location.href = str;
}
