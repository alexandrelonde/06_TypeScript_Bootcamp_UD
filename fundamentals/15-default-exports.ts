
// Exportanto uma constante
export const COURSE_TOTAL = 20;


// Exportando um objeto
export const TYPESCRIPT_COURSE = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals...",
    lessonsCount: 10
};


// Exportando uma função
// Se esse export for muito mais utilizado que os outros exports, acrescentamos default
export default function printCourse(course) {
    console.log(`The course title is ${course.title}`);
}

