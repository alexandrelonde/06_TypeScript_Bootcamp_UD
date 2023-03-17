// PRIMITIVE TYPES: NUMBER
// =======================
// Em typescript temos o tipo number, seja para inteiro ou float.
var lessonsCount = 10;
var total = lessonsCount + 10;
console.log("total = ", total); // somando numeros
// PRIMITIVE TYPES: STRING
// =======================
var title = "Typescript Bootcamp";
var subtitle = "Learn the language fundamentals, build practical projects";
//const fullTitle  = title + ": " + subtitle;
//ou
var fullTitle = "Full title: ".concat(title, ": ").concat(subtitle);
// console.log("Full title: " + fullTitle); // somandos strings
// ou
console.log("".concat(fullTitle));
/*
    Para strings temos a seguinte observação:
    " " -> " equivalente a '
    ' ' -> ' equivalente a "
    ` ` -> template string -> quando estamos agrupando strings
 */
// PRIMITIVE TYPES: BOOLEAN
// ========================
var published = true;
if (published) {
    console.log("The course is published.");
}
