function toggleMenu() {
    const navLinks = document.getElementById("nav-links");

    if (navLinks.classList == "" || navLinks.classList == "hide") {
        navLinks.classList.remove("hide");
        navLinks.classList.add("show");
    } else {
        navLinks.classList.remove("show");
        navLinks.classList.add("hide");
    }
}