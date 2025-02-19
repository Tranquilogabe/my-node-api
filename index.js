const express = require('express');
const app = express();
const port = 3000;

// Middleware para JSON 
app.use(express.json());

// usuários em memória
let usuarios = [
  { id: 1, nome: 'Little Daniel' },
  { id: 2, nome: 'Hebert Souza' }
];

// GET 
app.get('/users', (req, res) => {
  res.json(usuarios);
});

// POST 
app.post('/users', (req, res) => {

  const novoUsuario = req.body;

  novoUsuario.id = usuarios.length + 1;

  usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
});

//PUT
app.put('/users/:id', (req,res) => {
    const id = parseInt (req.params.id);
    const usuarioAtualizado = req.body;

  const index = usuarios.findIndex(u => u.id === id);

  if (index !== -1){

    usuarios[index] = { ...usuarios[index], ...usuarioAtualizado};
    res.json(usuarios[index]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }



});

app.delete('/users/:id' , (req, res) => {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex(u => u.id === id);

  if(index !== -1){
    const usuarioRemovido = usuarios.splice(index, 1);
    res.json(usuarioRemovido);
  } else {
    res.status(404).json({ error: 'User not found'});
  }

});

// Rota raiz para confirmar que a API está funcionando
app.get('/', (req, res) => {
  res.send('Olá, mundo! Minha API está funcionando!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
