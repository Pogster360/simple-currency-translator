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

    // create a list for inputs
    const inputs = [copperInput, silverInput, goldInput, platinumInput];

    // create a function to determine if value is applicable
    const parseInput = (input) => {

        // variable to turn string into number
        const parsedValue = parseInt(input.value);
    
        // uses original variable to determine if value is null to return the value as 0
        if (input.value.trim() === "") {
            return 0;  
        }
        // checking if the value is a number
        else if (isNaN(parsedValue)) {
            alert("The value must be a number");
            throw new Error("not a number");
        } else {
            return parsedValue;
        }
    };
    
    // if (isNaN(parsedValue)) {
    //     alert("The value must be a number");
    //     throw new Error("not a number");
    // } else if (parsedValue.trim() === "") {
    //     return 0;
    // }
    //     return parsedValue;
    // };

    let copperValue, silverValue, goldValue, platinumValue;

    try {
        const copperValue = parseInput(copperInput);
        const silverValue = parseInput(silverInput);
        const goldValue = parseInput(goldInput);
        const platinumValue = parseInput(platinumInput);
    } catch (error) {
        console.log(error);
    }


    // old way to parse values
    var pToCp = parseInt(platinumValue) * 1000;
    var gToCp = parseInt(goldValue) * 100;
    var sToCp = parseInt(silverValue) * 10;
    var cToCp = parseInt(copperValue);
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

