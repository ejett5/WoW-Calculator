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
let grpCheck;
let tinkerNumber;
let tinkerLevel;
let tinkClassLevel;
let featMod;
let techLimit;
let complexityScore;
let marketValue;
let fxDifficulty;
let tf;
let mastRank;

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
    shieldBonus = document.getElementById("shieldBonus").value;
    shieldBonus = parseInt(shieldBonus);
    console.log(shieldBonus);
    agilityModifier = document.getElementById("agilityModifier").value;
    agilityModifier = parseInt(agilityModifier);
    console.log(agilityModifier);
    sizeModifier = document.getElementById("sizeModifier").value;
    sizeModifier = parseInt(sizeModifier);
    console.log(sizeModifier);

    let armorMod =  shieldBonus + agilityModifier + sizeModifier + 10;

    // displaying output
    console.log(armorMod);
    document.getElementById("armorDisplay").innerText = armorMod
}


// grapple check

function grappleCheck(){
    grpCheck = document.getElementById("grpCheck").value;
    grpCheck = parseInt(grpCheck);
    console.log(grpCheck);
    strModifier = document.getElementById("strModifier").value;
    strModifier = parseInt(strModifier);
    console.log(strModifier);
    spSizeModifier = document.getElementById("specialSize").value;
    spSizeModifier = parseInt(spSizeModifier);
    console.log(spSizeModifier);

    let floorTest =  grpCheck + strModifier + spSizeModifier;

    // displaying output
    console.log(floorTest);
    document.getElementById("rolling").innerText = floorTest
}


// saving throw

function savingThrow(){bonusSave
    bonusSave = document.getElementById("bonusSave").value;
    bonusSave = parseInt(bonusSave);
    console.log(bonusSave);
    abilityMod = document.getElementById("abMod").value;
    abilityMod = parseInt(abilityMod);
    console.log(abilityMod);
    

    let savingThrow =  bonusSave + abilityMod;

    // displaying output
    console.log(savingThrow);
    document.getElementById("safe").innerText = savingThrow
}

//magical save - placeholder TODO Get arguements for field


// Collaborative Construction
function collaborativeConstruction(){
    bonusSave = document.getElementById("bonusSave").value;
    bonusSave = parseInt(bonusSave);
    console.log(bonusSave);
    abilityMod = document.getElementById("abMod").value;
    abilityMod = parseInt(abilityMod);
    console.log(abilityMod);
    

    let savingThrow =  bonusSave + abilityMod;

    // displaying output
    console.log(savingThrow);
    document.getElementById("safe").innerText = savingThrow
}



//make array for housing skill check bonus (from character level)




// function that references array for skill bonus then adds random d20 and logs the results of all


