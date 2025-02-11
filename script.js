document.addEventListener("DOMContentLoaded", function () {
    const clues = [
        "Ameerah Dua has 14 years of experience.",
        "The devoted Muslim woman enjoys mangoes.",
        "The woman who uses Instagram is unmarried but not a doctor.",
        "The YouTube user has 7 years of experience and is married.",
        "The woman with 10 years of experience loves apples.",
        "Ameerah Dua’s sister is a doctor, unmarried, and not on Clubhouse.",
        "The woman using Twitter enjoys bananas.",
        "The LinkedIn user is a software engineer.",
        "The devoted Muslim woman does not use Instagram or Twitter.",
        "The Clubhouse user has the most years of experience among the five women.",
        "The woman who loves grapes is engaged.",
        "The unmarried doctor is not the one using a matrimonial app.",
        "The married woman does not use Twitter.",
        "The woman who enjoys oranges is a teacher.",
        "The matrimonial app user is hunting for a groom and is not a doctor."
    ];

    const cluesList = document.getElementById("clues");
    clues.forEach(clue => {
        const li = document.createElement("li");
        li.textContent = clue;
        cluesList.appendChild(li);
    });
});

function checkAnswer() {
    const inputs = document.querySelectorAll("#puzzleTable input");
    let isFilled = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === "") isFilled = false;
    });

    if (!isFilled) {
        document.getElementById("result").textContent = "Please fill in all the fields!";
        return;
    }

    // Answer validation logic can be added here
    document.getElementById("result").textContent = "Your answer has been submitted!";
}
