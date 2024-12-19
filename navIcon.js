const navIconBtn = document.getElementById("nav-icon-btn");//Navbar icon

const navInstructions = document.getElementById("nav-instruction");//Instructions paragraph

//On nav icon clicked fire an event
navIconBtn.addEventListener("click", () => {

    // Get that nav is expanded or not
    const isNavVisible = navIconBtn.getAttribute("aria-expanded") === "true";
    
    // If the navbar is visible hide the instructions regarding to toggle navbar icon 
    navInstructions.style.display = isNavVisible ? "none" : "block";
    
});