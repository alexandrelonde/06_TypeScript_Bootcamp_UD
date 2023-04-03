
// ---------------------------------------------------------------------------

// PRIMITIVE TYPES: NUMBER
// =======================

// Em typescript temos o tipo number, seja para inteiro ou float.
const lessonsCount = 10;
const total = lessonsCount + 10;

console.log("\n"); // pular linha
console.log("PRIMITIVE TYPES: NUMBER");
console.log("total = ", total); // somando numeros
console.log("\n"); // pular linha

// ---------------------------------------------------------------------------

// PRIMITIVE TYPES: STRING
// =======================

let title = "Typescript Bootcamp";
let subtitle = "Learn the language fundamentals, build practical projects";


//const fullTitle  = title + ": " + subtitle;            "somando" strings 
//ou
let fullTitle = `Full title: ${title}: ${subtitle}`; // utilizando template strings

// console.log("Full title: " + fullTitle); // somandos strings
// ou
console.log("PRIMITIVE TYPES: STRING");
console.log(`${title}`);
console.log(`${subtitle}`);
console.log(`${fullTitle}`);
console.log("\n"); // pular linha

/*
    TEMPLATE STRINGS
    ----------------

    Para strings temos a seguinte observação:
    " " -> " equivalente a '
    ' ' -> ' equivalente a "
    ` ` -> template string -> quando estamos agrupando strings
 */

// ---------------------------------------------------------------------------

// PRIMITIVE TYPES: BOOLEAN
// ========================

const published = false; // Estabelecemos a condição de published aqui

if(published) {
    console.log("PRIMITIVE TYPES: BOOLEAN");
    console.log("The course is published.");
    console.log("\n"); // pular linha
}
else {
    console.log("PRIMITIVE TYPES: BOOLEAN");
    console.log("The course is NOT published.");
    console.log("\n"); // pular linha
}

// ---------------------------------------------------------------------------

// !!!!! TYPE ANOTATION
// ====================

printCourse (title, subtitle, lessonsCount); // chamando a função

// Definindo a função
function printCourse(title: string, subtitle: string, lessonsCount: number) {
    let fullTitle = title + subtitle;
    let functionLessonsCount = lessonsCount;
    console.log("TYPE ANOTATION - FUNCTION");
    console.log(`${fullTitle}`);
    console.log(`The number of lessons is: ${functionLessonsCount}`);
    // Vamos fazer um teste para verificar o tipo da variável
    // Para isso vamos utilizar a função "typeof"
    console.log("The type of the variable fullTitle is: " + typeof fullTitle);
    console.log("\n"); // pular linha
}

// ---------------------------------------------------------------------------


// PRIMITIVE TYPES: OBJECT
// =======================
let courseObject = {
    titleObject: "Typescript Bootcamp",
    subtitleObject: "Learn the language fundamentals, build practical projects",
    lessonsCountObject: 10,
    author: {
        firstName: "Vasco",
        lastName: "Cavalheiro"
    }
};




/*
    Após atribuir valores às propriedades da variável object, o typescrip
    infere o tipo das propriedades do objeto. E para ver o tipo da variável
    objeto, vamos fazer um teste de imprimir o tipo da variável object.
 */
console.log("PRIMITIVE TYPES: OBJECT");
console.log("The type of the variable course is: " + typeof courseObject);
console.log(`The first name of the author: ${courseObject.author.firstName}`);
console.log(`The first name of the author: ${courseObject.author.lastName}`);



// !!!!! NESTED OBJECT TYPES
// =========================




// ---------------------------------------------------------------------------