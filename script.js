// ===============================
// LOADING SCREEN
// ===============================
const loader = document.getElementById("loader");
const progress = document.getElementById("progress");
const loadingText = document.getElementById("loadingText");
let load = 0;

let loading = setInterval(() => {
    load += 5;
    progress.style.width = load + "%";
    loadingText.innerHTML = load + "%";

    if (load >= 100) {
        clearInterval(loading);
        setTimeout(() => {
            loader.classList.add("hide");
            setTimeout(() => {
                loader.style.display = "none";
            }, 1500);
        }, 700);
    }
}, 100);

// ===============================
// INTRO SCREEN
// ===============================
const intro = document.getElementById("intro");
const introText = document.getElementById("introText");
const enter = document.getElementById("enter");

const introMessage = "Today is a very special day... ✨\nBecause someone amazing was born. 🥳\nHappy Birthday mine baby girl ❤️";
let introIndex = 0;

function typeIntro() {
    if (introIndex < introMessage.length) {
        introText.innerHTML = introMessage.substring(0, introIndex).replace(/\n/g, "<br>");
        introIndex++;
        setTimeout(typeIntro, 70);
    }
}
typeIntro();

const countdown = document.getElementById("countdown");
const countNumber = document.getElementById("countNumber");
const birthdayReveal = document.getElementById("birthdayReveal");

enter.onclick = () => {
    enter.disabled = true;
    introText.classList.add("hidden");
    enter.classList.add("hidden");
    countdown.classList.remove("hidden");

    let count = 3;
    function countdownStart() {
        countNumber.innerHTML = count;
        countNumber.style.animation = "none";
        setTimeout(() => {
            countNumber.style.animation = "countPop 1s";
        }, 50);

        if (count === 1) {
            setTimeout(() => {
                countdown.classList.add("hidden");
                birthdayReveal.classList.remove("hidden");
                sparkles.classList.remove("hidden");
                intro.classList.add("flash");
                fireworks();
                setTimeout(() => {
                    intro.classList.add("hide");
                    setTimeout(() => {
                        intro.style.display = "none";
                    }, 1500);
                }, 3000);
            }, 1000);
            return;
        }
        count--;
        setTimeout(countdownStart, 1000);
    }
    countdownStart();
};

// ===============================
// WELCOME → GIFT
// ===============================
const openBtn = document.getElementById("open");
const welcome = document.querySelector(".welcome");
const giftSection = document.querySelector(".gift-section");

openBtn.onclick = () => {
    welcome.classList.add("hidden");
    giftSection.classList.remove("hidden");
};

// ===============================
// OPEN GIFT
// ===============================

const giftHeader =
document.getElementById("giftHeader");

const giftBox =
document.getElementById("giftBox");

const openGift =
document.getElementById("openGift");

const giftMessage =
document.getElementById("giftMessage");

const continueBirthday =
document.getElementById("continueBirthday");

openGift.onclick = ()=>{

    openGift.disabled = true;
    giftBox.classList.add("open"); // Triggers the opening animation

    // Wait 1 second for the animation to play, then hide the box, button, and header!
    setTimeout(()=>{

        // HIDE the top header, the gift box, and the open button completely
        giftHeader.classList.add("hidden");
        giftBox.classList.add("hidden");
        openGift.classList.add("hidden");

        // SHOW only the surprise message and continue button
        giftMessage.classList.remove("hidden");
        continueBirthday.classList.remove("hidden");
        
        fireworks();

    }, 1000);

    openGift.innerHTML =
    "Gift Opened ❤️";

};
continueBirthday.onclick = () => {
    giftSection.classList.add("hidden");
    document.querySelector(".birthday").classList.remove("hidden");
};

// ===============================
// CANDLES & CHRONOLOGY SYSTEM (WITH 5s BEAUTIFUL DELAYS)
// ===============================

const blow = document.getElementById("blow");
const candles = document.getElementById("candles");
const candleArea = document.getElementById("candleArea");
const makeWishBtn = document.getElementById("makeWishBtn");
const wishMessage = document.getElementById("wishMessage");
const cakeTimeBtn = document.getElementById("cakeTimeBtn");
const cakeRevealArea = document.getElementById("cakeRevealArea");
const cutCake = document.getElementById("cutCake");
const cakeCut = document.getElementById("cakeCut");
const wish = document.getElementById("wish");

