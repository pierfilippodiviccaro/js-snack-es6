//creazione dell'array


const squadre = [
    {
        nome: "miaofc",
        gol: 0,
        falli: 0,
    },
    {
        nome: "milan",
        gol: 0,
        falli: 0,

    },
    {
        nome: "inter",
        gol: 0,
        falli: 0
    },
    {
        nome: "bayern",
        gol: 0,
        falli: 0,
    }

]


//operazioni di logica 
for (i = 0; i < squadre.length; i++) {
    const squadra = squadre[i]
    squadra.gol = Math.floor(Math.random() * 5)
    squadra.falli = Math.floor(Math.random() * 5)
}
const squadreFalli = []
for(i=0;i<squadre.length;i++){
    squadreFalli.push({
        nome:squadre[i].nome,
        falli:squadre[i].falli,
    })
}
console.log(squadreFalli);
