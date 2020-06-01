// VARIABLES voir: https://www.weformyou.fr/formations/javascript/variables-et-constantes

let prenom = 'Fred';
let age =  42;
let online = true;
let choix = null


// string
console.log (typeof prenom);

//number
console.log (typeof age);

//boolean
console.log ( typeof online);

//objetc null indique que la variable est vide
console.log ( typeof choix);

//concatenation + "" + pour ajouter un espace
console.log ( prenom +" "+ age + ' ans');

// concatenation avec "altgr7" + ${variable} 
console.log (`je m'appelle ${prenom}, j'ai ${age} ans`);

//concatenation double guillemets ext pour autoriser les simples guillemets ou "\" pour echapper un caractère
console.log ("il fait beau aujourd'hui");
console.log ('il fait "beau aujourd\'hui')

// modifier la valeur d'une variable
age = 33;
console.log (`je m'appelle ${prenom}, j'ai ${age} ans`);

/* impossiblité de changer la valeur d'une constante voir erreur en console
const VILLE = chambéry;
VILLE = paris; */

//Array
let tab = ['Pommes', 30, true,['bleu', 'verte', 'rouge']];
// grandeur du tableau
console.log (tab.length);
//index 1 du tableau
console.log(tab[1]);
// recuperer verte
console.log(tab[3][1]);

//objets
let personne = {
    prenom:'Fred', age:'42', adresse: {
        rue: '1 chemin du pery',
        ville: 'Randens'
    }
};

console.log (personne.prenom);
console.log (personne['prenom']);
console.log (personne.adresse.rue);

//oopérateurs
let a = 5;
let b = 2;

console.log (a+b);
console.log (a-b);
console.log (a*b);
console.log (a/b);

//modulo (pour obtenir le restant d'une division) si le restant vaut 1 chifrfe impair si le restant vaut 0 chiffre pair
console.log (a%b);

// incrementer
a = a+1;
console.log (a);
a = a++;
console.log (a);
// ecriture recommandée
a = a+=1;
console.log (a);

// Decrementer
a = a-1;
console.log (a);
a = a--;
console.log (a);
// ecriture recommandée
a = a-=1;
console.log (a);


