document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
    document.getElementById("gameContainer").classList.remove("hidden");
    document.getElementById("startButton").style.display = "none"; // Hide start button after clicking
    startTimer();
    createHouses();
}

let timer = 0;
let interval;
function startTimer() {
    clearInterval(interval);
    timer = 0;
    document.getElementById("timer").innerText = `Time: ${timer}s`;
    interval = setInterval(() => {
        timer++;
        document.getElementById("timer").innerText = `Time: ${timer}s`;
    }, 1000);
}

const houseDetails = [
    { name: "Ameerah Dua", nationality: "Indian", drink: "Tea", pet: "Cat", app: "Matrimonial" },
    { name: "Urfi Javed", nationality: "Indian", drink: "Coffee", pet: "Dog", app: "Instagram" },
    { name: "Rakhi Sawant", nationality: "Indian", drink: "Juice", pet: "Bird", app: "Twitter" },
    { name: "Ranveer Allahbadia", nationality: "Indian", drink: "Protein Shake", pet: "None", app: "YouTube" },
    { name: "Laxmi Narayan Tripathi", nationality: "Indian", drink: "Water", pet: "Parrot", app: "Facebook" }
];

let history = [];
let redoStack = [];

function createHouses() {
    const container = document.getElementById("houses");
    container.innerHTML = "";
    houseDetails.forEach((person, index) => {
        const house = document.createElement("div");
        house.className = "house";
        house.innerHTML = `<h3>${person.name}</h3>`;
        house.appendChild(createDropdown("Nationality", ["Indian"], person.nationality, index));
        house.appendChild(createDropdown("Drink", ["Tea", "Coffee", "Juice", "Protein Shake", "Water"], person.drink, index));
        house.appendChild(createDropdown("Pet", ["Cat", "Dog", "Bird", "Parrot", "None"], person.pet, index));
        house.appendChild(createDropdown("App Used", ["Matrimonial", "Instagram", "Twitter", "YouTube", "Facebook"], person.app, index));
        container.appendChild(house);
    });
}

function createDropdown(category, options, correctAnswer, index) {
    const select = document.createElement("select");
    select.innerHTML = `<option value="">Select ${category}</option>`;
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });

    select.addEventListener("change", function() {
        history.push({ index, category, previousValue: select.dataset.selectedValue });
        redoStack = [];
        select.dataset.selectedValue = select.value;
        validateClue(select, correctAnswer);
    });

    return select;
}

function validateClue(select, correctAnswer) {
    if (select.value === correctAnswer) {
        select.style.border = "2px solid green";
    } else {
        select.style.border = "2px solid red";
    }
}

document.getElementById("submitButton").addEventListener("click", function() {
    const allCorrect = document.querySelectorAll("select").length === document.querySelectorAll("select[style='border: 2px solid green;']").length;
    if (allCorrect) {
        clearInterval(interval); // Stop the timer on success
        document.getElementById("resultMessage").innerText = "You have been chosen by Ameerah Dua as their groom!";
    } else {
        document.getElementById("resultMessage").innerText = "Incorrect choices! Try again.";
    }
});

document.getElementById("undoButton").addEventListener("click", function() {
    if (history.length > 0) {
        const lastChange = history.pop();
        redoStack.push(lastChange);
        const selectElements = document.querySelectorAll("select");
        selectElements[lastChange.index].value = lastChange.previousValue || "";
        validateClue(selectElements[lastChange.index], houseDetails[lastChange.index][lastChange.category.toLowerCase()]);
    }
});

document.getElementById("redoButton").addEventListener("click", function() {
    if (redoStack.length > 0) {
        const lastUndo = redoStack.pop();
        history.push(lastUndo);
        const selectElements = document.querySelectorAll("select");
        selectElements[lastUndo.index].value = lastUndo.previousValue || "";
        validateClue(selectElements[lastUndo.index], houseDetails[lastUndo.index][lastUndo.category.toLowerCase()]);
    }
});
