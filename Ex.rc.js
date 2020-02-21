//Printing all items
let array = [7, 6, 8, 9, 3, 2]
//           0=7 ,1=6 , 2=8, 3=9,4=2 array index
for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}
// Doubling

// 1. create a function
// 2. initialize some variable
// 3. loop over the items
//    1. update that variable
// 4. return the final value of that variable

function doubleAll(arr) {
  let doubles = []
  for (let item of arr) {
    doubles.push(item * 2)
  }
  return doubles
}

console.log(doubleAll(array))
//Checking for even number
