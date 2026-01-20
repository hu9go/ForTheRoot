document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector("main");
    const signInFormConatiner = document.querySelector(
        ".sign-in-form-Conatiner",
    );
    let credenziali = [];
    let usernameRequired = getLocation();
    window.onload = () => {
    if (usernameRequired === "web1") {
        sessionStorage.setItem("redirected", "true");
        window.open("web1.html", "_blank");
        window.location.replace("kicked.html");
    }
};


    main.innerHTML = ""; // Clear main content on load
    signIn((username, password) => {
        credenziali = [];
        credenziali.push([username, password]);
        console.log(credenziali);
        console.log(credenziali[0], usernameRequired);

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
    if (usernameRequired === "web1") {
        document.addEventListener("contextmenu", disableRightclick);
    } else {
        document.removeEventListener("contextmenu", disableRightclick);
    }

    function disableRightclick(event) {
        event.preventDefault();
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
            case "web3":
                setupWeb3();
                break;
            default:
                main.innerHTML = `<p>Pagina non trovata</p>`;
        }
    }

    setupWeb0 = () => {
        main.innerHTML = `<p>
                In questa pagina trovi la password per /web1. <br /><br />
                Per cambiare livello, cambia l'URL della pagina (/web0 ->
                /web1).
            </p>
            <!-- complimenti! la soluzione è ispezionare la pagina per leggere il file sorgente. -->
            <!-- user: web1 -->
            <!-- password: A1#b4C9*e2F0g!H8 -->`;
    };
    setupWeb1 = () => {
        main.innerHTML = `<p>
                qui trovi la password per la prossima pagina ma il tasto destro
                è disattivato.
            </p>
            <!-- complimenti! la soluzione è premere F12. -->
            <!-- user: web2 -->
            <!-- password: 7D&3a9$B1e5@fC2R -->`;
    };
    setupWeb2 = () => {
        main.innerHTML = `<p>DA LAVORARE</p>`;
    };
    setupWeb3 = () => {
        main.innerHTML = `<p>approfindimenti</p>`;
    };
});
