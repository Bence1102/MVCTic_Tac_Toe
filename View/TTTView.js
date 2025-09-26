import TTTElemView from "./TTTElemView.js";

export default class TTTView{
    constructor(model,szuloElem){
        this.model=model;
        this.szuloELem=szuloElem;
        this.elemek = [];

        for (let i = 0; i < 9; i++) {
            this.elemek.push(new TTTElemView(i, this.szuloELem, (index) => this.esemenykezelo(index)));          
        }
    }

    megjelenit(){
        const lista = this.model.getLista();
        for (let i= 0; i < lista.length; i++) {
           this.elemek[i].megjelenit(lista[i]);
            this.elemek[i].div.classList.remove("X", "O");
            if(lista[i] === "X")this.elemek[i].div.classList.add("X");
            else if(lista[i] === "O")this.elemek[i].div.classList.add("O");
        }
    }

    esemenykezelo(index) {
        this.model.setAllapot(index);
        this.megjelenit();
        if (this.model.getVegevanE() !== "Nincs") {
            alert(this.model.getVegevanE());
        }
    }
}