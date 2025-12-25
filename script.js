// =========================
// Step 1: Dark Mode Toggle
// =========================
const toggleButton = document.getElementById("toggleTheme");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// =========================
// Step 2: Fade-in sections on scroll
// =========================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", checkSections);

function checkSections() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });
}
