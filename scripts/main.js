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

const currentTotal = document.getElementById("this");

// function results() {
//     copperResult.textContent = copperInput.value;
//     silverResult.textContent = silverInput.value;
//     goldResult.textContent = goldInput.value;
//     platinumResult.textContent = platinumInput.value;
// }

copperResult.textContent = "0";
silverResult.textContent = "0";
goldResult.textContent = "0";
platinumResult.textContent = "0";
currentTotal.textContent = "0";

function results() {
    var pToCp = parseInt(platinumInput.value) * 1000;
    var gToCp = parseInt(goldInput.value) * 100;
    var sToCp = parseInt(silverInput.value) * 10;
    var cToCp = parseInt(copperInput.value);
    var total = cToCp + sToCp + gToCp + pToCp;

    // add the currentTotal amount after turning into an int
    total += parseInt(currentTotal.textContent)

    // display platinum amount
    var platinumAmount = total / 1000;
    platinumResult.textContent = Math.floor(platinumAmount);

    // display gold amount
    var goldAmount = (total / 100) % 10;
    goldResult.textContent = Math.floor(goldAmount);

    // display silver amount
    var silverAmount = (total / 10) % 10;
    silverResult.textContent = Math.floor(silverAmount);

    // display copper amount
    var copperAmount = total % 10;
    copperResult.textContent = Math.floor(copperAmount);

    currentTotal.textContent = total;
}

// simple function to test inputs elements
calculate.addEventListener("click", results);

