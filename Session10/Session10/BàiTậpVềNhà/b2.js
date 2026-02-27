const player = {
  name: "De Bruyne",
  position: "Midfielder",
  goals: 8,
  assists: 25,
  matchesPlayed: 35,
};
let addPerformanceScore = (player) => {
  let performancePerMatch =
    (player.goals + player.assists) / player.matchesPlayed;
  player.performancePerMatch = Number(performancePerMatch.toFixed(2));
  player.isKeyPlayer = player.performancePerMatch >= 1.0;
  console.log(player);
};
addPerformanceScore(player);
