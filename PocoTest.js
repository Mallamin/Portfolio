/*Write a JavaScript program that:

- Asks the user for the height in meters
- Asks the user for the weight in kilograms
- Calculates the Body Mass Index as BMI = kg/m^2
- If the BMI is in the range [0 - 18.4], print the value and "underweight"
- If the BMI is in the range [18.5 - 24.9], print the value and "normal"
- If the BMI is in the range [25 - ], print the value and "overweight"*/

let height = prompt('Give me the height in meters')
let weight = prompt('Give me the weight in kilograms')

let bmi = weight / height ** 2

if (bmi >= 0 && bmi < 18.5) {
  console.log(bmi, 'underweight')
} else if (bmi >= 18.5 && bmi < 25) {
  console.log(bmi, 'normal')
} else {
  console.log(bmi, 'overweight')
}

