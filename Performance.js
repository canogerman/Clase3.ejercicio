const players = [
    "Franco Armani", "Juan Musso", "Emiliano Martínez", "Gonzalo Montiel", "Nahuel Molina Lucero",
    "Cristian Romero", "Germán Pezzella", "Nicolás Otamendi", "Lisandro Martínez", "Marcos Acuña", "Rodrigo De Paul",
    "Leandro Paredes", "Guido Rodríguez", "Exequiel Palacios", "Giovani Lo Celso", "Alejandro Gómez", "Ángel Di María",
    "Lionel Messi ©", "Lautaro Martínez", "Paulo Dybala", "Sergio Agüero", "Joaquín Correa", "Lucas Alario", "Julián Álvarez",
    "Nicolás González", "Mauro Icardi"
    ];
const scores = [4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 100, 8, 9, 10, 4, 5, 6, 7, 8];

function evalPerformance(scores, players) {
    const outstandingScores = scores.filter(score => score > 7);

    // I resolve outstandingPlayers NO atomically!!.
    const outstandingPlayers = players.filter((_, index) => scores[index] > 7);

    // I resolve regularPlayers NO atomically!!.
    const regularPlayers = players.filter((_, index) => scores[index] <= 7);

    // I continue with the regular scores (NO deleting elements).
    const regularScores = scores.filter(score => score <= 7);

    // Imprimo los resultados.
    console.log('\x1b[4m%s\x1b[0m', 'Outstanding players and scores:');
    for (let i = 0; i < outstandingPlayers.length; i++) {
    console.log(`${outstandingPlayers[i]} - ${outstandingScores[i]}`);
    };

    console.log('\x1b[4m%s\x1b[0m', 'Regular players and scores:');
    for (let i = 0; i < regularPlayers.length; i++) {
    console.log(`${regularPlayers[i]} - ${regularScores[i]}`);
    };
}

evalPerformance(scores, players);