
function showMessage() {

    document.getElementById("message").innerHTML =
        "🎉 Many More Happy Returns of the Day! ❤️🎂";

    createConfetti();
}

function createConfetti() {

    const emojis = ["🎉", "❤️", "🎈", "✨", "🎊"];

    for (let i = 0; i < 50; i++) {

        let confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
