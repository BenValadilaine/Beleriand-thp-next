function newGame() {
  var game = new Game;

  while (game.endGame() != true) {

    console.log(`Il reste ${game.turnLeft} tours à jouer.`);
    game.nextTurn();

  };

  if (game.characters.filter(character => character.hp > 0).length >= 1) {
    let winners = game.winnerIs();
    winners.map(winner => winner.setStatusWinner());
    console.log(`Il y a ${winners.length} gagnants !`);
    console.log(`Les gagnants sont ${winners.name}`);
  } else {
    console.log("Il n'y a aucun gagnant !");
  };
  
};
