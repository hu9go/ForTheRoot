const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

const usernameInput = document.getElementById("#username");
const passwordInput = document.getElementById("#password");
const signInForm = document.getElementById(".sign-in-form");
function signIn() {
  main.innerHTML = `
<form class="sign-in-form">
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

  document.body.style.backgroundColor = "#2e2e2e";

  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(usernameInput.value);
  });
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