// STEP 1: Blow the 21 Candles
blow.onclick = () => {
    if (blow.disabled) return;

    // Show blowing smoke and fire off initial celebration
    candles.innerHTML = "💨";
    fireworks();
    
    blow.disabled = true;
    blow.classList.add("hidden"); // Hide blow button instantly

    // Trigger continuous fireworks during the 5-second wait
    let fireworkInterval = setInterval(fireworks, 1200);

    // Wait exactly 5 seconds before removing candles and showing "Make a Wish"
    setTimeout(() => {
        clearInterval(fireworkInterval);
        candleArea.classList.add("hidden"); // The paragraph and 21 candles completely disappear!
        makeWishBtn.classList.remove("hidden"); // Show "Make a Wish" button
        fireworks();
    }, 2000);
};

// STEP 2: Make a Wish
makeWishBtn.onclick = () => {
    makeWishBtn.classList.add("hidden"); // Hide the wish button instantly
    fireworks();

    let fireworkInterval = setInterval(fireworks, 1200);

    // Wait 5 seconds for her to close her eyes and make her secret wish
    setTimeout(() => {
        clearInterval(fireworkInterval);
        wishMessage.classList.remove("hidden"); // Reveal "May your wish come true ❤️" and "Cake Time!"
        fireworks();
    }, 2000);
};

// STEP 3: Click "Cake Time!"
cakeTimeBtn.onclick = () => {
    wishMessage.classList.add("hidden"); // Clear previous message out of the way
    fireworks();

    let fireworkInterval = setInterval(fireworks, 1200);

    // Wait 5 seconds while celebrating, then reveal the uncut birthday cake!
    setTimeout(() => {
        clearInterval(fireworkInterval);
        cakeRevealArea.classList.remove("hidden"); // Reveal the uncut cake 🎂
        fireworks();
    }, 2000);
};

// STEP 4: Cut the Cake
cutCake.onclick = () => {
    cakeRevealArea.classList.add("hidden"); // Hide the uncut cake area instantly
    fireworks();

    let fireworkInterval = setInterval(fireworks, 1200);

    // Wait 5 seconds for the "slicing" excitement before showing the beautiful pastry slice!
    setTimeout(() => {
        clearInterval(fireworkInterval);
        cakeCut.classList.remove("hidden"); // Show sliced pastry 🍰 & letter navigation
        wish.classList.remove("hidden"); // Show "Read Birthday Letter 💌"
        fireworks();
    }, 2000);
};

// ===============================
// BIRTHDAY LETTER
// ===============================
wish.onclick = () => {
    document.querySelector(".birthday").classList.add("hidden");
    document.querySelector(".letter").classList.remove("hidden");
};

// ===============================
// MEMORY GALLERY & BOOK
// ===============================
document.getElementById("memories").onclick = () => {
    document.querySelector(".letter").classList.add("hidden");
    document.querySelector(".gallery").classList.remove("hidden");
};

const pages = document.querySelectorAll(".page");
const nextPage = document.getElementById("nextPage");
const timelineBtn = document.getElementById("timeline");
let currentPage = 0;

if (nextPage) {
    nextPage.onclick = changePage;

    function changePage() {
        pages[currentPage].classList.remove("active");
        currentPage++;
        if (currentPage >= pages.length) {
            currentPage = 0;
        }
        pages[currentPage].classList.add("active");

        if (currentPage === pages.length - 1) {
            nextPage.classList.add("hidden");
            timelineBtn.classList.remove("hidden");
        } else {
            nextPage.classList.remove("hidden");
            timelineBtn.classList.add("hidden");
        }
    }

    let touchStartX = 0;
    document.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener("touchend", (e) => {
        let touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            changePage();
        }
    });
}

// ===============================
// TIMELINE
// ===============================
document.getElementById("timeline").onclick = () => {
    document.querySelector(".gallery").classList.add("hidden");
    document.querySelector(".story").classList.remove("hidden");
};

// ===============================
// FINAL SURPRISE
// ===============================
document.getElementById("finish").onclick = () => {
    document.querySelector(".story").classList.add("hidden");
    document.querySelector(".final").classList.remove("hidden");
    fireworks();
};

