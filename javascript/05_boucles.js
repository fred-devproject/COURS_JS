// BOUCLES FOR / WHILE / DO WHILE / FOR-IN / FOR-OF voir:https://www.weformyou.fr/formations/javascript/boucles

// boucle for
for(let i = 0; i<=3; i += 1) {
    console.log('boucle:' + i);
}

//parcourir un tableau

let tab =['pommes', 'poires', 'bananes'];

// avec for
console.log('---For---');
for(let i = 0; i < tab.length; i+=1) {
    console.log(tab[i])
}

// avec while
console.log('---While---');
let j = 0;
while(j < tab.length){
    console.log(tab[j])
    j += 1;
}

// avec do while les premieres conditions sont executés avant de tester la condition d'arrêt
console.log('---Do While---');
let k = 0;
do {
    console.log(tab[k]);
    k += 1
} while (k < tab.length);

// FOR-IN pour iterer sur les cles d'un objet
let voiture = {marque: 'peugeot', moteur: 'essence'};

console.log('---FOR IN---');
for (let k in voiture) {
    console.log(k);
}

// FOR-OF pour iterer sur les cles d'un tableau
let tab2 = ['peugeot', 'essence', 'rouge'];

console.log('---FOR OF---');
for (let v of tab2) {
    console.log(v);
}