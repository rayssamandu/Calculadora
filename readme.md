Olá, meu nome é Anne Rayssa, e sou Testadora Júnior da Compass.UOL. O presente repositório refere-se a elaboração dos desafios repassados no Challenge da 4ª Sprint, que versou sobre Javascript e Versionamento de Código.


Ao longo da Sprint, foram estudados os seguintes conteúdos:

1️⃣ Sistema GIT para versionamento de arquivos. 

2️⃣ Plataforma e ferramentas GitHub.

3️⃣ Linguagem de programação Javascript.

4️⃣ KOANS JS - Aprendizado sobre refatoração de testes 
automatizados.

5️⃣ TDD - Test Driven Development ou Desenvolvimento Guiado por Testes.

6️⃣ Bibliotecas como Mocha e Chai. 


Para o desenvolvimento da Sprint, necessário o preenchimento de alguns pré-requisitos, que serão listados a seguir:

1️⃣ Instalar o Visual Studio Code.
https://code.visualstudio.com/download 

2️⃣ Instalar o Git.
https://git-scm.com/downloads 

3️⃣ Criar uma conta no GitHub
https://github.com/ 

4️⃣ Tutorial para usar o Git e Github
https://www.youtube.com/watch?v=UBAX-13g8OM&t=1690s 

 
Por sua vez, para execução do Challenge foram observados os seguintes critérios:

1️⃣ Nome do repositório, branches e commits diários;

2️⃣ Organização das pastas, arquivos e código;

3️⃣ O README.md contendo as informações do projeto;

4️⃣ Instalação e funcionamento dos códigos;

5️⃣ Métodos robustos na classe calculadora.js;

6️⃣ Arquivo(s) de teste com testes eficientes;

7️⃣ Nome das variáveis e métodos;

8️⃣ Plágio!.
  

As pastas presentes na Main foram elaboradas ao longo da Sprint, com base no conteúdo passado e no conhecimento adquirido.

1️⃣ A primeira pasta, Aprendendo GIT, refere-se ao Tutorial para usar o Git e Github, na qual foi realizado o primeiro commit do repositório.

2️⃣ Na segunda pasta, Curso - Javascript, constam as atividades elaboradas ao longo do Curso de Javascript disponível no youtube através do link https://www.youtube.com/watch?time_continue=16370&v=i6Oi-YtXnAU&feature=emb_title.

3️⃣ A terceira pasta, Koans/javascript-koans, refere-se as atividades desenvolvidas em KOANS Javascript.

4️⃣ Por fim, na quarta pasta, TDD com Mocha e Chai, foi elaborada uma calculadora em javascript e executados alguns testes manuais. Nessa pasta consta o cerne principal do Challenge, que será melhor explicitada a seguir.


Calculadora com Mocha e Chai em Javascript:
A calculadora a seguir foi desenvolvida em javascript, utilizando o conhecimento adquirido nas aulas da Sprint 4 de TDD com Mocha e Chai.

Passo a passo para elaboração da Calculadora:

1️⃣ Ferramentas necessárias:
•	Node JS;
•	Visual Studio Code;
•	Bibliotecas Mocha e Chai;
•	Git;

2️⃣ Criando a Package.json:
•	Criar uma pasta vazia, nomeei a minha com "TDD com Mocha e Chai"
•	Com as ferramentas já instaladas, abrir a pasta criada, clicar com botão direito do mouse dentro dela e abir o Git Bash;
•	Com o Terminal do Git Bash aberto, iniciar o repositório através do comando "npm init -y". A seguir, será aberto um arquivo package.json dentro da pasta criada;
•	No terminal do git, digite o comando "code ." para abrir a IDE dentro do repositório. Na situação em apreço, estamos utilizando o VS Code;

3️⃣ Editando a Package.json:
•	Dentro do arquivo, logo abaixo da linha "main", digite "type": "module", para permitir que o projeto rode com os comando do node;
•	Na linha 8, onde está escrito "test", devemos substituir por "test": "mocha", para que seja possível rodar os testes utilizando a a biblioteca Mocha;

4️⃣ Instalando Mocha e Chai:
•	Dentro do VS Code, ao abrir o terminal digite "npm i -D mocha chai", para que as Bibliotecas Mocha e Chai sejam instaladas no projeto;

5️⃣ Calculadora:
•	Criar uma pasta denominada de "test" e, dentro dela, criar o arquivo "Calculadora.spec.js";
•	Criar uma pasta denominada "src" e, dentro dela, criar o arquivo "Calculadora.js";
•	No arquivo "Calculadora.js", criar a classe Calculadora, bem como as funções e métodos de cálculos.
•	Importar as bibliotecas Mocha e Chai, assert e a  classe Calculadora usando o import, para dentro do Calculadora.spec.js;
•	Os testes realizados estão dentro do comando "describe". Exemplo: 
  
describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })

6️⃣ Resultado dos testes:
•	Os resultados dos testes são obtidos ao digitar "npm test" no termina da IDE. Espera-se que todos os testes, 20 ao todos, sejam lidos, bem como devidamente executados, apresentando o status de "passing".

Operações presentes na calculadora:
1️⃣ Soma 
2️⃣ Subtração
3️⃣ Divisão
4️⃣ Multiplicação
5️⃣ Exponenciação
6️⃣ Raiz Quadrada
7️⃣ Raiz Cubica
8️⃣ Seno
9️⃣ Cosseno

Referências:
•	https://www.youtube.com/c/rafaellaballerini
•	https://mochajs.org/
•	https://www.chaijs.com/
•	https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

