// =============================
// 1. Smooth Scroll
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


// =============================
// 2. Scroll Fade In Animation
// =============================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});


// =============================
// 3. Typewriter Effect
// =============================
const nameText = "MD Himel Ahamed Neloy";
let i = 0;

function typeWriter() {
    if (i < nameText.length) {
        document.getElementById("typewriter").innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

window.onload = typeWriter;


// =============================
// 4. Simple Image Click Zoom
// =============================
const images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("click", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "0.3s";

        setTimeout(() => {
            img.style.transform = "scale(1)";
        }, 300);
    });
});
