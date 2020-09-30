class Monk extends Character {
  constructor(
    name = "Moana",
    hp = 8,
    mana = 200,
    attack = 2,
    status,
    heal = false
  ){
    super(name, hp, mana, attack, status);
    this.heal = heal;
  };
};
