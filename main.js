import { KUTYALISTA } from "./model/adat.js";
import Kartyak from "./view/Kartyak.js";

const kivKutyaLista=[]

const tartalomELEM=$(".tartalom");
const kivELEM=$(".kivalasztott");

new Kartyak(KUTYALISTA, tartalomELEM)

//rákattintunk a kiválaszt gombra, akkor a hozzá tartozó kutya adata kerüljön bele a kivKutyaListába

//feliratkozunk a saját eseményünkre
$(window).on("kivalaszt",(event)=>{
    console.log(event.detail)
    kivKutyaLista.push(event.detail)
    console.log(kivKutyaLista)
    new Kartya(event.detail,kivELEM)
})