<h1  align="center">Delta Global Challenge</h1>
<h2  align="center">Branch Master</h2>

  

## 📃 Sobre

Aplicação: <br>

https://github.com/worldrules/DeltaGlobal/tree/master <br>

  

**Delta Global Challenge** 
Desafio proposto para criar um CRUD (Create, Read, Update, Delete) de alunos , utilizando Codeigniter(PHP) no backend , e REACT-JS no frontend.



  

---

  

## 💻 Tecnologias utilizadas

O projeto foi desenvolvido com as tecnologias abaixo: <br>


* React ( Javascript )
* CSS
* Codeigniter 4
* MySQL


### 💡 Libs utilizadas
* Bulma CSS
* Font Awesome
* React-hooks
* Axios
* Vite
  
 

---

  

## 🎬 Interface

[![Captura-de-tela-2024-04-26-213250.jpg](https://i.postimg.cc/zfNmxNYP/Captura-de-tela-2024-04-26-213250.jpg)](https://postimg.cc/Mn9rGhTy)


### 💻Instalação
Primeiramente é necessário ter no PC, node instalado , xampp se possível.
O projeto está dividido em duas pastas :
**Backend:**
Linhas de comando : entrar na pasta backend - > php spark serve

<iframe src="https://giphy.com/embed/0juzz91OmCypdRUlSy" width="480" height="260" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/0juzz91OmCypdRUlSy">via GIPHY</a></p>

**Frontend:** 
Linhas de comando : entrar na pasta frontend - > npm i , apos alguns minutos -> npm run serve
<iframe src="https://giphy.com/embed/ZfJStbZRuHubxJpZBI" width="480" height="260" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ZfJStbZRuHubxJpZBI">via GIPHY</a></p>

Feito isso temos o Backend rodando e o Frontend rodando.
OBS.: De preferência Apacha e MySQL rodando , para fazer testes no banco de dados com os seguintes comandos para popular o banco : `CREATE TABLE alunos ( id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(50), sobrenome VARCHAR(50), idade INT, email VARCHAR(100), endereco VARCHAR(255), nome_pai VARCHAR(50), nome_mae VARCHAR(50),foto VARCHAR(50) );`

E adicionamos algumas pessoas para fins de testes: `INSERT INTO alunos (nome, sobrenome, idade, email, endereco, nome_pai, nome_mae)
VALUES
    ('João', 'Silva', 20, 'joao@example.com', 'Rua A, 123', 'José Silva', 'Maria Silva'),
    ('Maria', 'Santos', 22, 'maria@example.com', 'Rua B, 456', 'Carlos Santos', 'Ana Santos'),
    ('Pedro', 'Ferreira', 25, 'pedro@example.com', 'Rua C, 789', 'Fernando Ferreira', 'Carla Ferreira'),
    ('Ana', 'Martins', 19, 'ana@example.com', 'Rua D, 1011', 'Rafael Martins', 'Patrícia Martins'),
    ('Lucas', 'Oliveira', 21, 'lucas@example.com', 'Rua E, 1213', 'Daniel Oliveira', 'Laura Oliveira');
`
## 📜 Relatório de Melhorias
* Bom , primeiramente sistema de login para gerenciar e diferenciar acessos entre alunos e professores. 
 * Sistema de Autênticação para garantir uma primeira camada de **Segurança**. 
 * Deploy da aplicação em servidores dedicados.
 * Refatoração do Layout e aplicação de possivel template para fins de **Responsividade**.
 * Criação de uma homepage , com newsletter , galeria de fotos , possíveis dinâmicas para interagir com os usuários.
 * Agregar TypeScript , para evoluir o código , incluir tipagem.
 * Desenvolver Testes, é muito bom uma rotina de testes seja de código ou testes de usabilidade.
 * Colher feedbacks dos usuários e melhorar quaisquer pontos que forem precisos.
   
OBS.: Os gifs, não ficaram com a melhor qualidade mas ele só demonstra o que foi descrito acima.
