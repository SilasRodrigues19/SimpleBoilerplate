1. Como ter todos esses arquivos de favicon:

   - Escolha uma imagem `.png` para transformar em `.ico.`
   - Acesse [Favicon Generator](https://favicon.io/favicon-converter/) cole sua imagem e clique em `download`.
   - Descompacte os arquivos na raiz e substitua pelos arquivos existentes.
   <hr>

2. Recomendações para escrever o `CSS`

   - Ter no máximo `3 níveis` de cascata <br /> <br />

   ```
       .class1 { // Nível 1
           .class2 { // Nível 2
               .class3 { // Nível 3 (esse deve ser o limite)

               }
           }
       }
   ```

   - Caso seja necessário inserir algo dentro de `.class3,` considere criar outra `classe` e um nível de cascata do 0 <br /> <br />

   ```
       .class4 { // Nível 1

       }
   ```

   - Isso valeria igual caso fosse um arquivo `.css` padrão, afinal o `.scss` gera um arquivo `.css,` portanto se tiver classes com mais de 3 níveis,
     considere arrumar, um exemplo seria: <br /> <br />

   ```
   .class1 .class2 .class3 .class4 {

   }

   ```

   - Essa `.class4` deveria estar em um nível 0 de cascata e o exemplo anterior ficaria em 3 níveis ao invés de 4, ficando assim: <br /> <br />

   ```
   .class1 .class2 .class3 {

   }
   .class4 {

   }

   ```

  <hr>

3. Preencha as informações dentro da tag `<head>` no arquivo `index.html`

   ```
   <meta name="author" content="Seu nome">
   <meta name="description" content="Descrição do seu site">
   <meta name="copyright" content="Seu nome - (ano em números, sem os parentes, exemplo: 2022)">
   <meta name="keywords" content="palavras, chave, separadas, por, virgula">
   <title>Título do seu site</title>

   ```

   <hr>

4. Lembre-se de ligar o [`Live Server`](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) e o [`Live Sass Compiler`](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass), são 2 extensões do VSCode que obrigatoriamente terão que estar ligada para mexer nesse
   projeto.
