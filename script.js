const includeLowerCaseChars = true;

let length = 12;
let includeUpperCaseChars = false;
let includeSymbolsCaseChars = false;
let includeNumbersCaseChars = false;

// on récupère le formulaire
const form = document.querySelector('form');

// Quand on submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();

    //on récupère les checkboxs du formulaire
    let inputSymbols = document.getElementById("symbols-choice").checked;
    let inputNumbers = document.getElementById("number-choice").checked;
    let inputUpperChars = document.getElementById("upper-chars-choice").checked;
    
    //on récupère l'input de type nombre
    let inputLength = document.getElementById("lenght-choice").value;

    //enregistre les valeurs des variables ci dessus
    checkboxValue(inputSymbols, inputNumbers, inputUpperChars, inputLength);
});

//les 3 parametres de la fonction prennent comme valeur les valeurs des variables de la fonction ci dessus 
function checkboxValue(includeSymbols, includeNumbers, includeUpperChars, length) {
    //affichage true or false
    console.log(`Lenght of the password ${length}`)
    console.log(`Include Symbols Characters: ${includeSymbols}`);
    console.log(`Include numbers: ${includeNumbers}`);
    console.log(`Include Upper Characters: ${includeUpperChars}`);

    includeSymbolsCaseChars = includeSymbols;
    includeNumbersCaseChars = includeNumbers;
    includeUpperCaseChars = includeUpperChars;
    inputLength = length;
}

function generatedPassword(length, includeLowerCaseChars, includeNumbersCaseChars, includeSymbolsCaseChars, includeUpperCaseChars) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const symbolsChars = "#[|]=+$£%!/?";
    const numbersChars = "0123456789";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCaseChars ? lowerCaseChars : "";
    allowedChars += includeUpperCaseChars ? upperCaseChars : "";
    allowedChars += includeNumbersCaseChars ? numbersChars : "";
    allowedChars += includeSymbolsCaseChars ? symbolsChars : "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

document.getElementById("password-button").onclick = function () {
    const password = generatedPassword(length,
        includeLowerCaseChars,
        includeNumbersCaseChars,
        includeSymbolsCaseChars,
        includeUpperCaseChars);

    document.getElementById("password-generated").textContent = `${password}`;
}
