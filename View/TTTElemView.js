export default class TTTElemView {
    constructor(index, szuloElem) {
        this.index = index;
        this.szuloElem = szuloElem;
        this.div = document.createElement("div");
        this.div.classList.add("tablamezo");

        this.div.addEventListener("click", () => {
            console.log("Kattintottál a mezőre!", this.index);
            const esemeny = new CustomEvent("mezokivalaszt", {
                detail: this.index
            });
            window.dispatchEvent(esemeny);
        });
        this.szuloElem.appendChild(this.div);
    }
    megjelenit(ertek) {
        this.div.textContent = ertek;
    }

}