"use strict";

const checkBox = document.querySelector("nav input[type=checkbox]");

const overflowTask = function () {
	const bodyEl = document.querySelector("body");
	const mainEl = document.querySelector("main");

	bodyEl.classList.toggle("overflow");
	mainEl.classList.toggle("blur");
};

checkBox.addEventListener("click", overflowTask);
