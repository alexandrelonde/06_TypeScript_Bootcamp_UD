/*
    The Singleton In Typescript - An Object-Oriented Design Pattern

   O Singleton em Typescript - Um Padrão de Projeto Orientado a Objetos
   
   Padrões de projeto, ou "design patterns" em inglês, são soluções reutilizáveis 
   para problemas comuns encontrados em projetos de software. Eles não são um código 
   pronto para ser diretamente inserido em sua aplicação, mas sim uma descrição ou 
   modelo de como resolver certos problemas que podem ser adaptados para diferentes 
   situações.
 
   No contexto do TypeScript, que é uma extensão tipada de JavaScript, os padrões de 
   projeto ajudam a lidar com desafios específicos do desenvolvimento de software 
   orientado a objetos e tipado.
   
   Alguns padrões de projeto comuns em TypeScript incluem:
   
   Singleton: Garante que uma classe tenha apenas uma instância e fornece um ponto 
   global de acesso a essa instância.
   
   Factory: Proporciona uma interface para criar instâncias de classes, permitindo 
   que subclasses decidam que classes instanciar.
   
   Decorator: Permite adicionar responsabilidades adicionais a objetos dinamicamente.
   
   Observer: Permite que um objeto publique mudanças no seu estado para que outros 
   objetos possam reagir.
   
   Strategy: Define uma família de algoritmos, encapsula cada um deles e torna-os 
   intercambiáveis.
   
   Adapter: Permite que classes com interfaces incompatíveis trabalhem juntas, convertendo 
   a interface de uma classe em outra interface esperada pelos clientes.
   
   TypeScript, com seu sistema de tipos, pode oferecer uma implementação mais clara e segura 
   de certos padrões de projeto em comparação com JavaScript puro. A capacidade de definir 
   tipos e interfaces claros, assim como a utilização de decoradores e outras características 
   avançadas do TypeScript, pode auxiliar na implementação e no entendimento desses padrões.
   
   Em resumo, padrões de projeto em TypeScript são abordagens estruturadas para resolver 
   problemas comuns de design de software no contexto do desenvolvimento TypeScript. 
   Eles ajudam a criar sistemas mais organizados, reutilizáveis e manuteníveis.
*/

/*
    O Singleton
    -----------
   
   O Singleton é um padrão de projeto que visa garantir que uma classe tenha apenas uma instância 
   e forneça um ponto global de acesso a essa instância. Seu principal propósito é controlar o 
   acesso a recursos compartilhados, como conexões de banco de dados, sockets ou qualquer recurso 
   que deva ser limitado a uma única instância.
   
   
   Origem
   ------
   
   O Singleton é um dos 23 padrões de projeto originais descritos no livro "Design Patterns: Elements 
   of Reusable Object-Oriented Software", escrito por Erich Gamma, Richard Helm, Ralph Johnson e John 
   Vlissides (frequentemente referido como o "Gang of Four" ou GoF). O livro, publicado em 1994, é 
   considerado uma das obras mais influentes no campo de design de software.
   
   
   Contexto Prático
   ----------------
   
   Imagine que você está construindo um sistema de configuração para um aplicativo. Você deseja carregar 
   as configurações do disco uma vez e, em seguida, usá-las em várias partes do aplicativo. Se você 
   instanciar objetos de configuração múltiplas vezes, pode acabar com várias cópias dessas configurações 
   em memória, levando a inconsistências. Usando o padrão Singleton, você garante que apenas uma instância 
   das configurações seja carregada e acessada globalmente, garantindo consistência
*/

/*
    Vamos aplicar um exemplo prático de singleton e explicar 
    como cada passo é estruturado
*/

class Configuracao {
    private static instancia: Configuracao;
    public nomeDoAplicativo: string = "Meu App";

    // Fazemos um construtor privado para evitar a criação de novas instâncias externamente

    constructor(

    ) {

    }

    // Método estático
    public static getInstancia(): Configuracao {
        // Se não houver uma instância, cria uma.
        if(!Configuracao.instancia) {
            Configuracao.instancia = new Configuracao();
        }
        //Retorna a única instância
        return Configuracao.instancia;
    }
}

// Testando a nossa lógica
let configuracao1 = Configuracao.getInstancia();
let configuracao2 = Configuracao.getInstancia();

// Imprimindo no console o resultado das configurações
console.log(configuracao1.nomeDoAplicativo);
console.log(configuracao2.nomeDoAplicativo);

// Ambos os objetos apontam para a mesma instância
console.log(configuracao1 === configuracao2);