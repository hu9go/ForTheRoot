document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector("main");
    let credenziali = [];
    let usernameRequired = getLocation();

    main.innerHTML = ""; // Clear main content on load
    signIn((username, password) => {
        credenziali = [];
        credenziali.push([username, password]);

        if (
            credenziali[0][0] === usernameRequired &&
            credenziali[0][1] ===
                usernamePassword[1].find(
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
            if (element.includes("krypto")) {
                const page = element.split(".");
                usernameRequired = page[0];
            }
        });
        return usernameRequired;
    }

    function getGameData(usernameRequired) {
        switch (usernameRequired) {
            case "krypto0":
                setupKrypto0();
                break;
            case "krypto1":
                setupKrypto1();
                break;
            case "krypto2":
                setupKrypto2();
                break;
            case "krypto3":
                setupKrypto3();
                break;
            default:
                main.innerHTML = `<p>Pagina non trovata</p>`;
        }
    }

    setupKrypto0 = () => {
        main.innerHTML = `<p>
                Password per accedere a krypto1:<br /><br />
                UHNzd3JkJkMwcnIzdHQ0IQ==<br /><br />
                la codifica è base64<br /><br />
                Per cambiare livello, cambia l'URL della pagina (/krypto0 ->
                /krypto1).
            </p>`;
    };
    setupKrypto1 = () => {
        main.innerHTML = `<p>
                Password per accedere a krypto2:<br /><br />
                PbqvsvpnQvPrfner<br /><br />
                parole chiave{cesare, 13}
            </p>`;
    };
    setupKrypto2 = () => {
        main.innerHTML = `<p>
                Password per accedere a krypto3:<br /><br />
                Y25mZmpiZXE=<br /><br />
                questa codifica usa gli ultimi due algoritmi.
            </p>`;
    };
    setupKrypto3 = () => {
        main.innerHTML = `<p>Congratualazioni! Hai completato Crittografia.<br><br>
        ←<a href="crittografia.html"> Torna Indietro</a>
        </p>`;
    };
});
