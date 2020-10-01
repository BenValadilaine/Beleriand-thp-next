function newGame() {
  var game = new Game;

  game.startGame();

  if (game.characters.filter(character => character.hp > 0).length >= 1) {
    let winners = game.winnerIs();
    winners.map(winner => winner.setStatusWinner());
    console.log(`Il y a ${winners.length} gagnants !`);
    console.log(`Les gagnants sont ${winners.map(winner => " " + winner.name)}.`);
  } else {
    console.log("Il n'y a aucun gagnant !");
  };

};
