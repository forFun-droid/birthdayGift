
let activeScreen = 1;
const totalScreens = 8;

// PAGE NAVIGATION

function nextScreen(number) {

    if (number < 1 || number > totalScreens) {
        return;
    }

    const current = document.getElementById(
        "screen" + activeScreen
    );

    const next = document.getElementById(
        "screen" + number
    );

    // Hide current screen
    current.classList.remove("active");

    // Update screen number
    activeScreen = number;

    // Show next screen
    next.classList.add("active");

    // Update progress dots
    document.querySelectorAll(".dot").forEach(
        (dot, index) => {
            dot.classList.toggle(
                "active",
                index === number - 1
            );
        }
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// FLOATING HEARTS

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.5
        ? "♡"
        : "♥";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create hearts at intervals
setInterval(createHeart, 850);


// FINAL BIRTHDAY CELEBRATION

function celebrate() {

    const colors = [
        "#f5b8c2",
        "#ffda9e",
        "#c9b4e5",
        "#b8d9c3",
        "#ffffff"
    ];

    for (let i = 0; i < 130; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.width = "9px";
        piece.style.height = "12px";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.borderRadius =
            Math.random() > 0.5 ? "50%" : "3px";

        document.body.appendChild(piece);

        const animation = piece.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 900}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 2500 + Math.random() * 2500,
                easing: "ease-in"
            }
        );

        animation.onfinish = () => {
            piece.remove();
        };
    }

}
