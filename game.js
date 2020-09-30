class Game {
  constructor(
    turnLeft = 10,
    characters = new Array
  ){
    this.turnLeft = turnLeft;
    this.characters = characters;
  };

  initCharacters = () => {
    let assassin = new Assassin;
    let berzerker = new Berzerker;
    let fighter = new Fighter;
    let monk = new Monk;
    let paladin = new Paladin;
    characters.push(assassin, berzerker, fighter, monk, paladin);
    console.log("Tous les personnages ont été créé.e.s.");
    console.log(characters);
  };


  nextTurn = () => {
    this.turnLeft -= 1;
  };


};
