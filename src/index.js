//importa os módulos http e express bibliotecas, cria instâncias
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser, transforma em json objeto de informação
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 4000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(4000);
let id = 2;
//por enquanto não tem banco de dados por isso estamos colocando no código
let livros = [{
        id: 1,
        nome: "O Segredo",
        descricao: "pensamento positivo",
        edicao: "3 ediçao",
        autor: "Thiago",
        isbn: "789123"
    },
    {
        id: 2,
        nome: "Nate",
        descricao: "história em quadrinhos",
        edicao: "1 edição",
        autor: "Glória",
        isbn: "789124"
    },
    {
        id: 3,
        nome: "Odisséia",
        descricao: "mitologia",
        edicao: "1 edição",
        autor: "Vanessa",
        isbn: "789125"
    }
];
let alunos2 = [];
//tratamento de requisições POST
app.post("/livros", (req, res, next) => {
    const livro = {
        id: id += 1, // id = id + 1 ou id++
        nome: req.body.nome,
        descricao: req.body.descricao,
        edicao: req.body.edicao,
        autor: req.body.autor,
        isbn: req.body.isbn
    }
    livros.push(livro)
    res.status(201).json(livro);
});
//tratamento de requisições GET
app.get("/livros", (req, res, next) => {
    res.status(201).json(livros);
})
//tratamento de requisições PUT
app.put("/livros", (req, res, next) => {
    //armazena dentro de livro quando percorre cada objeto
    livros.forEach((livro) => {
        if (livro.id === req.body.id) {
            livro.nome = req.body.nome;
            livro.descricao = req.body.descricao;
            livro.edicao = req.body.edicao;
            livro.autor = req.body.autor;
            livro.isbn = req.body.isbn;
        }
    })
    res.status(200).json(livros);
});
//tratamento de requisições DELETE
app.delete('/livros/:id', (req, res, next) => {
    const idLivroDeletado = req.params.id;
    livros.forEach((livro, index) => {
        if(livro.id == idLivroDeletado) livros.splice(index, 1)
    
    })
    req.status(200).json(livros);
    })
       

