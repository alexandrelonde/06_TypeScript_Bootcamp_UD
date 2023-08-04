var Course70 = /** @class */ (function () {
    function Course70(_title, subtitle, creationDate
    /*
        MUITO CUIDADO!
        private title: string, ------------> definindo o tipo da varíavel (type anotation)
        pritate title = "Título inicial", -> inicializando
    */
    ) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDate === void 0) { creationDate = new Date(2021, 2, 3); }
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
        // Trabalhando a variável estática no corpo do construtor
        Course70.TOTAL_COURSES++;
    }
    Object.defineProperty(Course70.prototype, "title", {
        // Métodos
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            if (!newTitle) {
                throw "Title cannot be empty";
            }
            newTitle = this._title; // Utilizamos o "this" para definir um valor
        },
        enumerable: false,
        configurable: true
    });
    Course70.TOTAL_COURSES = 0; // propriedade estática e tem por padrão toda as letras em maiúsculo
    // Essa propriedade estática está associada a todas as instancias da classe
    /*
        Ou seja, uma propriedade estática pertece a propria classe e não a uma instancia
        em específico. Note que a nossa propriedade estática está associada ao numero total
        de cursos instanciados na classe. Então quer dizer que uma propriedade estática
        fára parte da classe e tera seu valor alterado e não mais de uma instanciação, por
        isso, estática.
    */
    // Podemos também declarar constantes aqui
    Course70.TYPESCRIPT_TITLE = "TypeScript Bootcamp";
    return Course70;
}());
Course70.TOTAL_COURSES;
var typescript70 = new Course70(Course70.TYPESCRIPT_TITLE);
/*
    ou seja, após eu chamar o construtor, Course70.TOTAL_COURSES incrementa
    uma unidade, com isso, no final temos o número 1 no console.
*/
console.log(typescript70.title);
console.log(Course70.TOTAL_COURSES);
