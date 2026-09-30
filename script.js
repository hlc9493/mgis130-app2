// DATA layer: Provides the list of names available to be picked.
function getNamesData() {
    return [
        "Alice",
        "Bob",
        "Charlie",
        "Diana",
        "Ethan",
        "Fiona",
        "George",
        "Hannah",
        "Ian",
        "Julia"
    ];
}

// LOGIC layer: Selects a random name ensuring it is never the same as the previous one.
let lastPickedIndex = -1;
function getNextRandomName(namesList) {
    if (!namesList || namesList.length === 0) return "";
    if (namesList.length === 1) return namesList[0];

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * namesList.length);
    } while (randomIndex === lastPickedIndex);

    lastPickedIndex = randomIndex;
    return namesList[randomIndex];
}

// DISPLAY layer: Updates the user interface with the selected name.
function renderName(nameString) {
    const nameDisplayElement = document.getElementById("name-display");
    if (nameDisplayElement) {
        nameDisplayElement.textContent = nameString;
    }
}

// Initialization and Event Handling
document.addEventListener("DOMContentLoaded", () => {
    const names = getNamesData();
    const pickButton = document.getElementById("pick-btn");

    // Pick an initial random name on load
    const initialName = getNextRandomName(names);
    renderName(initialName);

    // Pick a new name on button click
    pickButton.addEventListener("click", () => {
        const nextName = getNextRandomName(names);
        renderName(nextName);
    });
});
