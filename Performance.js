// Ejercicio: Imagina que estás evaluando el desempeño de los jugadores de la selección Argentina en el Mundial 2022 y deseas organizar la información de la siguiente manera utilizando solo arrays:

// Tienes un array llamado scores que contiene los puntajes obtenidos por cada jugador en los partidos del Mundial.
// Filtra los puntajes que son mayores a 7 y almacenalos en un nuevo array llamado outstandingScores.
// Utiliza el array outstandingScores para crear un nuevo array llamado outstandingPlayers que contenga solo los nombres de los jugadores que obtuvieron puntajes destacados. Para ello, tendrás otro array llamado players que contiene los nombres de los jugadores en el mismo orden que el array scores.
// Elimina los puntajes destacados del array original, dejando solo los puntajes regulares.
// Crea un nuevo array regularPlayers  que tenga los nombres únicamente de los jugadores con un desempeño regular.

// Implementa una función llamada evalPerformance que tome como parámetros dos arrays: scores (con los puntajes obtenidos por los jugadores) y players (nombres de dichos jugadores). La función debe aplicar las operaciones mencionadas anteriormente. De ser necesario atomizar la función en pequeñas funciones puras.

// ------------------------------------------------------------------------------------

const players = [
    "Franco Armani", "Juan Musso", "Emiliano Martínez", "Gonzalo Montiel", "Nahuel Molina Lucero",
    "Cristian Romero", "Germán Pezzella", "Nicolás Otamendi", "Lisandro Martínez", "Marcos Acuña", "Rodrigo De Paul",
    "Leandro Paredes", "Guido Rodríguez", "Exequiel Palacios", "Giovani Lo Celso", "Alejandro Gómez", "Ángel Di María",
    "Lionel Messi ©", "Lautaro Martínez", "Paulo Dybala", "Sergio Agüero", "Joaquín Correa", "Lucas Alario", "Julián Álvarez",
    "Nicolás González", "Mauro Icardi"
    ];
const scores = [4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 100, 8, 9, 10, 4, 5, 6, 7, 8];

// verifico que la cantidad de jugadores sea igual a la cantidad de scores.
// I verify that the number of players is equal to the number of scores.
const playersNumber = players.length;
const scoresNumber = scores.length;
console.log(`There are ${playersNumber} players and ${scoresNumber} scores`);

const outstandingScores = scores.filter(score => score > 7);
console.log(`The outstandig scores are: ${outstandingScores}`);

// Resuelvo outstandingPlayers de manera atomizada.
// I resolve outstandingPlayers atomically.
const bestPlayersIndexes = scores.map((score, index) => score > 7 ? index : false);
const outstandingPlayersIndexes = bestPlayersIndexes.filter(index => index !== false);
const outstandingPlayers = outstandingPlayersIndexes.map(index => players[index]);
console.log('The outstandig players are:');
console.log(outstandingPlayers);

// Resuelvo regularPlayers de manera atomizada antes de modificar el array "scores".
// I resolve regularPlayers atomically before modifying the "scores" array.
const noBestPlayersIndexes = scores.map((score, index) => score <= 7 ? index : false);
const regularPlayersIndexes = noBestPlayersIndexes.filter(index => index !== false);
const regularPlayers = regularPlayersIndexes.map(index => players[index]);
console.log('The regular players are:');
console.log(regularPlayers);

// Continúo con los puntajes regulares. 
// I continue with the regular scores.
for (let i = outstandingPlayersIndexes.length - 1; i >= 0; i--) {
    const index = outstandingPlayersIndexes[i];
    scores.splice(index, 1);    //(intenté con foreach pero tenia problemas con los índices).
  }

  console.log("The regular scores are:");
  console.log(scores);

