document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector("main");
    let credenziali = [];
    let usernameRequired = getLocation();

    // main.innerHTML = ""; // Clear main content on load
    signIn((username, password) => {
        credenziali = [];
        credenziali.push([username, password]);

        if (
            credenziali[0][0] === usernameRequired &&
            credenziali[0][1] ===
                usernamePassword[2].find(
                    (user) => user.username === usernameRequired,
                ).password
        ) {
            signInFormConatiner.style.opacity = "0";
            signInFormConatiner.style.pointerEvents = "none";
            getGameData(usernameRequired);
        } else {
            signInFormConatiner.style.opacity = "1";
            signInFormConatiner.style.pointerEvents = "auto";
        }
    });

    function getLocation() {
        const location = window.location.href.split("/");
        let usernameRequired = "";
        location.forEach((element) => {
            if (element.includes("reverse")) {
                const page = element.split(".");
                usernameRequired = page[0];
            }
        });
        return usernameRequired;
    }

    function getGameData(usernameRequired) {
        switch (usernameRequired) {
            case "reverse0":
                setupReverse0();
                break;
            case "reverse1":
                setupReverse1();
                break;
            default:
                main.innerHTML = `<p>Pagina non trovata</p>`;
        }
    }

    setupReverse0 = () => {
        main.innerHTML = `
        <form id="resultForm">
        <pre>Ispeziona la pagina, analizza il pezzo di codice in js nel "main" e cracca la password.</pre>
        <div id="result-group">
        <input type="text" id="result" required/>
        <label for="result">Inserisci risultato</label>
        </div>
        <input type="submit" value="Ok" id="enter"/>
    </form>
    
    <!-- ------------------------------------------------------------------- -->
      <!-- Clicca due volte sullo script -->
      <!-- <script>
            const resultForm = document.querySelector("#resultForm");
            
            resultForm.addEventListener("submit", (e) => {
                e.preventDefault();
                
                const input = document.querySelector("#result");
                
                checkPassword(input.value);
            });
                
            function checkPassword(input) {
                let secret = [82, 51, 118, 51, 114, 53, 51, 36, 49];
                let result = "";
                    
                for (let i = 0; i < secret.length; i++) {
                    result += String.fromCharCode(secret[i]);
                }
                console.log(input === result ? "Access Granted" : "Access Denied");
            }                        
</script>  -->

      <!-- --------------------------------------------------------------------- -->
    
    `;

        const resultForm = document.querySelector("#resultForm");

        resultForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const input = document.querySelector("#result");

            checkPassword(input.value);
        });
    };

    setupReverse1 = () => {
        main.innerHTML = `<p>Congratualazioni! Hai completato Reverse Engineering.<br><br>
        ←<a href="reverse_engineering.html"> Torna Indietro</a>
        </p>`;
    };

    function checkPassword(input) {
        let secret = [82, 51, 118, 51, 114, 53, 51, 36, 49];
        let result = "";

        for (let i = 0; i < secret.length; i++) {
            result += String.fromCharCode(secret[i]);
        }

        console.log(input === result ? "Access Granted" : "Access Denied");
    }
});
