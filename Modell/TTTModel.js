export default class TTTModel {
    constructor() {
        this.lista = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
        this.allapot = 1;
        this.VegevanE = "Nincs";
    }

    getLista() {
        return this.lista;
    }

    getAllapot() {
        return this.allapot === 1 ? "X" : "O";
    }

    getVegevanE() {
        return this.VegevanE;
    }


    setAllapot(index) {
        if (this.lista[index] === "_" && this.VegevanE === "Nincs") {
            this.lista[index] = this.getAllapot();
            this.ellenoriz();
            if (this.VegevanE === "Nincs") {
                this.allapot *= -1;
            }
            return true;
        }
        return false;
    }

    ellenoriz() {
        const nyeroPoziciok = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let i = 0; i < nyeroPoziciok.length; i++) {
            let a = nyeroPoziciok[i][0];
            let b = nyeroPoziciok[i][1];
            let c = nyeroPoziciok[i][2];

            if (
                this.lista[a] != "_" && this.lista[a] === this.lista[b] && this.lista[b] === this.lista[c]
            ) {
                this.VegevanE = `${this.lista[a]} nyert`;
                return;
            }
        }

        if (!this.lista.includes("_")) {
            this.VegevanE = "Döntetlen";
        }
    }
}