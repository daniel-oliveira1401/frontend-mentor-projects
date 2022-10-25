let chatContainer = document.querySelector(".chat-container");
let chatWrapper = document.querySelector(".chat-wrapper");

setTimeout(() => {
	$(chatContainer).animate({ scrollTop: chatContainer.scrollHeight }, 1200);
	// chatContainer.scrollTo(0, chatContainer.scrollHeight);
	chatInput.focus();
}, 500);

let chatInputForm = document.querySelector(".chat-app__input");
let chatInput = document.querySelector(".chat-app__input input");
let chatSubmitBtn = document.querySelector(".chat-app__input button");

function genOutMsg(text) {
	return `
  <div class="msg out">
		${text}
	</div>
  `;
}

const robotMsg = "Hello. Bip bop, I'm a Robot 🤖";

function genInMsg() {
	let template = `
  <div class="msg in">
		${robotMsg}
	</div>
  `;

	$(chatWrapper).append(template);
	chatContainer.scrollTo(0, chatContainer.scrollHeight);
}

chatInputForm.addEventListener("submit", (e) => {
	e.preventDefault();
});

chatSubmitBtn.addEventListener("click", () => {
	$(chatWrapper).append(genOutMsg(chatInput.value));
	chatInput.value = "";
	chatContainer.scrollTo(0, chatContainer.scrollHeight);
	updateObserver();
	setTimeout(() => {
		genInMsg();
		updateObserver();
	}, 300);
});

function toggleChatMsgFade(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("visible");
		} else {
			entry.target.classList.remove("visible");
		}
	});
}

function updateObserver() {
	let chatObserver = new IntersectionObserver(toggleChatMsgFade, {
		root: document.querySelector(".chat-container"),
		threshold: 0.15,
	});

	chatObserver.disconnect();

	let msgs = document.querySelectorAll(".msg");

	msgs.forEach((msg) => {
		chatObserver.observe(msg);
	});
}

updateObserver();
