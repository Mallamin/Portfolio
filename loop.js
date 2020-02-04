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
 */

 
 let Z=0;
 while (Z<16) {
     console.log("Na");
Z++
       
}
console.log("Batman!")
// later look up Anthony's solutions for more inspirations

//translate while loops to for loops (changed the first exercise)
for(let j=0;j<3;j++) {
    console.log(j)
}