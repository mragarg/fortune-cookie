// Template

let fortuneStr = [
    "Isn't air travel wonderful?  Breakfast in London, dinner in New York,\nluggage in Brazil.",
    "Imitation is the sincerest form of television.\\n\t\t-- The New Mighty Mouse",
    "The disks are getting full; purge a file today.",
    "Postmen never die, they just lose their zip.",
    "Savage's Law of Expediency:\n\tYou want it bad, you'll get it bad.",
];

const newButton = document.querySelector("[data-button]");
const fortuneDisplay = document.querySelector("[data-fortune]");

let count = 0;

function newFortuneDisplay() {
    let newFortune;
    console.log("click");

    // Pulls string from array
    newFortune = fortuneStr[count];
    count++;

    // if count reaches last string, start over
    if(count === fortuneStr.length){
        count = 0;
    }

    // New string goes to display
    fortuneDisplay.textContent = newFortune;
}

newButton.addEventListener("click", newFortuneDisplay);