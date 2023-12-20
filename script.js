/*taking input and performing math function to find attack bonus */
console.log("Test")

// array for housing ability modifiers; unchangable
// const array abilityModifierTable = [
//     [abScore = 0, 0],  // if 0 then no modifier
//     [abScore = 1, -5], //if great than 0 then -1 and only increases on even level
//     [abScore = 2, -4], //if 2 then increase every other level
//     [abScore = 3, -4],
//     [abScore = 4, -3],
//     [abScore = 5, -3],
//     [abScore = 6, -2],
//     [abScore = 7, -2],
//     [abScore = 8, -1],
//     [abScore = 9, -1],
//     [abScore = 10, 0], 
//     [abScore = 11, 0],
//     [abScore = 12, 1],
//     [abScore = 13, 1], etc


// define getelementbyID
// element.getElementByID = "Bob"
// function is taken in N; then return (N * 0.5).floor - 5 ; see above as reference to check it is working -spence helped with the formula creation




function abilityModifierTable(btn) {  //TODO link this function to the input id = "Bob"
    //user input
    var element = document.getElementById('Bob')
    var n = element.value;

    // converting user input via formula
    let abilityModResult = Math.floor((n * 0.5) - 5)
    // if mod result is 0 then is 0 etc
    console.log(abilityModResult);
    btn.innerText = abilityModResult  //changeinnerText for button to show result
}



//make a d20 random generator
function d20(btn) {
    let random20 = Math.floor(Math.random() * 20) + 1; //random number between 1 and 20
    console.log(random20);
    btn.innerText = random20
}


//make a d8 random generator
function d8(btn) {
    let random8 = Math.floor(Math.random() * 8) + 1; //random number between 1 and 20
    console.log(random8);
    btn.innerText = random8
}

// create variables that go into the bonus modifier functions
let attackBonus;
let strModifier;
let sizeModifier;
let shieldBonus;
let agilityModifier;
let spSizeModifier;
let bonusSave;
let abilityMod;

// function for the attack bonus
function attackModifier() {
    // establishing variables
    attackBonus = document.getElementById("baseAttack").value;
    attackBonus = parseInt(attackBonus);
    strModifier = document.getElementById("str").value;
    strModifier = parseInt(strModifier);
    sizeModifier = document.getElementById("sz").value;
    sizeModifier = parseInt(sizeModifier);
    // creating what they are to accomplish
    let modAttack = attackBonus + strModifier + sizeModifier;

    // putputting to display paragraph
    console.log(modAttack);
    document.getElementById("resultDisplay").innerText = modAttack
}


function armorClass(){
    shieldBonus = document.getElementById("shieldBonus");
    shieldBonus = parseInt(shieldBonus);
    agilityModifier = document.getElementById("agilityModifier");
    agilityModifier = parseInt(agilityModifier);
    sizeModifier = document.getElementById("sizeModifier");
    sizeModifier = parseInt(sizeModifier);sizeModifier

    let armorMod =  shieldBonus + agilityModifier + sizeModifier + 10;

    // displaying output
    console.log(armorClass);
    document.getElementById("armorMod").innerText = armorMod
}



//make array for housing skill check bonus (from character level)




// function that references array for skill bonus then adds random d20 and logs the results of all


