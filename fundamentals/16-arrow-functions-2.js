// Vamos criar uma função normal
function saveCourse(course, callback) {
    setTimeout(function () {
        callback("success");
    }, 1000);
}
// Para utilizarmos arrow functions
function saveCourse2(course, callback) {
    setTimeout(function () {
        callback("success");
    }, 1000);
}
/*
    Temos uma função normal de dentro dos parâmetros dessa função temos
    outra função, ou seja, uma função passada como parâmetro, onde esta
    função se chama callback, e é do tipo Function.
    Vale lembrar que callback não é uma palavra reservada.
*/
saveCourse({ title: "TypeScript Bootcamp" }, function () {
    console.log("Save Successful!");
});
var cb2 = function () { return console.log("Save successful 2!"); };
saveCourse2({ title: "TypeScript Bootcamp" }, cb2);
