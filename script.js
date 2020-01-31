/* The next line will show a popup message */
// alert ('Hello world!') // see? it works!
const FIRST_NAME= "Mohamed Lamin";
const LAST_NAME="Jalloh";
const SEPARATOR= " ";
// declare a variable named "fullName"
// it's value should be your first name <space> your last name
// the result should be a concatenation of the previous constants
//e.g"Mohamed Lamin Jalloh"
let fullName= FIRST_NAME + SEPARATOR + LAST_NAME;
const MY_ADDRESS= "Via Giordano Bruno, 195\n10134 Torino (TO)\nItaly";
// An address usually consists of street, civic number,zip code, city, province, and country.
//Declare a constant for every piece of the address and then concatenate all in a multiline string called "address"
const STREET_NAME= "Via Giordano Bruno";
const CIVIC_NUMBER= "195";
const ZIP_CODE= "10134";
const CITY="Torino";
const PROVINCE= "TO";
const COUNTRY="Italy";
//const SEPARATOR=" ";
const NEW_LINE= "\n"

let ADDRESS=STREET_NAME+"," +" " + CIVIC_NUMBER+" "+ NEW_LINE + ZIP_CODE+" "+CITY+" "+ "("+PROVINCE+")" + NEW_LINE+COUNTRY;

let admin
let name= "John"
admin=name
alert(admin)

//Template StringFollowing

//const newAddress = `hello ${FIRST_NAME}
//${LAST_NAME}` // 'hello ' + FIRST_NAME + '\n' + LAST_NAME
const newAddress=` ${STREET_NAME} ${CIVIC_NUMBER}
${ZIP_CODE}  ${CITY} ${PROVINCE}
${COUNTRY}`

// Build your own cv
// Your CV should have your work experience, studies,
// your soft skills and the languages that you speak. All of these should be 
//variables that you can concatenate into a sincle "CV" variable.
let WORK_EXPERIENCE1= "AISEC ITALIA"
let WORK_EXPERIENCE2="iEARN"
let WORK_EXPERIENCE3= "EBSL LTD"

let EDUCATION_EXPERIENCE1= "CCA"
let EDUCATION_EXPERIENCE2= "UNITO"
let EDUCATION_EXPERIENCE3="FBC, USL"

let LANGUAGES_SPOKEN1="Pulaar/fulani/felata"
let LANGUAGES_SPOKEN2="Krio/Pidgin"
let LANGUAGES_SPOKEN3="English"
let LANGUAGES_SPOKEN4="French"
let LANGUAGES_SPOKEN5="Italian"
let SOFT_SKILLS1="A"
let SOFT_SKILLS2="B"
let SOFT_SKILLS3="C"

let CV=`Work
${WORK_EXPERIENCE1}
 ${WORK_EXPERIENCE2} 
 ${WORK_EXPERIENCE3}

Education 
${EDUCATION_EXPERIENCE1} 
${EDUCATION_EXPERIENCE2} 
${EDUCATION_EXPERIENCE3}

Languages 
${LANGUAGES_SPOKEN1} 
${LANGUAGES_SPOKEN2} 
${LANGUAGES_SPOKEN3} 
${LANGUAGES_SPOKEN4} 
${LANGUAGES_SPOKEN5}


Soft Skills 
${SOFT_SKILLS1} 
${SOFT_SKILLS2} 
${SOFT_SKILLS3}`




