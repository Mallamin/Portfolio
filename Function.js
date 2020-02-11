// function printHello() {

//     console.log("Hello world")
// }

function printHello() {
    let="who"
    console.log(`Hello ${Who}!`)
}


/*Context: Devil May Cry
Stylish Ranking

1 = Dull!
5 = Cool!
10 = Bravo!
15 = Awesome!
20 = Stylish

Create a function that, given the amount of damage you 
inflict to enemies, will return the related stylish ranking string.

Hint: use the switch statement
*/

//Solution
function getStylishRanking(Damage) {
        
let W= Damage

switch (W) {
    case 1:
        console.log("Dull!")
        break
    case 5:
        console.log("cool!")
        break
    case 10:
        console.log("Bravo!")
        break
    case 15:
        console.log("Awesome!")
        break
    case 20:
        console.log("Stylish")
        
 }
}
