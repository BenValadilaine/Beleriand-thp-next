class Character {
  constructor(
    name = "",
    hp = 20,
    mana = 10,
    attack = 5,
    status = "playing",
  ){
    this.name = name;
    this.maxHp = hp;
    this.maxMana = mana;
    this.mxAttack = attack;
    this.status = status; // 'playing' or 'winner' or 'loser'
  };

  takesDamages = (enemy) => {
    this.hp -= enemy.attack
    console.log(`${this.name} a perdu ${enemy.attack} hp. Il lui en reste maintenant ${this.maxHp}.`);

    if (this.hp <= 0) {
      this.status = "loser"
    }else {
      this.status = "playing"
    };
  };

  dealsDamages = (victim) => {
    victim.hp -= this.attack // pas sûr pour le this.attack
    console.log(`${this.name} passe à l'attaque ! Il inflige ${this.attack} dégâts à ${victim.name}.`);
  };

  setStatusWinner = () => {
    this.status = "winner"
  };

};
