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
