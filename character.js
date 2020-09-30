class Character {
  constructor(
    name = "",
    hp = 20,
    mana = 10,
    attack = 5,
    defense = 0,
    status = "playing",
  ){
    this.name = name;
    this.maxHp = hp;
    this.maxMana = mana;
    this.mxAttack = attack;
    this.status = status; // 'playing' or 'winner' or 'loser'
  };

  takeDamage = (enemy) => {
    this.mxHp -= enemy.attack
    console.log("${this.name} a perdu ${enemy.attack} hp. Il lui en reste maintenant ${this.maxHp}. ");
  };

  dealDamage = (victim) => {
    victim.hp -= this.attack // pas sûr pour le this.attack
    console.log("${this.name} passe à l'attaque ! Il inflige ${this.attack} dégâts à ${victim.name}.");
  };

};
