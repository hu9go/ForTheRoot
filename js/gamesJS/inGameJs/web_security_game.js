window.addEventListener("load", signIn());

document.addEventListener("DOMContentLoaded", () => {
    const location = window.location.href.split("/");
  location.forEach((element) => {
    if (element.includes("web")) {
        const page = element.split(".")
        console.log(page[0]);
    }
  });
});
