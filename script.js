
// Timer Logic
let timeElapsed = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        timeElapsed++;
        let minutes = Math.floor(timeElapsed / 60).toString().padStart(2, "0");
        let seconds = (timeElapsed % 60).toString().padStart(2, "0");
        document.getElementById("timer").textContent = "Time: " + minutes + ":" + seconds;
    }, 1000);
}

// Undo & Redo
let history = [];
let future = [];

document.querySelectorAll(".dropdown").forEach(dropdown => {
    dropdown.addEventListener("change", function () {
        history.push({
            element: this,
            previous: this.dataset.prev || "",
            current: this.value
        });
        future = [];
        this.dataset.prev = this.value;
    });
});

document.getElementById("undoButton").addEventListener("click", function () {
    if (history.length > 0) {
        let lastAction = history.pop();
        future.push(lastAction);
        lastAction.element.value = lastAction.previous;
    }
});

document.getElementById("redoButton").addEventListener("click", function () {
    if (future.length > 0) {
        let nextAction = future.pop();
        history.push(nextAction);
        nextAction.element.value = nextAction.current;
    }
});

// Submission Logic
document.getElementById("submitButton").addEventListener("click", function () {
    clearInterval(timerInterval);
    let minutes = Math.floor(timeElapsed / 60).toString().padStart(2, "0");
    let seconds = (timeElapsed % 60).toString().padStart(2, "0");
    let timeTaken = minutes + ":" + seconds;

    alert("🎉 Congratulations! You solved the puzzle in " + timeTaken + ".\n\n💍 You have been chosen by Ameerah Dua as their groom! 🎊");
});

// "How to Play" Popup
document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popup-overlay").style.display = "none";
    startTimer();
});
