console.log("\n"); // pular linha

// ---------------------------------------------------------------------------

// VARIÁVEL UNDEFINED
// ==================

let title: string;
console.log("VARIÁVEL UNDEFINED")
console.log("title = " + title);

if(!title) {
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

let title2: string = null;
console.log("VARIÁVEL NULL")
console.log("title 2 = " + title2);

if(!title2) {
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

let courseTest = {
    textFields: {
        title3: "Typescript Bootcamp"
    }
}

if (courseTest?.textFields?.title3) {
    console.log("NESTED OBJECTS");
    console.log(`The title is ${courseTest.textFields.title3}`);
    console.log("\n"); // pular linha
}

// ---------------------------------------------------------------------------


// VERIFICANDO NULL COALESCING OPERATOR
// ====================================

let course5 = null;

const title5 = course5?.textFields5?.title5 ?? "No title found";
console.log("NULL COALESCING OPERATOR");
console.log("title 5 = " + title5);
if (course5?.textFields5?.title5) {
    console.log(`The tile is ${course5.textFields5.title5}`);
}


// ---------------------------------------------------------------------------