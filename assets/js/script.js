// Navbar
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event triggered.");
    navbarToggle = document.querySelector(".navbar-toggle");
    navbarToggle.addEventListener("click", function () {
        console.log("Navbar toggle clicked.");
        navbarMenu = document.querySelector(".navbar-collapse");
        navbarMenu.classList.toggle("active");
    });
});
