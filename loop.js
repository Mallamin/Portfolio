/*

// variable called i that was initialised as 0
//while loop tested i against 3
// the body loop alerted i (console.log) and incremented i
// the final result was printing: 0, 1, 2

let i=0;

while (i<3) {
    console.log(i);
    i++;

}
// Declare a variable whose value is 3
//Test its value against 0
//Print the value and decrement it

let x=3;
while (x>0) { console.log(x);
    x--;

}

/*I want to build a string that looks like this:
 16 times
"Na Na Na Na Na ... Batman!"
  The string should be built by looping 16 times, 
 and at the end of the loop I want to print the result to the console
 

 
 let Z=0;
 while (Z<16) {
     console.log("Na");
Z++
       
}
console.log("Batman!")
// later look up Anthony's solutions for more inspirations

//Changing while loops to for loops (changed the first exercise)
for(let j=0;j<3;j++) {
    console.log(j)
}

//Changing for loops to while loops (by reodering the foregoing)
let h=0
while (h<3){
    console.log(h)
    h++
}

  ///////////////////////////////////////  
///for (var o=0; o<Infinity;) 
{
    while (o>100) console.log ("Yes") 
    
    while (o<100) console.log ("Try again")
     
}
// Antony's Explanation
while (!reachedTheDoor) {
    continueWalking();
}
openThenDoor();
*/

// // Print all the multiples of 20 from 0 to 100
// for (let l=0; l<=5;l++) {  
//     console.log(l*20);
// }
// // Print all the multiples of 20 from 100 to 0
// for (let m=0;m>=5;m--){
//     console.log(m/100)
// }

// Print all the multiples of 20 from 0 to 100
// - print multiples of 20
// - from 0
// - to 100

//for (let r = 0; r<=100; r++) {
   // let isDivisible = r % 20===0;
   // if (isDivisible){
   //     console.log(r);
    //}

//}

// print all numbers from 1 to 10
// for (let i = 1; i <= 10; i+=1) {
//     console.log(i);
// }

// print the sum of all numbers from 1 to 5
// 1 2 3 4 5 -> sum = 15

let total=0
for (let i=0;i<=5; i++){
total+=i}
console.log(total)

//The sum of all the numbers from 1 to 8
let total=0
for (let n=0;n<=8;n++){
    total +=n
    console.log(total)
  
}
