export default class JatekosView {
    constructor(szuloElem) {
        this.szuloElem = szuloElem;

        
        this.div = document.createElement("div");
        this.div.classList.add("jatekosok");

        this.labelX = document.createElement("label");

        this.labelX.textContent = "X játékos neve:";

        this.inputX = document.createElement("input");

        this.inputX.type = "text";

        this.inputX.placeholder = "X neve";

        this.labelX.appendChild(this.inputX);

        this.labelO = document.createElement("label");

        this.labelO.textContent = "O játékos neve:";

        this.inputO = document.createElement("input");

        this.inputO.type = "text";

        this.inputO.placeholder = "O neve";
        
        this.labelO.appendChild(this.inputO);

        this.div.appendChild(this.labelX);
            
        this.div.appendChild(this.labelO);

        
        const jatekter = this.szuloElem.querySelector(".jatekter");
        this.szuloElem.insertBefore(this.div, jatekter);
    }

    getNevX() {
        return this.inputX.value;
    }

    getNevO() {
        return this.inputO.value;
    }

    reset() {
        this.inputX.value = "";
        this.inputO.value = "";
    }
}
