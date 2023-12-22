/*taking input and performing math function to find attack bonus */
console.log("Test")

//     [abScore = 0, 0],  // if 0 then no modifier
//     [abScore = 1, -5], 
//     [abScore = 2, -4], 
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
//     [abScore = 13, 1], etc   *This is the pattern the formula must follow for abilityModifierTable


function abilityModifierTable(btn) {    //TODO add a random d20 to ourputs and final sum
    //user input
    var element = document.getElementById('Bob')
    var n = element.value;

    // if mod result is 0 then is 0 etc
    if (n <= 0) {
        abilityModResult = 0;
        console.log(abilityModResult);
        btn.innerText = abilityModResult  //changeinnerText for button to show result
    } else {
        // converting user input via formula
        let abilityModResult = Math.floor((n * 0.5) - 5)
        console.log(abilityModResult);
        btn.innerText = abilityModResult  //changeinnerText for button to show result
    }

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

//make a d4 random generator
function d4(btn) {
    let random4 = Math.floor(Math.random() * 4) + 1; //random number between 1 and 20
    console.log(random4);
    btn.innerText = random4
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
let ts;

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


function armorClass() {
    shieldBonus = document.getElementById("shieldBonus").value;
    shieldBonus = parseInt(shieldBonus);
    console.log(shieldBonus);
    agilityModifier = document.getElementById("agilityModifier").value;
    agilityModifier = parseInt(agilityModifier);
    console.log(agilityModifier);
    sizeModifier = document.getElementById("sizeModifier").value;
    sizeModifier = parseInt(sizeModifier);
    console.log(sizeModifier);

    let armorMod = shieldBonus + agilityModifier + sizeModifier + 10;

    // displaying output
    console.log(armorMod);
    document.getElementById("armorDisplay").innerText = armorMod
}


// grapple check

function grappleCheck() {
    grpCheck = document.getElementById("grpCheck").value;
    grpCheck = parseInt(grpCheck);
    console.log(grpCheck);
    strModifier = document.getElementById("strModifier").value;
    strModifier = parseInt(strModifier);
    console.log(strModifier);
    spSizeModifier = document.getElementById("specialSize").value;
    spSizeModifier = parseInt(spSizeModifier);
    console.log(spSizeModifier);

    let floorTest = grpCheck + strModifier + spSizeModifier;

    // displaying output
    console.log(floorTest);
    document.getElementById("rolling").innerText = floorTest
}


// saving throw

function savingThrow() {
    bonusSave
    bonusSave = document.getElementById("bonusSave").value;
    bonusSave = parseInt(bonusSave);
    console.log(bonusSave);
    abilityMod = document.getElementById("abMod").value;
    abilityMod = parseInt(abilityMod);
    console.log(abilityMod);


    let savingThrow = bonusSave + abilityMod;

    // displaying output
    console.log(savingThrow);
    document.getElementById("safe").innerText = savingThrow
}

//magical save - placeholder TODO Get arguements for field


// Collaborative Construction
function collaborativeConstruction() {
    tinkerNumber = document.getElementById("tinkerNumber").value;
    tinkerNumber = parseInt(tinkerNumber);
    console.log(tinkerNumber);
    tinkerLevel = document.getElementById("tinkerLevel").value;
    tinkerLevel = parseInt(tinkerLevel);
    console.log(tinkerLevel);


    let modConstruction = tinkerNumber + tinkerLevel;

    // displaying output
    console.log(modConstruction);
    document.getElementById("boom").innerText = modConstruction
}

// technological limit calc
function technological() {
    tinkClassLevel = document.getElementById("tinkClassLevel").value;
    tinkClassLevel = parseInt(tinkClassLevel);
    console.log(tinkClassLevel);
    featMod = document.getElementById("featMod").value;
    featMod = parseInt(featMod);
    console.log(featMod);


    let techBoundary = tinkClassLevel + featMod + 1;

    // displaying output
    console.log(techBoundary);
    document.getElementById("techytech").innerText = techBoundary
}


// placeholder calc
function theThingaMaBob() {
    techLimit = document.getElementById("techLimit").value;
    techLimit = parseInt(techLimit);
    console.log(techLimit);
    complexityScore = document.getElementById("complexityScore").value;
    complexityScore = parseInt(complexityScore);
    console.log(complexityScore);
    marketValue = document.getElementById("marketValue").value;
    marketValue = parseInt(marketValue);
    console.log(marketValue);


    let yep = techLimit + complexityScore + marketValue;

    // displaying output
    console.log(yep);
    document.getElementById("dunno").innerText = yep
}

//market value of constructed items
function sellValue() {
    fxDifficulty = document.getElementById("fxDifficulty").value;
    fxDifficulty = parseInt(fxDifficulty);
    console.log(fxDifficulty);
    ts = document.getElementById("ts").value;
    ts = parseInt(ts);
    console.log(ts);
    complexityScore = document.getElementById("compScore").value;
    complexityScore = parseInt(complexityScore);
    console.log(complexityScore);
    tf = document.getElementById("tf").value;
    tf = parseInt(tf);
    console.log(tf);
    mastRank = document.getElementById("mastRank").value;
    mastRank = parseInt(mastRank);
    console.log(mastRank);


    let getBank = fxDifficulty + ts + complexityScore + tf + mastRank;

    // displaying output
    console.log(getBank);
    document.getElementById("money").innerText = getBank
}


//make array for housing skill check bonus (from character level)




// function that references array for skill bonus then adds random d20 and logs the results of all


