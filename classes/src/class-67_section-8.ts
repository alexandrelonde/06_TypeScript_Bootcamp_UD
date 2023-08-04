
class CourseDetail67 {

    constructor(
        private _title: string,
        private subtitle: string,
        private creationDate: Date
    ) {

    }

    // Métodos

    set title(newTitle: string) {
        if (!newTitle) {
            throw "Title cannot be empty"
        }

        this._title = newTitle;

        /*
            Então, se acontecer de termos uma string vazia, vamos lançar um erro.
            Vamos simplesmente dizer que o título não pode estar vazio. E se não for 
            esse o caso, se o título não for uma string vazia, então e somente então 
            iremos atribuí-lo aqui à propriedade "_title".

            obs.: "throw" significa lançar
        */
    }

    get ageDetail() {
        const ageInMs = new Date().getTime() - this.creationDate.getTime()

        // Corrigindo a conversão de milessegundos para dias
        const ageInDays = ageInMs / (1000 * 60 * 60 * 24);

        // Corrigindo a conversão de dias para anos
        const ageInYears = ageInDays / 365;

        return Math.round(ageInYears);
    }
}

const courseDetail67 = new CourseDetail67(
    'TypeScript BootCamp',
    'Testing the getters and setters',
    new Date(2022,2,2)
);

courseDetail67.title = "New Value";

console.log(courseDetail67);


/*
    Se eu estou pegando um valor de retorno de um método (de uma função) dentro
    da classe em questão, eu utilizo o get. Se eu tenho que alterar o valor de 
    uma propriedade (atributo) dentro de um método da classe (função), eu utilizo
    o set.

    get significa -> pegar (pegue o valor de, ou seja, tem de haver um return)
    set significa -> definir (defina o valor para)
*/

/*
    VALE DESTACAR UMA EXPLICAÇÃO IMPORTANTE!!!

    Os modificadores de acesso em TypeScript (e em outras linguagens orientadas a objetos) 
    são palavras-chave que definem a visibilidade ou o escopo de uma variável, propriedade 
    ou método dentro de uma classe. Em TypeScript, você tem três modificadores de acesso: 
    public, private e protected.

    public: Pode ser acessado de qualquer lugar. Este é o valor padrão, se nenhum 
            modificador de acesso for especificado.

    private: Pode ser acessado apenas dentro da classe que o define.

    protected: Pode ser acessado na classe que o define e em quaisquer subclasses.

    Os métodos get e set não são, eles próprios, modificadores de acesso, mas podem ter 
    modificadores de acesso. Eles são usados para obter ou definir o valor de uma propriedade 
    de um objeto. Isso é conhecido como encapsulamento de propriedades.
*/

/*
    CURIOSIDADE A RESPETO DO ARQUIVO "tsconfig.json"

    O arquivo tsconfig.json em um projeto TypeScript serve para definir e controlar as 
    configurações de compilação do TypeScript para aquele projeto específico. Você pode 
    especificar várias opções, incluindo mas não se limitando a:

    target: Especifica a versão do ECMAScript que o código TypeScript será transpilado. 
            Por exemplo, você pode especificar "ES5", "ES6", "ES2016", etc.

    module: Determina o sistema de módulos que será usado. Exemplos incluem "commonjs", 
            "amd", "system", "umd", "es2015", etc.

    strict: Habilita uma série de verificações de tipo mais rigorosas para melhorar a 
            robustez do código. Isso inclui a verificação de nulidade estrita, tipos 
            de retorno de função estritos, etc.

    outDir: Especifica a pasta onde o compilador TypeScript depositará o código JavaScript 
            transpilado.

    rootDir: Especifica o diretório raiz dos arquivos de origem TypeScript.

    include e exclude: Estes permitem que você especifique quais arquivos ou pastas devem 
                       ser incluídos ou excluídos da compilação.

    Há muitas outras opções que você pode usar para personalizar o comportamento do compilador 
    TypeScript. As configurações em tsconfig.json permitem que você ajuste a compilação do 
    TypeScript para atender às necessidades específicas do seu projeto.
*/