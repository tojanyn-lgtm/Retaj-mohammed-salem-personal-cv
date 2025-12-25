// =========================
// Dark Mode Toggle
// =========================
const toggleButton = document.getElementById("toggleTheme");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// =========================
// Change background color for section
// =========================
const colorButtons = document.querySelectorAll(".colorButton");

colorButtons.forEach(button => {
    button.addEventListener("click", () => {
       
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        button.parentElement.style.backgroundColor = randomColor;
    });
});
