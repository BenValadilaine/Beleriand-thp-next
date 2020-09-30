class Fighter extends Character {
  constructor(
    name = "Grace",
    hp = 12,
    mana = 40,
    attack = 4,
    status,
    darkVision = false
  ){
    super(name, hp, mana, attack, status);
    this.darkVision = darkVision;
  };

  specialName = () => {
    return "Dark vision : inflige 5 points de dégâts et permets à l'utilisateur de subir 2 dégâts en moins au prochain tour. Coûte 20 points de mana.";
  };

  special = () => {
    if (this.mana < 20) {
      return "Vous n'avez plus assez de mana pour utiliser Dark vision."
    };
    let attack = 

    this.mana -= 20;
    this.darkVision = true;
  };
};
