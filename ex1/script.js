class animal{
    constructor(nom,couleur,habitat){
        this.nom=nom
        this.couleur=couleur
        this.habitat=habitat
    }
   
}
let t=new animal("chat","red","maison")
animal.prototype.deplacer=function(){
    return `l'animal ${this.nom} se deplasse` 
}
console.log(t)
console.log(t.deplacer());
const oiseau = new animal("Oiseau", "Bleu", "Forêt");
console.log(oiseau.deplacer())
