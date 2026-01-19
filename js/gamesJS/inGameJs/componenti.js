const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

var signInFormConatiner;
function signIn(onSubmit) {
  signInFormConatiner = document.createElement("div");
  signInFormConatiner.classList.add("sign-in-form-Conatiner");
  signInFormConatiner.innerHTML = `<form class="sign-in-form">
    <div class="input-group username">
    <input type="text" name="username" id="username" required/>
    <label for="username">Username</label>
    </div>
    <div class="input-group password">
    <input type="password" name="password" id="password" required/>
    <label for="username">Password</label>
    </div>
    <div class="btns">
    <input type="submit" value="Sign in" id="sign-in"/>
    <input type="reset" value="Cancel" id="cancel"/>
    </div>
    </form>`;
  main.appendChild(signInFormConatiner);

  signInFormConatiner.style.opacity = "1";

  const signInForm = document.querySelector(".sign-in-form");
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");

  if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      onSubmit(usernameInput.value, passwordInput.value);
    });
  }
}

function getLocation() {
  const location = window.location.href.split("/");
  let usernameRequired = "";
  location.forEach((element) => {
    if (element.includes("web")) {
      const page = element.split(".");
      usernameRequired = page[0];
    }
  });
  return usernameRequired;
}
