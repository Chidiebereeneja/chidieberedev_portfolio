"use strict";

const btnsCont = document.querySelector(".choose--me--header");

const chooseBtnContainer = document.querySelector(".choose--me--header");

function defaultDisplay() {
	const tabPElement = [...document.querySelector(".choose--me--text").children];
	const defaultText = document.getElementById("User-Centric");

	tabPElement.forEach((element, i) => {
		element.style.display = "none";
	});

	defaultText.style.display = "flex";
	defaultText.style.gap = "1rem";
}

function tabComponent() {
	chooseBtnContainer.addEventListener("click", function (e) {
		e.preventDefault();
		const textContainer = document.querySelectorAll(".choose--me--text div");

		if (e.target.hasAttribute("href")) {
			const check = [...e.target.parentElement.children];
			const targetAttr = e.target.getAttribute("href").slice(1);
			const targetContent = e.target.textContent;

			const test = check
				.filter((el) => el.textContent !== targetContent)
				.map((el) => el.getAttribute("href").slice(1))
				.map((element) => {
					const ele = document.getElementById(element);
					ele.style.display = "none";
				});

			check.map((el) => {
				el.classList.remove("active");
			});

			e.target.classList.add("active");
			const targetRender = e.target.getAttribute("href").slice(1);
			document.getElementById(targetRender).style.display = "flex";
		}
	});
}

export { tabComponent, defaultDisplay };
