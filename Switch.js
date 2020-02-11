let card = "8"
let value

if (card === "A"){                         
    value = 1
} else if (card=== "3"){
    value=11
}else if (card==="Q"){
    value="12"
} else if (card==="k") {
    value=13
}else{
    value=Number(card)
}
// console.log(card, value)

// checkout Antony's Solution on Github

let A=13
switch (A) {
    case 1:
        console.log( "not enough")
        break

    case 3:
        console.log("too much")
            break
            
    case 11:
        console.log("still too much")
        break

    case 12:
        console.log("again still too much")
        break

    case 13:
        console.log("I say again too much")
        break

    default: console.log ("tried all values")

}

//Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

//Solution
let browser;

if (browser==="Edge") {
    console.log("You've got the Edge!")
} else if (browser==="Chrome" || browser === "Firefox"||browser=== "Safari"||browser==="Opera"){

console.log("Okay we support these browsers too")

}else{
    console.log('We hope that this page looks ok!')
}




//Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');



if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

//Solution
let a = +prompt('a?', '');

switch (a) {
    case 0:
       console.log(0) 
       break
    case 1:
       console.log (1)
       break
    case 2:
    case 3:
        console.log("2,3")

        
}    
    
