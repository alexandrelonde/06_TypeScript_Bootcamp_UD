// Criando uma interface
interface CourseInterface {
    readonly title: string; // Propriedade somente leitura que não pode ser alterada
    subtitle: string;
    lessonsCount?: number; // a ? torna esse propriedade opcional
}

// Criando uma variável e atribuindo à interface
// Lembrando -> interface -> tipo personalizado de objeto
const courseOne: CourseInterface = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals...",
    lessonsCount: 10
};

// Criando outra variável do tipo objeto e aproveitando a interface
const courseTwo: CourseInterface = {
    title: "Angular",
    subtitle: "Learn the language fundamentals...",
};

// Mostrar o curso 1 no console
console.log("CURSO 1");
console.log(courseOne);