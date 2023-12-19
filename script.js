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




function abilityModifierTable(){  //TODO link this function to the input id = "Bob"
    //user input
    var n = element.innerText("Bob");
        
    // converting user input via formula
    abilityModResult = Math.floor(n*0.5) -5
    console.log(abilityModResult);
}
//need to add changeinnerText for button to show result
        
    
//make a d20 random generator


//make array for housing skill check bonus (from character level)




// function that references array for skill bonus then adds random d20 and logs the results of all


