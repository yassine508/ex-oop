class Animal {
    constructor(nom, couleur) {
      this.nom = nom;
      this.couleur = couleur;
    }
  
    parler() {
      console.log("Cet animal fait un bruit générique");
    }
  }
  
  class Chat extends Animal {
    miauler() {
      console.log("Miaou!");
    }
  }
  
  const chatPersan = new Chat("Chat Persan", "Blanc");
  
  chatPersan.parler(); 
  chatPersan.miauler(); 
  