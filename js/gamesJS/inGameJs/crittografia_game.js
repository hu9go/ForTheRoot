document.addEventListener("DOMContentLoaded", function () {
  let credenziali = [];
  let usernameRequired = getLocation();
  window.addEventListener("load", function () {
    signIn((username, password) => {
      credenziali = [];
      credenziali.push([username, password]);
      console.log(credenziali);
      console.log(credenziali[0], usernameRequired);

      if (
        credenziali[0][0] === usernameRequired &&
        credenziali[0][1] ===
          usernamePassword[1].find((user) => user.username === usernameRequired)
            .password
      ) {
        signInFormConatiner.style.opacity = "0";
        signInFormConatiner.style.pointerEvents = "none";
      } else {
        signInFormConatiner.style.opacity = "1";
        signInFormConatiner.style.pointerEvents = "auto";
      }
    });
    if (usernameRequired === "web1") {
      document.addEventListener("contextmenu", disableRightclick);
    } else {
      document.removeEventListener("contextmenu", disableRightclick);
    }

    function disableRightclick(event) {
      event.preventDefault();
    }
  });

  function getLocation() {
    const location = window.location.href.split("/");
    let usernameRequired = "";
    location.forEach((element) => {
      if (element.includes("krypto")) {
        const page = element.split(".");
        usernameRequired = page[0];
      }
    });
    return usernameRequired;
  }
});
