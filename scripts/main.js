// create variables for each currency type

// grabbing the result input fields to display results later
const copperResult = document.getElementById("copperResult");
const silverResult = document.getElementById("silverResult");
const goldResult = document.getElementById("goldResult");
const platinumResult = document.getElementById("platinumResult");

// getting the input to calculate
const copperInput = document.getElementById("copperInput");
const silverInput = document.getElementById("silverInput");
const goldInput = document.getElementById("goldInput");
const platinumInput = document.getElementById("platinumInput");

// button variable for actionlistner
const calculate = document.getElementById("calculate");

function results() {
    copperResult.textContent = copperInput.value;
    silverResult.textContent = silverInput.value;
    goldResult.textContent = goldInput.value;
    platinumResult.textContent = platinumInput.value;
}

// simple function to test inputs elements
calculate.addEventListener("click", results);

