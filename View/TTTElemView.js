export default class TTTElemView {
    constructor(index, szuloElem, kattintas) {
        this.index = index;
        this.szuloElem = szuloElem;
        this.kattintasCallback = kattintas;
        this.div = document.createElement("div");
        this.div.classList.add("tablamezo");
        this.div.addEventListener("click", () => this.kattintas());
        this.szuloElem.appendChild(this.div);
    }
    megjelenit(ertek) {
        this.div.textContent = ertek;
    }

    kattintas() {
        if (this.kattintasCallback) {
            this.kattintasCallback(this.index);
        }
    }
}