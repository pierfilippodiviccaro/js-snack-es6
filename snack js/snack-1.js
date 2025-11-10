
const biciclette = [
    {
        nome: "bicicletta-1",
        peso: 200,
    },
    {
        nome: "bicicletta-2",
        peso: 102,
    },
    {
        nome: "bicicletta-3",
        peso: 80,
    },
    {
        nome: "bicicletta-4",
        peso: 400
    }
]
const pesi = biciclette.map(bici => bici.peso); //arrow function
const pesoMinimo = Math.min(...pesi); //utilizzo dello spread operator
const indicePesoMinimo = pesi.indexOf(pesoMinimo);
console.log(biciclette[indicePesoMinimo]);

