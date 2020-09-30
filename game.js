class Game {
  constructor(
    turnLeft = 10
  ){
    this.turnLeft = turnLeft;
  };

  initCharacters = () => {
    assassin = new Assassin;
    berzerker = new Berzerker;
    fighter = new Fighter;
    monk = new Monk;
    paladin = new Paladin;
    console.log("Tous les personnages ont été créés.");
  };

  nextTurn = () => {
    this.turnLeft -= 1;
  };

  endGame = () => {

  };

};
