export default class Kartya {
    //egyetlen kutya adatainak megjelenítése egy adott helyen
    //adattagok
    #kutyaAdat={}; //objektum
    #szuloELEM; //html dom elem

    //constructor
    constructor(adat,szuloElem){
        this.#kutyaAdat=adat
        this.#szuloELEM=szuloElem
        this.kutyaKiir()

        //létrehozzuk a gomb elemet
        this.gombElem=$(".kiv:last")
        //console.log(gombElem)
        this.gombKattint()
    }


//tagfüggvény
kutyaKiir(kutya){
    
    this.#szuloELEM.append(`
    <div class="card col-lg-4 col-md-6">
    <div class="card-body">
        <h3 class="card-title">Név: ${this.#kutyaAdat.nev}</h3>
        <p class="card-text">Kor: ${this.#kutyaAdat.kor}</h3>
        <p class="card-text">Nem: ${this.#kutyaAdat.nem}</h3>
        </div>
        <button class="kiv btn btn-success">Kiválaszt</button>
        </div>
        
        `);
    }

    gombKattint(){
        this.gombElem.on("click", ()=>{
            console.log(this)
            //saját esemény létrehozása, hogy az adott objetum át tudjon adni magáról információkat
            const e=new CustomEvent("kivalaszt",{detail:this.#kutyaAdat})
            window.dispatchEvent(e)
        })
    }
}