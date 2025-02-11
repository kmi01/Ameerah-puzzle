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
    clues.forEach((clue, index) => {
        const li = document.createElement("li");
        li.textContent = clue;
        cluesList.appendChild(li);
    });

    document.getElementById("submitButton").addEventListener("click", function () {
        const verificationList = document.getElementById("verification");
        verificationList.innerHTML = "";
        
        const answers = {
            experience: "14",
            fruit: "Mango",
            platform: "Clubhouse",
            career: "Software Engineer",
            status: "Unmarried"
        };

        const userAnswers = document.querySelectorAll("tbody tr select");
        let index = 0;
        let allCorrect = true;

        for (let key in answers) {
            const userAnswer = userAnswers[index].value;
            const li = document.createElement("li");

            if (userAnswer === answers[key]) {
                li.innerHTML = key + ": " + userAnswer + " ✅";
                li.classList.add("correct");
            } else {
                li.innerHTML = key + ": " + userAnswer + " ❌ (Correct: " + answers[key] + ")";
                li.classList.add("incorrect");
                allCorrect = false;
            }

            verificationList.appendChild(li);
            index++;
        }

        document.getElementById("result").textContent = allCorrect ? "Congratulations! You solved the puzzle!" : "Try again!";
    });
});
