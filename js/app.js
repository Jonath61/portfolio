const menu = document.querySelector(".header-menu");
const icon = document.querySelector("header .material-symbols-outlined");

const openMenu = () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        icon.innerHTML = "close";
    } else {
        icon.innerHTML = "menu";
    }
};

// Fonction pour fermer le menu
const closeMenu = () => {

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        icon.innerHTML = "menu";
    }
};

// Ajoute un écouteur sur tous les boutons qui doivent fermer le menu
document.querySelectorAll(".close-menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        closeMenu();
    });
});
