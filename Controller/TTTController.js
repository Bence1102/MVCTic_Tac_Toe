import JatekosView from "../View/JatekosView.js";

export default class TTTController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.jatekosView = new JatekosView(document.querySelector("article"));
        this.statuszElem = document.getElementById("statusz");

        this.view.elemek.forEach(elem => {
            elem.kattintasCallback = (index) => this.kattintasKezelo(index);
        });


        const restartBtn = document.querySelector(".restartBtn");
        restartBtn.addEventListener("click", () => this.ujJatek());

        
        
        this.statuszElem.textContent = "A játék kezdéséhez add meg a neveket!";
    }

    kattintasKezelo(index) {
        const nevX = this.jatekosView.getNevX();
        const nevO = this.jatekosView.getNevO();;


        if (nevX === "" || nevO === "") {
            this.statuszElem.textContent = "A játék kezdéséhez add meg mindkét játékos nevét!";
            return;
        }

       if (this.model.setAllapot(index)) {
            this.view.megjelenit();
        } 

        const vege = this.model.getVegevanE();
        if (vege !== "Nincs") {
            let uzenet;
            if (vege.startsWith("X")) uzenet = nevX + " nyert! Vége a játéknak.";
            else if (vege.startsWith("O")) uzenet = nevO + " nyert! Vége a játéknak.";
            else uzenet = "Döntetlen! Vége a játéknak.";

            this.statuszElem.textContent = uzenet;
        } else {
            this.statuszElem.textContent = "Játék folyamatban...";
        }
    }

    ujJatek() {
        this.model.lista = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
        this.model.allapot = 1;
        this.model.VegevanE = "Nincs";
        this.view.megjelenit();
        this.jatekosView.reset();
        this.statuszElem.textContent = "A játék kezdéséhez add meg mindkét játékos nevét!";
    }
}
