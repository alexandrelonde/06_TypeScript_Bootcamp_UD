// Definindo a classe
var Course = /** @class */ (function () {
    // Construtor da classe - Inicializando a classe
    function Course(
    // Parâmetros do construtor
    title, subtitle, creationDate) {
        // Inicialização das propriedades da instância -> usando this
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    // Método da classe que calcula a idade do curso em dias
    Course.prototype.age = function () {
        var ageInMs = new Date().getTime() - this.creationDate.getTime();
        // Corrigindo a conversão de milessegundos para dias
        var ageInDays = ageInMs / (1000 * 60 * 60 * 24);
        // Corrigindo a conversão de dias para anos
        var ageInYears = ageInDays / 365;
        return Math.round(ageInYears);
        /*
            A função Math.round é uma função utilizada para arredondar o
            número para o número inteiro mais próximo. É uma função utilizada
            tanto em JavaScript quanto em TypeScript.
        */
    };
    return Course;
}());
// Criando uma nova instância da classe
var course = new Course("TypeScript Bootcamp", "Learn the language fundamentals, build practical projects", new Date(2000, 1, 1));
/*
    A diferença entre instanciação e criar uma nova instância:
    Instanciação é o processo, e a instância é resultado do
    processo. Quando estamos fazeno um new Course, estamos
    fazendo uma instanciação, e adicionando uma nova instância
    course.

 */
// Imprimindo no console o retorno do método age da instanciação acima
console.log(course.age());
console.log(course.title);
