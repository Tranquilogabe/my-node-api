const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar JSON no corpo das requisições
app.use(express.json());

// Array para armazenar os usuários em memória
let usuarios = [
  { id: 1, nome: 'João Silva' },
  { id: 2, nome: 'Maria Souza' }
];

// Rota GET para listar usuários
app.get('/users', (req, res) => {
  res.json(usuarios);
});

// Rota POST para adicionar um novo usuário
app.post('/users', (req, res) => {
  // Os dados do novo usuário virão no corpo da requisição
  const novoUsuario = req.body;

  // Cria um ID para o novo usuário (exemplo simples)
  novoUsuario.id = usuarios.length + 1;

  // Adiciona o novo usuário ao array
  usuarios.push(novoUsuario);

  // Retorna o novo usuário com o status 201 (Criado)
  res.status(201).json(novoUsuario);
});

// Rota raiz para confirmar que a API está funcionando
app.get('/', (req, res) => {
  res.send('Olá, mundo! Minha API está funcionando!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
