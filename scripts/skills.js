"use strict";

const sections = document.querySelectorAll(".load");
const langContainer = document.querySelector("#about--language-container");

const obsCallback = function (enteries, observer) {
	const [entry] = enteries;

	if (!entry.isIntersecting) return;
	entry.target.src = entry.target.dataset.src;
	entry.target.classList.remove("lazy-loading");

	observer.unobserve(entry.target);
};

const interObs = new IntersectionObserver(obsCallback, {
	root: null,
	threshold: 0,
	rootMargin: "100px",
});

sections.forEach((section) => {
	const img = section.querySelector("img");
	img.classList.add("lazy-loading");
	interObs.observe(img);
});

const obsCallback2 = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;
	const figure = entry.target.children[0];
	figure.querySelectorAll("img").forEach((val) => {
		val.src = val.dataset.src;
	});
	observer.unobserve(entry.target);
};
const interObs2 = new IntersectionObserver(obsCallback2, {
	root: null,
	threshold: 0,
	rootMargin: "100px",
});
interObs2.observe(langContainer);
