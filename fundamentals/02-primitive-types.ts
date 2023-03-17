
// PRIMITIVE TYPES: NUMBER
// =======================

// Em typescript temos o tipo number, seja para inteiro ou float.
const lessonsCount = 10;
const total = lessonsCount +10;
console.log("total = ", total); // somando numeros



// PRIMITIVE TYPES: STRING
// =======================

const title = "Typescript Bootcamp";
const subtitle = "Learn the language fundamentals, build practical projects";


//const fullTitle  = title + ": " + subtitle;
//ou
const fullTitle = `Full title: ${title}: ${subtitle}`;

// console.log("Full title: " + fullTitle); // somandos strings
// ou
console.log(`${fullTitle}`);


/*
    Para strings temos a seguinte observação:
    " " -> " equivalente a '
    ' ' -> ' equivalente a "
    ` ` -> template string -> quando estamos agrupando strings
 */



// PRIMITIVE TYPES: BOOLEAN
// ========================

const published = true;

if(published) {
    console.log("The course is published.");
}


