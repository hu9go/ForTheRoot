const main = document.querySelector("main");
const header = document.querySelector("header")
const footer = document.querySelector("footer")

function passwordPrompt(){

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
        <input type="submit" value="Sign in" />
        <input type="reset" value="Cancel" />
      </div>
    </form>`

}