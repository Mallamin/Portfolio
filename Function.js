// // function printHello() {

// //     console.log("Hello world")
// // }

// function printHello() {
//     let="who"
//     console.log(`Hello ${Who}!`)
// }


// /*Context: Devil May Cry
// Stylish Ranking

// 1 = Dull!
// 5 = Cool!
// 10 = Bravo!
// 15 = Awesome!
// 20 = Stylish

// Create a function that, given the amount of damage you 
// inflict to enemies, will return the related stylish ranking string.

// Hint: use the switch statement
// */

// //Solution
// function getStylishRanking(Damage) {
        
// let W= Damage

// switch (W) {
//     case 1:
//         console.log("Dull!")
//         break
//     case 5:
//         console.log("cool!")
//         break
//     case 10:
//         console.log("Bravo!")
//         break
//     case 15:
//         console.log("Awesome!")
//         break
//     case 20:
//         console.log("Stylish")
        
//  }
// }

// //Rewrite the function using "?" or "||" (Exercise from slides)
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm("Did parents allow you?");
//     }
//   }

//   // Solution1
//   function checkAge(age) {
//     return (age > 18) ? true : confirm("Did parents allow you?");
//   }

//   //solution 2
//   function checkAge(age) {
//     return (age > 18) || confirm("Did parents allow you?");
//   }

//   // Exercise (Buttons)
//   /* 
//    *****
//    *****
//    *****
//   */

//  function buildRow(columns) {
//     let row = '';
//     for (let i = 0; i < columns; i++) {
//       row += '*';
//     }
//     return row + "\n";
// }

// function buildButton(rows, columns) {
//     let button = "";
//     for (let e=0; e< rows; e++){
//         button += buildRow(columns) + "\n"
   
//     }
//     return (button)
// } 

/* 
   Exercise         
   ******
   *    *
   *    *
   ******
*/

// 1. how to build a 'full' row
// 2. how to build an 'empty' row
// 3. how to build the whole button, knowing that:
//    1. the first and last rows are always 'full'
//    2. all other rows in between are always 'empty'

//Solution
// function fullRow(n){
//     let row="";
//     for(let i=0;i<n;i++)

//         row+= "*"
//     return row
// }
// function emptyRow (n){
//     let row="*";
//     for(let i=0;i<n-2;i++)

//         row+= " "
//     return row+"*"+"\n"
//}

// function buildEmptyButton(rows, columns) {
//     // console.log(fullRow (columns))   
//     // console.log(emptyRow(columns))   
//     // console.log(emptyRow(columns))   
//     // console.log(fullRow(columns)) 
// }

//console.log(buildRow(5)  + emptyRow(5) + emptyRow(5)  + buildRow(5))
/* BuildTriangle (rows)(Pyramid)
      *
     ***
    *****
   *******

*/

//Solution (Pyramid)

/*buildTriangle (4)

 function buildTriangle(rows) {
    let rws= "*"
    let space= (rws-2)
    let asterisks= "*"
    for (H=0;H< rws;H++){
        console.log(space+asterisk)
        space= space (-2)
    }
}*/

// funct
// let calcAreaFootballField = function(width, height) {
//     return width * height;
//   }
  
//   console.log(calcAreaFootballField(50,100));


/*

buildBox(rows, columns):

*****
*****
*****

buildRow(columns):

*****

*/

function buildRows(n){
        let row="";
      for(let i=0;i<n;i++)
    
           row+= "*"
       
       console.log(row)

    }

buildRows(5)

