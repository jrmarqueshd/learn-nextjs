# NextJs

## Conhecendo a estrutura initial do projeto

A estrutura initial do Next.js na versão 9.5.2 vem com algumas pastas que mostram um pouco como o framework funciona. Dentre elas estão:

### Pages

- pages: Como o próprio nome já diz, é a pasta que possui as páginas da aplicação, o legal do next pelo que entendi até agora, é que as rotas são dinâmicas, ou seja, não cada arquivo que eu criar na pasta página representará uma rota na aplicação, o que torna desnecessário a utilização de aplicações para esse tipo de necessidade. Para impedir um arquivo dentro da pasta pages vire umarota é só colocar um \_ no inicio do arquivo e isso fará com que a aplicação entenda que aquilo tratasse de um arquivo a parte e não está relacionado à rotas na aplicação.

- pages/api: É uma pasta utilizada para trabalhar com microsserviços direto pelo front (como um 'monorepo' com muitas aspas), achei fantástico a implementação direta pelo front, mas ainda não sei se é necessário, uma vez que o mesmo pode ser feito em uma aplicação apartada, pode ser que eu mude minha opinião mais pra frente e edite esse comentário kkk.

- pages/\_app.js: Ainda não entendi muito bem pra que server, mas parece que substitui o App tradicional que tinhamos no React, e serve como um wrapper por volta de todas as páginas. O que li na documentação e que me deu um pequeno BOOOM na cabeça é que esse wrapper permite que trafeguemos ESTADOS entre as páginas.

- pages/index.js: Representa a página raiz da aplicação, o que não é novidade no ReactJs, sendo que todos os arquivos index.js criados dentro de uma pasta XPTO. simbolizam o arquivo principal daquela pasta, logo, nesse caso, simboliza, e é a rota principal do projeto.

### Public

- public: Essa é a pasta usada para servir os estáticos, diferentemente do que estamos acostumados no ReactJs, no NextJs não é possível usar arquivos estáticos em pastas 'customizadas', exemplo, `src/assets/images`.

### Styles

- styles: Pelo que entendi é só uma pasta para organizar os estilos da aplicação, mas não parece ser obrigatória, uma vez que os arquivos `.css` podem ser criados na raiz do projeto.

- styles/globals.css: Arquivos que auto se intitula. Apesar de ser uma arquivo simples de estilo, ele é o principal que deve ser chamado somente no arquivo `_app.js` que está dentro da pasta <u>pages</u>. Algumas coisas me fizeram pensar um pouco em voltar a usar pure CSS em aplicações mais simples. Por enquanto é só um pensamento mesmo, ainda prefiro usar styled-components em qualquer tipo de aplicação, sinto que tenho muito mais a aplicação na mão de forma simples e sem a verbosidade que o pure CSS cria.

- styles/Home.module.css: Ainda não entendi muito bem a motivação de usar arquivos css com esse formato, mas pelo que parece é uma metodologia chamada de CSS Modules que permite a referenciação entre arquivos js e css. Mas não é o que está refletido no código, porque esse arquivo de exemplo vem com o nome Home, e o arquivo index.js é onde ele está sendo chamado, e mesmo assim lá o arquivo é chamado normalmente com `Home.module.css`, mas isso deve ser um caso muito especifico da Home com index.js. Vou testar com outros arquivos pra tentar entender a real necessidade de utilizar esse formato.

### O que temos de resto

De resto o que temos são:

- .next: Pasta que a aplicação usa para criar o servidor da aplicação, gerar build e afins...

E o que já conhecemos e estamos acostumados em uma aplicação, como: package.json e .gitignore!

### Resumo sobre a base estrutural

Adorei por ser bem clean e objetiva, mas sinto que para uma aplicação ser escalável algumas modificações devem ser implementadas, como:

- Separação dos arquivos: Criar pastas para cada página com um arquivo index.js dentro pode tornar a aplicação mais estrutural e menos jogada. Também serve para os assets da aplicação, apesar de não achar necessário a criação de uma pasta chamada assets, separar as imagens e outros arquivos que tem essa finalizadade em uma pasta com o nome desse tipo de asset vai fazer isso ser uma boa, exemplo, /images/home/...
