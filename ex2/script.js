class Animal {
    constructor(nom, couleur) {
        this.nom = nom;
        this.couleur = couleur;
    }
}

class Chien extends Animal {
    constructor(nom, couleur, race) {
        super(nom,couleur)
        this.race = race;    
    }
}

const t = new Chien("Chien", "Noir", "Arbi");

console.log(`Nom ${t.nom} Couleur ${t.couleur} Race ${t.race}`);       
     
