console.log("send help");

const tornaSu = document.querySelector(".tornasu");
function toggleTornaSu() {
    if (window.scrollY > 300) {
        tornaSu.classList.add("show");
        tornaSu.classList.remove("hide");
    } else {
        tornaSu.classList.add("hide");
        tornaSu.classList.remove("show");
    }
}

window.addEventListener("scroll", toggleTornaSu);
window.addEventListener("load", toggleTornaSu);

const mobileMenuBtn = document.querySelector(".mobile-menu");
const dropDownMenu = document.querySelector(".dropdown-menu");
const main = document.querySelector("main");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("open");
    dropDownMenu.classList.toggle("open");
});

document.addEventListener("scroll", closeMenu);
main.addEventListener("click", closeMenu);

function closeMenu() {
    if (
        mobileMenuBtn.classList.contains("open") &&
        dropDownMenu.classList.contains("open")
    ) {
        mobileMenuBtn.classList.remove("open");
        dropDownMenu.classList.remove("open");
    }
}
