// Template

let fortuneStr = [
    "Isn't air travel wonderful?  Breakfast in London, dinner in New York,\nluggage in Brazil.",
    "Imitation is the sincerest form of television.\n\t\t-- The New Mighty Mouse",
    "The disks are getting full; purge a file today.",
    "Postmen never die, they just lose their zip.",
    "Savage's Law of Expediency:\n\tYou want it bad, you'll get it bad.",
];

const newButton = document.querySelector("[data-button]");
const fortuneDisplay = document.querySelector("[data-fortune]");
const prevButton = document.querySelector("[data-bPrev]");

let count = -1;

function newFortuneDisplay() {
    if(count === fortuneStr.length - 1){
        count = -1;
    }
    count++;
    fortuneDisplay.textContent = fortuneStr[count];
}

function prevFortuneDisplay() {
    count--;
    if(count < 0){
        count = fortuneStr.length - 1;
    }
    fortuneDisplay.textContent = fortuneStr[count];}

newButton.addEventListener("click", newFortuneDisplay);
prevButton.addEventListener("click", prevFortuneDisplay);
