var _a, _b, _c, _d;
console.log("\n"); // pular linha
// ---------------------------------------------------------------------------
// VARIÁVEL UNDEFINED
// ==================
var title;
console.log("VARIÁVEL UNDEFINED");
console.log("title = " + title);
if (!title) {
    console.log("The value of title is not known yet.");
}
console.log("\n");
/*
    Caso a variável ainda não seja definida, será mostrada
    a mensagem que foi configurada acima.
*/
// ---------------------------------------------------------------------------
// VARIÁVEL NULL
// =============
var title2 = null;
console.log("VARIÁVEL NULL");
console.log("title 2 = " + title2);
if (!title2) {
    console.log("The value of title not known yet and the variable is null.");
}
console.log("\n");
/*
    Caso a variável ainda não seja definida, será mostrada
    a mensagem que foi configurada acima.
*/
// ---------------------------------------------------------------------------
// VERIFICANDO OPTIONAL CHAINING POR MEIO DE NESTED OBJETCTS
// =========================================================
var courseTest = {
    textFields: {
        title3: "Typescript Bootcamp"
    }
};
if ((_a = courseTest === null || courseTest === void 0 ? void 0 : courseTest.textFields) === null || _a === void 0 ? void 0 : _a.title3) {
    console.log("NESTED OBJECTS");
    console.log("The title is ".concat(courseTest.textFields.title3));
    console.log("\n"); // pular linha
}
// ---------------------------------------------------------------------------
// VERIFICANDO NULL COALESCING OPERATOR
// ====================================
var course5 = null;
var title5 = (_c = (_b = course5 === null || course5 === void 0 ? void 0 : course5.textFields5) === null || _b === void 0 ? void 0 : _b.title5) !== null && _c !== void 0 ? _c : "No title found";
console.log("NULL COALESCING OPERATOR");
console.log("title 5 = " + title5);
if ((_d = course5 === null || course5 === void 0 ? void 0 : course5.textFields5) === null || _d === void 0 ? void 0 : _d.title5) {
    console.log("The tile is ".concat(course5.textFields5.title5));
}
// ---------------------------------------------------------------------------
