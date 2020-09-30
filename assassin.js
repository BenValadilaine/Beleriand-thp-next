class Assassin extends Character {
  constructor(
    name = "Carl",
    hp = 5,
    mana = 20,
    attack = 6,
    status,
    shadowHit = false
  ){
    super(name, hp, mana, attack, status);
    this.shadowHit = shadowHit;
  };
};
