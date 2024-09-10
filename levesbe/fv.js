export function kutyaKiir(kutya){
    const tartalomELEM=$(".tartalom")
    tartalomELEM.append(`
    <div class="card col-lg-4 col-md-6">
    <div class="card-body">
        <h3 class="card-title">Név: ${kutya.nev}</h3>
        <p class="card-text">Kor: ${kutya.kor}</h3>
        <p class="card-text">Nem: ${kutya.nem}</h3>
        </div>
        <button class="kiv btn btn-success">Kiválaszt</button>
        </div>
        
        `)
}