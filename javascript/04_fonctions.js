// LES FONCTIONS voir: https://www.weformyou.fr/formations/javascript/fonctions


// declaration d'une fonction
const message = function(){
    let texte = 'bonjour'
    alert(texte);
}

message();


// declarer une variable globale
let texte;

const message = function(){
    texte = 'hello';
    alert(texte);
}
message();
console.log(message);


//  exemple de Hoisting attention peut créer des soucis !!!
message();

function message() {
    alert('hello')
};


// callback
const message = function(texte){
    alert(texte);
};

message('je suis le texte en parametre');


// paramètre par défaut
const message = function(texte = 'paramètre par défaut') {
    alert(texte);
};

message('avec paramètre');
message();

// LES FONCTIONS FLECHEES

const message = () => {
    alert('fonction flechees');
};

message();

// FLECHEES AVEC PARAMETRES
const somme = (a, b) => {
    alert('resultat:' + (a + b));
};

somme(10, 2);


