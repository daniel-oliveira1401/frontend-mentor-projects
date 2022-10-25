let tipPerPerson = document.getElementById("tip-per-person");
let totalPerPerson = document.getElementById("total-per-person");

// inputs
let inputBill = document.getElementById("bill-amount");
let inputPeople = document.getElementById("num-people");

let btnReset = document.getElementById("btn-reset");

let maxMoney = "000,000,000,000.00";

function calcTip(value, percent, people) {
	percent = percent / 100;
	let tipValue = (value * percent) / people;

	tipValue = tipValue.toFixed(2);

	let totalValue = (value * (1 + percent)) / people;

	totalValue = totalValue.toFixed(2);

	$(tipPerPerson).masked(tipValue);

	tipPerPerson.innerHTML = `${$(tipPerPerson).masked(tipValue)}`;

	totalPerPerson.innerHTML = `${$(totalPerPerson).masked(totalValue)}`;

	btnReset.disabled = false;
}

$("#bill-amount").mask(maxMoney, {
	reverse: true,
	onChange: () => {
		let bill = $(inputBill).cleanVal();

		if (bill <= 0) {
			$("#bill-amount").parents(".input-group").addClass("invalid");
			return;
		} else {
			$("#bill-amount").parents(".input-group").removeClass("invalid");
		}

		bill = bill / 100;

		let people = inputPeople.value || 1;

		let isCustom = $(".tip-value.selected").attr("data-custom");
		let percent;
		if (isCustom) {
			percent = $("#custom-percent").val();
		} else {
			percent = $(".tip-value.selected").attr("data-percent") || 0;
		}

		calcTip(bill, percent, people);
	},
});
$(tipPerPerson).mask(maxMoney, { reverse: true });
$(totalPerPerson).mask(maxMoney, { reverse: true });

$(".tip-value").click((e) => {
	e.currentTarget.classList.toggle("selected");

	document.querySelectorAll(".tip-value").forEach((tip) => {
		if (tip != e.currentTarget) tip.classList.remove("selected");
	});

	let percent;

	let isCustom = $(e.currentTarget).attr("data-custom");
	if (isCustom) {
		percent = $("#custom-percent").val() || 0;
	} else {
		percent = $(e.currentTarget).attr("data-percent");
	}

	let people = inputPeople.value || 1;
	let bill = $(inputBill).cleanVal() || 0;
	bill = bill >= 100 ? bill / 100 : bill;

	calcTip(bill, percent, people);
});

$(inputPeople).on("input", () => {
	let bill = $(inputBill).cleanVal();
	bill = bill >= 100 ? bill / 100 : bill;

	let people = inputPeople.value || 1;

	if (people <= 0) {
		$(inputPeople).parents(".input-group").addClass("invalid");
	} else {
		$(inputPeople).parents(".input-group").removeClass("invalid");
	}

	let percent = $(".tip-value.selected").attr("data-percent") || 0;

	calcTip(bill, percent, people);
});

btnReset.addEventListener("click", () => {
	inputBill.value = "";
	inputPeople.value = "";
	document.querySelectorAll(".tip-value").forEach((tipElm) => {
		tipElm.classList.remove("selected");
	});

	tipPerPerson.innerHTML = `${$(tipPerPerson).masked("000")}`;

	totalPerPerson.innerHTML = `${$(totalPerPerson).masked("000")}`;

	btnReset.disabled = true;
});

$("#custom-percent").on("input", (e) => {
	percent = $("#custom-percent").val() || 0;

	if (percent < 0) {
		$(e.currentTarget).parents(".input-group").addClass("invalid");
		return;
	} else {
		$(e.currentTarget).parents(".input-group").removeClass("invalid");
	}

	let people = inputPeople.value || 1;
	let bill = $(inputBill).cleanVal() || 0;
	bill = bill >= 100 ? bill / 100 : bill;

	calcTip(bill, percent, people);
});

$("#custom-percent").on("blur", (e) => {
	$(e.currentTarget).parents(".input-group").removeClass("invalid");
});

let areia = [1, 2, 3, "quatro", true, { hello: "true" }];
