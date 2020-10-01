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

  startGame = () => {
    console.log("******* Bienvenue dans Beleriand *******");
    console.log("             le jeu de rôle");
    console.log("****************************************");
    console.log(" ");

    while (this.endGame() != true) {
      let playingCharacter = this.characters[Math.floor(Math.random() * 5)];
      let enemy = playingCharacter.selectEnemy;
      playingCharacter.attacks(enemy);
      console.log(`${playingCharacter.name} a attaqué ${enemy.name} et lui a infligé ${playingCharacter.attack} pts de dégâts.`);
      this.newTurn();
    };

  };

  nextTurn = () => {
    this.turnLeft -= 1;
  };

  newTurn = () => {
    console.log(`Il reste ${this.turnLeft} tours à jouer.`);
    this.nextTurn();
  };

  endGame = () => {
    if (this.turnLeft === 0) {
      return true;
    };
    if (this.characters.filter(character => character.hp <= 0).length >= (this.characters.length -1)){
      return true;
    };
  };

  winnerIs = () => {
    let aliveCharacters = this.characters.filter(character => character.hp > 0);
    return aliveCharacters;
  };

};
