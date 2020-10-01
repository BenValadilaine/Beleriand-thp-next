class Character {
  constructor(
    name = "",
    hp = 20,
    mana = 10,
    attack = 5,
    status = "playing"
  ){
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.attack = attack;
    this.status = status; // 'playing' or 'winner' or 'loser'
  };

  isAttacked = (enemy) => {
    this.hp -= enemy.attack;
  };

  attacks = (victim) => {
    victim.isAttacked(this);
  };

  setStatusWinner = () => {
    this.status = "winner";
  };

  selectEnemy = () => {
    let playingCharacterIndex = game.characters.indexOf(this);
    let enemies = game.characters.slice();
    return enemies = enemies.splice(playingCharacterIndex, 1);
  };

};
