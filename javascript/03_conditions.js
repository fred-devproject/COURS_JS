// CONDITIONS "if/else" et "switch"


//VERIFIER UNE CONDITION AVEC IF / IF ELSE / ELSE voir: https://www.weformyou.fr/formations/javascript/if-et-switch

let age = prompt("saisir votre age");

if (age < 18) {
    alert('vous etes un mineur');
}else if ( age >= 60) {
    alert ('vous etes un senior');
}
else {
    alert ('vous etes majeur');
}


// LES SWITCH

let vehicule = prompt('Quel véhicule souhaitez vous ? peugeot, toyota, ferrari').toLowerCase() ;

console.log(vehicule);

let km = prompt('Combien de kilomètres souhaitez vous réaliser ?');

const prix ={
    peugeot: 0.4 ,
    toyota: 0.6 ,
    ferrari: 0.8 ,
};

switch (vehicule){
    case 'peugeot' :{
        alert('Vous payerez :' + prix.peugeot * km + '€');
        break;
    }
    case 'toyota' :{
        alert('Vous payerez :' + prix.toyota * km + '€');
        break;
    }
    case 'ferrari' :{
        alert('Vous payerez :' + prix.ferrari * km + '€');
        break;
    }
    default:
        alert('veuillez choisir un vehicule disponible dans la liste');
}