// Manipuler le DOM

// Selectionner un ID (rapide)
console.log(document.getElementById('title'));

let title = document.getElementById('title');

    // innerText recupere uniquement le texte
    console.log(title.innerText);

    // innerHTML recupere uniquement le HTML
    console.log(title.innerHTML);

    // exemple de modification avec inner HTMl
    title.innerText = 'nouveau titre';

    // exemple de modification du HTML
    title.innerHTML = '<em>Nouveau</em> titre';

// Selectionner depuis une class
document.getElementsByClassName('citation');
let citation = document.getElementsByClassName('citation');

    console.log(citation);
    console.log(citation[1]);

// Selectionner depuis une balise
document.getElementsByTagName('p');

// selectionner depuis les selecteurs CSS
//ID
document.querySelector('#title'); 

 //class (recupere le premier élément)
document.querySelector('.citation');

// querySelectorAll recupere tout les élément
console.log(document.querySelectorAll('.citation'));

// recuperer un Attribut HTML
let a = document.querySelector('a');
console.log(a.getAttribute('href'));

// modifier un attribut HTML
a.setAttribute('href', 'https://www.weformyou.fr');

// modifier le style CSS
document.querySelector('p').style.backgroundColor = '#aaa' ;

// recuperer la liste des class CSS d'un élément HTML
console.log(document.querySelector('p').classList);

// Ajouter une class CSS à un élément HTML
document.querySelector('p').classList.add('fondVert');

// Supprimer une classe CSS a un élément HTML
document.querySelector('p').classList.remove('fondVert');

// Modifier le CSS d'élément HTML ciblés
let tabLi = document.querySelectorAll('ul li:nth-child(even)');// even pour elements pair
console.log(tabLi);
for( let li of tabLi){
    li.classList.add('fondVert');
}

//tester la présence d'une classe sur un élément Html 
if (
    document.querySelector('li:nth-child(2)').classList.contains('fondVert')
    ) {
    console.log('La class fondVert n\'est pas appliquée');
}

// echanger une class CSS d'un élément HTML (inverser)
document.querySelector('p').classList.toggle('fondVert');

// Déplacer des éléments HTML
document.querySelector('p').appendChild(document.querySelector('h1'));


// l'objet window "represente toute la fenetre du navigateur"
console.log(window);
// exemple retourner la largeur de l'ecran
console.log('largeur actuelle de l\'écran : ' + window.innerWidth); // retourne la largeur de la fenetre du navigateur 

// afficher les informations du document
console.log(document);