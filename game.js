class Game {
  constructor(
    turnLeft = 10,
    characters = new Array()
  ){
    this.turnLeft = turnLeft;
    this.characters = characters;
    this.initCharacters();
  };

  initCharacters = () => {
    let assassin = new Assassin();
    let berzerker = new Berzerker();
    let fighter = new Fighter();
    let monk = new Monk();
    let paladin = new Paladin();
    this.characters.push(assassin, berzerker, fighter, monk, paladin);
    console.log("Tous les personnages ont été créé.e.s.");
    console.log(this.characters.map(character => character.name));
  };

  nextTurn = () => {
    this.turnLeft -= 1;
  };

  winnerIs = () => {
    let aliveCharacters = this.characters.filter(character => character.hp > 0);
    return aliveCharacters;
  };

  endGame = () => {
    if (this.turnLeft === 0) {
      return true;
    };
    if (this.characters.filter(character => character.hp <= 0).length >= (this.characters.length -1)){
      return true;
    };
  };
};
