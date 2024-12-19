const navIconBtn = document.getElementById("nav-icon-btn");
const navInstructions = document.getElementById("nav-instruction");

navIconBtn.addEventListener("click", () => {
    const isNavVisible = navIconBtn.getAttribute("aria-expanded") === "true";
    navInstructions.style.display = isNavVisible ? "none" : "block";
});