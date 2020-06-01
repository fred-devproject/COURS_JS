// exercice creer un questionnaire intercatif voir: https://www.weformyou.fr/formations/javascript/questionnaire-interactif

const questions = [
    {
        question:'A quel compositeur est consacré le film Amadeus ?}\n1. Beethoven\n2. Mozart',
        reponse: 2
    },
    {
        question:'Quelle est la capitale de l\'autriche ?\n1. Vienne\n2. Oslo',
        reponse: 1
        
    },
    {
        question:'Quel organe est perturbé par les acouphènes ?\n1. Les pieds\n2. Les oreilles',
        reponse: 2
    }
];

// début du jeu

let nbBonneReponse = 0;

for (let i = 0; i < questions.length; i += 1) {
    let repUser = prompt(questions[i].question);
    if ( repUser == questions[i].reponse){
        alert('Bonne réponse');
        nbBonneReponse += 1;
    }
    else {
        alert('Mauvaise reponse');
    }    
}

if (nbBonneReponse <= 1){
    alert(`Vous avez ${nbBonneReponse} bonne réponse sur ${questions.length}`); 
} else {
    alert(`Vous avez ${nbBonneReponse} bonnes réponses sur ${questions.length}`);
};