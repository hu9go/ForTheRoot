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
                usernamePassword[0].find(
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
    if (usernameRequired === "web0") {
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
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

    function getGameData(usernameRequired) {
        switch (usernameRequired) {
            case "web0":
                setupWeb0();
                break;
            case "web1":
                setupWeb1();
                break;
            case "web2":
                setupWeb2();
                break;
            default:
                main.innerHTML = `<p>Pagina non trovata</p>`;
        }
    }

    setupWeb0 = () => {
        main.innerHTML = `<p>
                qui trovi la password per la prossima pagina ma il tasto destro
                è disattivato.
            </p>
            <!-- complimenti! la soluzione è premere F12. -->
            <!-- user: web2 -->
            <!-- password: A1#b4C9*e2F0g!H8 -->`;
    };
    setupWeb1 = () => {
        main.innerHTML = `<p>DA LAVORARE</p>`;
    };
    setupWeb2 = () => {
        main.innerHTML = `<p>approfindimenti</p>`;
    };
});
