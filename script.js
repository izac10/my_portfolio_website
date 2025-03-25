function toggleMenu(){
    // target will be <div class="menu-links">
    const menu = document.querySelector(".menu-links")
    // target will be <div class= "hamburger-icon" onclick="toggleMenu()">
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}