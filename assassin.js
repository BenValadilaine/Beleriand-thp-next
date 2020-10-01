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
  specialName = () => {
    return "Shadow hit : ne prend aucun dégât au prochain tour, et porte au prochain tour une attaque de 7 pts. Si la cible ne meurt pas avec cette attaque, l'assassin perd à son tour 7 pv. Coûte 20 mana.";
  };
};
