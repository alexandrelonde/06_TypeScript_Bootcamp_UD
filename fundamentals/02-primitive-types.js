// ---------------------------------------------------------------------------
// PRIMITIVE TYPES: NUMBER
// =======================
// Em typescript temos o tipo number, seja para inteiro ou float.
var lessonsCount = 10;
var total = lessonsCount + 10;
console.log("\n"); // pular linha
console.log("PRIMITIVE TYPES: NUMBER");
console.log("total = ", total); // somando numeros
console.log("\n"); // pular linha
// ---------------------------------------------------------------------------
// PRIMITIVE TYPES: STRING
// =======================
var title = "Typescript Bootcamp";
var subtitle = "Learn the language fundamentals, build practical projects";
//const fullTitle  = title + ": " + subtitle;            "somando" strings 
//ou
var fullTitle = "Full title: ".concat(title, ": ").concat(subtitle); // utilizando template strings
// console.log("Full title: " + fullTitle); // somandos strings
// ou
console.log("PRIMITIVE TYPES: STRING");
console.log("".concat(title));
console.log("".concat(subtitle));
console.log("".concat(fullTitle));
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
var published = false; // Estabelecemos a condição de published aqui
if (published) {
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
// TYPE ANOTATION
// ==============
printCourse(title, subtitle, lessonsCount); // chamando a função
// Definindo a função
function printCourse(title, subtitle, lessonsCount) {
    var fullTitle = title + subtitle;
}
// ---------------------------------------------------------------------------
