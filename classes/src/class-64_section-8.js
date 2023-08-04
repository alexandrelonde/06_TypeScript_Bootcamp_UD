// Vamos criar uma classe:
var CourseDetail = /** @class */ (function () {
    // Criando o construtor da classe
    /*
        Um construtor é uma função especial, um método que faz parte da classe e é usado para inicializar
        a classe e nada mais. O único momento em que podemos chamar um construtor é quando estamos criando
        uma nova instância da classe.
    */
    function CourseDetail(
    // Aqui vão os parâmetros do construtor que nada mais são do que os atributos da classe
    title, subtitle, creationDate) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
        /*
            No corpo do construtor, vamos usar esses dados para inicializar os dados da classe.
            Portanto, precisamos atribuir aqui o título à variável título, o subtítulo à variável
            subtítulo, e a data de criação à variável data de criação. Para isso, utilizamos a
            palavra "this" que significa este, esta, isto (ou esse).
        */
    }
    // Então adicionamos alguns comportamentos para a classe que nada mais são que os métodos
    /*
        Métodos são funções que estão declaradas dentro do corpo da classe e são atreladas à mesma.
        Isso quer dizer que, além de atributos, que podem ser de algum tipo de variável ou classe,
        as classes também possuem funções dentro delas que são os métodos, ou seja, os comportamentos
        atrelados a esta classe.

        Um método é como uma função simples, mas está definido dentro do corpo de uma classe e tem
        acesso à palavra-chave "this", assim como em um construtor.
        
        Observação: também pudera, pois o construtor é um tipo de método utilizado para inicializar a
        classe. Se eu estou chamando o construtor, estou utilizando a palavra "new", se eu estou me
        referindo a algum atributo da classe, estou utilizando a palavra "this".
    */
    // Método da classe que calcula a idade do curso em dias
    CourseDetail.prototype.ageDetail = function () {
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
    return CourseDetail;
}()); // ========== Aqui é o fim da classe
// Criando uma nova instância da classe
var courseDetail = new CourseDetail("TypeScript Bootcamp", "Learn the language fundamentals, build practical projects", new Date(2010, 1, 1));
/*
    Como é uma variável do tipo da classe CourseDetail, passamos os parâmetros
    necessários para instanciar a classe.
*/
// Imprimindo no console o retorno do método age da instanciação acima
console.log(courseDetail.title);
console.log(courseDetail.ageDetail());
/*
    Curiosidade: na aula, o professor fica mencionando a palavra "blueprint" que é o mesmo que modelo
    na nossa lingua portuguesa, mas dentro do contexto do ingês.
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*
    Agora vamos colocar o código mais limpo, sem comentários para entender a estrtura. Para que não
    haja duplicidade, colocaremos o algarismo 2 onde for pertinente.
*/
var CourseDetail2 = /** @class */ (function () {
    function CourseDetail2(title, subtitle, creationDate) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    // Métodos
    CourseDetail2.prototype.ageDetail = function () {
        var ageInMs = new Date().getTime() - this.creationDate.getTime();
        // Corrigindo a conversão de milessegundos para dias
        var ageInDays = ageInMs / (1000 * 60 * 60 * 24);
        // Corrigindo a conversão de dias para anos
        var ageInYears = ageInDays / 365;
        return Math.round(ageInYears);
    };
    return CourseDetail2;
}());
// Criando uma nova instância da classe
var courseDetail2 = new CourseDetail2("TypeScript Bootcamp 2", "Learn the language fundamentals, build practical projects", new Date(2011, 1, 1));
// Imprimindo no console o retorno do método 
console.log(courseDetail2.title);
console.log(courseDetail2.ageDetail());
