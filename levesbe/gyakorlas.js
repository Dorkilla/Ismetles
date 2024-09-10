//
import {KUTYALISTA} from "../adat.js"
import Kartya from "./view/Kartya.js"

let cim = "Minden, amit a kutyákról tudni kell!" //globális, blokkszintű
cim="Minden, ami kutya!"
const nev="Dézi" //globális, blokkszintű

//var globális, függvény szintű


//írjuk ki a cím alá a változó tartalmát
//megfogjuk a HTML elemet
const cimELEM=$("header")
cimELEM.append(`<p>${cim}</p>`)

//kutya adatait szeretném tárolni, név, kor, nem
const kutya1={
    nev:"Dézi",
    kor:12,
    nem:"nőstény"
}

kutya1.nev="Morzsa"



