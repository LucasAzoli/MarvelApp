<h1 align="center">MarvelApp</h1>

<p align="center">MarvelApp é um site criado usando a API da Marvel.</p>

![image](https://user-images.githubusercontent.com/77306471/173594294-379d041a-e199-4a0e-a8cc-3b087ce98327.png)
![image](https://user-images.githubusercontent.com/77306471/173598189-cdf8b9ad-4065-4af3-8684-cf259fb38b5b.png)

<h2>Sobre</h2>
<p>O site foi desenvolvido utilizando <b>HTML</b>, <b>SASS</b>, <b>TypeScript</b> e <b>JavaScript</b> e tem layout responsivo e bem intuitivo, sendo sua principal função listar personagens ligados ao mundo Marvel, além disso o site conta com um sistema de login utilizando JSON Server.</p>

<h2>Instalação</h2>
<p>Para testar o projeto temos que primeiro baixar as dependências utilizando o comando abaixo:</p>
<pre><code>npm install</code></pre>
<p>Agora podemos rodar o projeto com o seguinte comando:</p>
<pre><code>ng serve</code></pre>
<p>E por fim, falta só usar o JSON Server para emular o back-end, ligamos ele pelo seguinte codigo em outro terminal:</p>
<pre><code>json-server --watch db.json</code></pre>
<p>Os logins registrados podem ser encontrados no arquivo JSON <code>path/db.json</code></p>
<p>Para que o projeto funcione, também é preciso que você tenha uma conta na API da Marvel e que coloque sua chave privada no campo key do arquivo JSON</p>
