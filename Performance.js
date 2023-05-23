const players = [
    "Franco Armani", "Juan Musso", "Emiliano Martínez", "Gonzalo Montiel", "Nahuel Molina Lucero",
    "Cristian Romero", "Germán Pezzella", "Nicolás Otamendi", "Lisandro Martínez", "Marcos Acuña", "Rodrigo De Paul",
    "Leandro Paredes", "Guido Rodríguez", "Exequiel Palacios", "Giovani Lo Celso", "Alejandro Gómez", "Ángel Di María",
    "Lionel Messi ©", "Lautaro Martínez", "Paulo Dybala", "Sergio Agüero", "Joaquín Correa", "Lucas Alario", "Julián Álvarez",
    "Nicolás González", "Mauro Icardi"
    ];
const scores = [4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 100, 8, 9, 10, 4, 5, 6, 7, 8];

const outstandingScores = scores.filter(score => score > 7);

// I resolve outstandingPlayers atomically.
const bestPlayersIndexes = scores.map((score, index) => score > 7 ? index : false);
const outstandingPlayersIndexes = bestPlayersIndexes.filter(index => index !== false);
const outstandingPlayers = outstandingPlayersIndexes.map(index => players[index]);

// I resolve regularPlayers atomically before modifying the "scores" array.
const noBestPlayersIndexes = scores.map((score, index) => score <= 7 ? index : false);
const regularPlayersIndexes = noBestPlayersIndexes.filter(index => index !== false);
const regularPlayers = regularPlayersIndexes.map(index => players[index]);

console.log(players, scores);

// I continue with the regular scores (deleting elements).
for (let i = outstandingPlayersIndexes.length - 1; i >= 0; i--) {
    const index = outstandingPlayersIndexes[i];
    scores.splice(index, 1);
  }