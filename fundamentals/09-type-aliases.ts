let courseStatus: "draft" | "published" | "unpublished" | "archived" = "draft";

courseStatus = "archived";

type CourseStatus = "draft" | "published" | "unpublished" | "archived";
   
let courseStatus2: CourseStatus = "draft";

console.log("\n");
console.log("ESTATUS DO CURSO 1");
console.log(courseStatus);
console.log("TIPO DO CURSO 1");
console.log(typeof courseStatus);

console.log("\n");
console.log("ESTATUS DO CURSO 2");
console.log(courseStatus2);
console.log("TIPO DO CURSO 2");
console.log(typeof courseStatus2);

// -----------------------------------------------------------------------------
// Definindo uma nova variavel com o tipo já criado

let newStatus: CourseStatus = "unpublished";

// Podemos aplicar type aliases a variáveis do tipo object

type Course = {
    title: string,
    subtitle: string,
    lessonsCount3: number
};

let course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals...",
    lessonsCount3: 10
};

