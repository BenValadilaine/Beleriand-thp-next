class Berzerker extends Character {
  constructor(
    name = "Draven",
    hp = 8,
    mana = 0,
    attack = 4,
    status,
    rage = false
  ){
    super(name, hp, mana, attack, status);
    this.rage = rage;
  };
  specialName = () => {
    return "Rage : donne 1 pts d'attaque en plus pour le restant de la partie. Coûte 1 pv.";
  };
};
