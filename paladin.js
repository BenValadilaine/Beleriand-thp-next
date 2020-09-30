class Paladin extends Character {
  constructor(
    name = "Ulder",
    hp = 16,
    mana = 160,
    attack = 3,
    status,
    healingLighting = false
  ){
    super(name, hp, mana, attack, status);
    this.healingLighting = healingLighting;
  };
};
