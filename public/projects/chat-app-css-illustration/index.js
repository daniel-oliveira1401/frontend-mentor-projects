let chatIframe = document.querySelector("iframe.app");

let spinner = document.querySelector(".spinner");

chatIframe.addEventListener("load", () => {
	console.log("loaded iframe");

	spinner.style.display = "none";
	chatIframe.style.display = "block";
});