// ===============================
// SECRET MESSAGE
// ===============================
const secretHeart = document.getElementById("secretHeart");
const secretPopup = document.getElementById("secretPopup");
const closeSecret = document.getElementById("closeSecret");

secretHeart.onclick = () => {
    secretPopup.classList.remove("hidden");
    fireworks();
};

closeSecret.onclick = () => {
    secretPopup.classList.add("hidden");
};

// ===============================
// FIREWORKS EFFECT
// ===============================
function fireworks() {
    const symbols = ["🎉", "✨", "❤️", "🎈", "⭐"];
    for (let i = 0; i < 50; i++) {
        let item = document.createElement("span");
        item.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        item.style.position = "fixed";
        item.style.left = "50%";
        item.style.top = "50%";
        item.style.fontSize = "35px";
        item.style.zIndex = "9999";
        document.body.appendChild(item);

        setTimeout(() => {
            item.style.transition = "2s";
            item.style.transform = `translate(${Math.random() * 900 - 450}px, ${Math.random() * 900 - 450}px) rotate(360deg)`;
            item.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            item.remove();
        }, 2500);
    }
    
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#ff69b4', '#ff1493', '#ffc0cb', '#ffffff']
        });
    }
}

// ===============================
// MAGIC CURSOR
// ===============================
const magicContainer = document.getElementById("magic-container");
const magicSymbols = ["❤️", "💖", "✨", "🌸", "💕"];

function createMagic(x, y) {
    let star = document.createElement("div");
    star.className = "magic-star";
    star.innerHTML = magicSymbols[Math.floor(Math.random() * magicSymbols.length)];
    star.style.left = x + "px";
    star.style.top = y + "px";
    magicContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1000);
}

document.addEventListener("mousemove", (e) => {
    createMagic(e.clientX, e.clientY);
});

document.addEventListener("touchmove", (e) => {
    let touch = e.touches[0];
    createMagic(touch.clientX, touch.clientY);
});

document.addEventListener("click", (e) => {
    for (let i = 0; i < 15; i++) {
        let burst = document.createElement("div");
        burst.className = "magic-burst";
        burst.innerHTML = "✨";
        burst.style.left = e.clientX + "px";
        burst.style.top = e.clientY + "px";
        burst.style.setProperty("--x", (Math.random() * 200 - 100) + "px");
        burst.style.setProperty("--y", (Math.random() * 200 - 100) + "px");
        magicContainer.appendChild(burst);

        setTimeout(() => {
            burst.remove();
        }, 1200);
    }
});

// ===============================
// MUSIC SYSTEM
// ===============================
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
let musicPlaying = false;

function fadeInMusic() {
    music.volume = 0;
    music.play().then(() => {
        let volume = 0;
        let fade = setInterval(() => {
            volume += 0.05;
            music.volume = volume;
            if (volume >= 1) {
                clearInterval(fade);
            }
        }, 200);
    }).catch(() => {
        console.log("Browser blocked autoplay");
    });
}

enter.addEventListener("click", () => {
    setTimeout(() => {
        fadeInMusic();
    }, 2000);
});

musicBtn.onclick = () => {
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        musicBtn.innerHTML = "🔇";
        musicBtn.classList.remove("playing");
    } else {
        music.play();
        musicPlaying = true;
        musicBtn.innerHTML = "🎵";
        musicBtn.classList.add("playing");
    }
};

// ===============================
// FINAL CINEMATIC MESSAGE
// ===============================
const finalMessage = document.getElementById("finalMessage");
const endingText = "Every memory on this website is my favorite because you're in it.🌸❤️🎀\n\n Here's to making many more. ❤️";
let endIndex = 0;

function typeEnding() {
    if (endIndex < endingText.length) {
        finalMessage.innerHTML += endingText[endIndex].replace("\n", "<br>");
        endIndex++;
        setTimeout(typeEnding, 80);
    }
}

const finishButton = document.getElementById("finish");
finishButton.onclick = () => {
    document.querySelector(".story").classList.add("hidden");
    document.querySelector(".final").classList.remove("hidden");
    fireworks();
    setTimeout(() => {
        typeEnding();
    }, 1000);
};
