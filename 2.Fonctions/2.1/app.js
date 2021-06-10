// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va retourner une phrase. 
// Créez une fonction retourneLaPhrase qui va le faire !
// par exemple : "Bonjour à tous" donnera "suot à ruojnoB"
// Bonne chance.

// ----------------- CONSEILS -----------------

// La fonction join(), permet de transformer un tableau en chaine de caractère.
// La fonction split(), permet de transformer une chaine de caractère en tableau.
// La fonction reverse(), permet de retourner les éléments d'un tableau.


//ALGORITHME

var phraseARetourner = document.createElement('div')
phraseARetourner.textContent = "Bonjour à tous"

var finalRetourner = phraseARetourner.textContent.split("").reverse().join("")
console.log(finalRetourner);

//FONCTION 

function retourneLaPhrase (phrase){
    var nouvellePhrase = phrase.split("").reverse().join("")
    return nouvellePhrase
}

console.log(retourneLaPhrase("Coucou comment ca va"));