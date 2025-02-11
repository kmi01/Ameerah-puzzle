document.addEventListener("DOMContentLoaded", function () {
    let timeElapsed = 0;
    let timerInterval;

    document.getElementById("startButton").addEventListener("click", function () {
        document.getElementById("start-container").style.display = "none";
        document.getElementById("game-content").style.display = "block";
        
        timerInterval = setInterval(function () {
            timeElapsed++;
            const minutes = Math.floor(timeElapsed / 60).toString().padStart(2, "0");
            const seconds = (timeElapsed % 60).toString().padStart(2, "0");
            document.getElementById("timer").textContent = "Time: " + minutes + ":" + seconds;
        }, 1000);
    });

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

    const answers = {
        experience: "14",
        fruit: "Mango",
        platform: "Clubhouse",
        career: "Software Engineer",
        status: "Unmarried"
    };

    const cluesList = document.getElementById("clues");
    clues.forEach((clue, index) => {
        const li = document.createElement("li");
        li.innerHTML = clue + " <span class='status'></span>";
        li.dataset.category = Object.keys(answers)[index % Object.keys(answers).length];
        cluesList.appendChild(li);
    });

    document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.addEventListener("change", function () {
            updateClueStatus();
        });
    });

    function updateClueStatus() {
        document.querySelectorAll("#clues li").forEach(li => {
            const category = li.dataset.category;
            const selectedValue = document.querySelector(`select[data-category='${category}']`).value;
            const correctValue = answers[category];

            if (selectedValue === correctValue) {
                li.querySelector(".status").innerHTML = " ✅";
                li.classList.add("correct");
            } else {
                li.querySelector(".status").innerHTML = " ❌";
                li.classList.add("incorrect");
            }
        });
    }
});
