
// Variável do tipo string 
let title = "Typescript Bootcamp";


// Variável do tipo literal "Typescript Bootcamp"
const title2 = "Typescript Bootcamp";

// É como se escrevessemos dessa forma:
// const title2: "Typescript Bootcamp" = "Typescript Bootcamp";

// -------------------------------------------------

// Variável do tipo number
let lessonsCount = 10;

// Variável do tipo literal 10
const lessonsCount2 = 10;

// É como se escrevessemos dessa forma:
// const lessonsCount2: 10 = 10;

// -------------------------------------------------

let pageSize: 10 | 15 | 20 = 10;
/*
    Aqui utilizamos um exemplo com union types e literal type
    Vamos supor que uma pagina pode ter dimensão 10 ou 15 ou 20
    e no meio do programa não pode ser colocado outro numero 
    nessa variável. Então escrevemos dessa forma para proteger
    o valor da variável que tem tipo literal de union types.
*/

let courseStatus: "draft" | "published" | "unpublished" | "archived" = "draft";

courseStatus = "archived";

/*
    Podemos fazer isso com multiplos valores de string também
*/


