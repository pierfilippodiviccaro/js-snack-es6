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
for (i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < 100) {
        console.log(biciclette[i])


    }
}
