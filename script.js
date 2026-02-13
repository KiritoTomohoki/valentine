const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gifContainer = document.getElementById("gifContainer");
const container = document.querySelector(".container");
const heartsContainer = document.querySelector(".hearts");

let yesScale = 1;

const phrases = [
    "Ну пжшка 🥺",
    "Ты уверена? 😳",
    "Подумай ещё раз 😭",
    "Я старался...",
    "Другого выбора не будет 😏",
    "Это судьба 💘",
    "Я буду грустить 😢",
    "Ну пожалуйста 💖",
    "Скажи дааа",
    "Ты разобьёшь мне сердце 💔",
    "Попробуй ещё раз",
    "Я не принимаю нет 😄"
];

function getSafeViewportHeight() {
    return window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
}

function moveButton() {

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const screenWidth = window.innerWidth;
    const screenHeight = getSafeViewportHeight();

    const padding = 20;

    const maxX = screenWidth - btnWidth - padding;
    const maxY = screenHeight - btnHeight - padding;

    const minX = padding;
    const minY = padding;

    const randomX = Math.max(minX, Math.random() * maxX);
    const randomY = Math.max(minY, Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    noBtn.innerText = randomPhrase;

    yesScale += 0.07;
    yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

yesBtn.addEventListener("click", () => {
    container.classList.add("hidden");
    gifContainer.classList.remove("hidden");
    explodeHearts();
});

/* 💥 Взрыв сердечек */
function explodeHearts() {
    const colors = ["#ff4b7d", "#ff85a2", "#ffb6c1", "#ff69b4"];

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("pop-heart");
        heart.innerText = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

/* ❤️ Падающие сердечки */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const colors = ["#ff4b7d", "#ff85a2", "#ffb6c1", "#ff69b4"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
