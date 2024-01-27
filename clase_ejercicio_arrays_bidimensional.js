// Función para determinar al ganador del torneo
function tournamentWinner(competitions, results) {
    // Objeto para almacenar los puntajes de cada equipo
    const scores = {};
    // Variable para almacenar el nombre del ganador
    let winner = '';
  
    // Iterar sobre los enfrentamientos y resultados
    for (let i = 0; i < competitions.length; i++) {
      // Desestructurar el arreglo de enfrentamiento en equipos local y visitante
      const [home, away] = competitions[i];
      // Determinar el equipo ganador del enfrentamiento
      const winningTeam = results[i] === 0 ? away : home;
  
      // Actualizar el puntaje del equipo ganador
      scores[winningTeam] = (scores[winningTeam] || 0) + 3;
  
      // Actualizar al ganador del torneo si corresponde
      if (!winner || scores[winningTeam] > scores[winner]) {
        winner = winningTeam;
      }
    }
  
    // Devolver al ganador del torneo
    return winner;
  }
  
  // Definición de los enfrentamientos y resultados
  const competitions = [
    ['JavaScript', 'C#'],
    ['C#', 'Python'],
    ['Python', 'JavaScript']
  ];
  const results = [0, 0, 1];
  
  // Llamar a la función y mostrar al ganador del torneo
  console.log(tournamentWinner(competitions, results)); // Output: JavaScript
  