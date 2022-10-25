let adviceBtn = document.querySelector(".advice__btn");

adviceBtn.addEventListener("click", () => {
	spinner.classList.add("show");
	generateAdvice();
});

let adviceNumber = document.querySelector(".advice__number");
let adviceText = document.querySelector(".advice__text .text");

let spinner = document.querySelector(".spinner");

generateAdvice();

async function getAdvice() {
	let data = await fetch("https://api.adviceslip.com/advice", {
		cache: "no-store"
	});

	data = await data.json();

	return data;
}

async function generateAdvice() {
	adviceText.textContent = "";
	adviceNumber.textContent = "";

	let data = await getAdvice();

	spinner.classList.remove("show");

	adviceNumber.textContent = data.slip.id;
	adviceText.textContent = data.slip.advice;
}
