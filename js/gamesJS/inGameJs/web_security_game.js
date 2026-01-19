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
        usernamePassword[0].find((user) => user.username === usernameRequired)
          .password
    ) {
      signInFormConatiner.style.opacity = "0";
    } else {
      signInFormConatiner.style.opacity = "1";
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
