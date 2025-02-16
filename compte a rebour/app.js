//generation de bulles

for (let i = 0; i < 30; i++) {
                let bubble = document.createElement("span");
                let size = Math.random() * 60 + 10; // Taille entre 10px et 70px
                let position = Math.random() * 100; // Position horizontale aléatoire

                bubble.style.width = size + "px";
                bubble.style.height = size + "px";
                bubble.style.left = position + "vw";
                bubble.style.animationDelay = Math.random() * 5 + "s"; // Délai aléatoire

                document.querySelector(".bubbles").appendChild(bubble);
}
            

//compteur a rebour

 let countdownInterval;
        let targetTime;

        function startCountdown() {
            const hours = parseInt(document.getElementById("inputHours").value) || 0;
            const minutes = parseInt(document.getElementById("inputMinutes").value) || 0;
            const seconds = parseInt(document.getElementById("inputSeconds").value) || 0;

            if (hours === 0 && minutes === 0 && seconds === 0) {
                alert("Veuillez entrer un temps valide !");
                return;
            }

            targetTime = new Date().getTime() + (hours * 3600 + minutes * 60 + seconds) * 1000;

            if (countdownInterval) clearInterval(countdownInterval);
            countdownInterval = setInterval(updateCountdown, 1000);
            updateCountdown();
        }

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = targetTime - now;

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                return;
            }

            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            updateTime("hours", hours);
            updateTime("minutes", minutes);
            updateTime("seconds", seconds);
        }

        function updateTime(id, value) {
            document.getElementById(id).innerHTML = value.toString().padStart(2, '0') + `<span>${id}</span>`;
        }

        function resetCountdown() {
            clearInterval(countdownInterval);
        }