class Paladin extends Character {
  constructor(
    name = "Ulder",
    hp = 16,
    mana = 160,
    attack = 3,
    status,
    healingLightning = false
  ){
    super(name, hp, mana, attack, status);
    this.healingLightning = healingLightning;
  };

  specialName = () => {
    return "Healing lightning : inflige 4 pts de dégâts et soigne l'utilisateur de 5 pv. Coûte 40 pts de mana.";
  };

};
