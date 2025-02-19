const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware para JSON 
app.use(express.json());


mongoose.connect('mongodb://localhost:2701/my-api',{
  useNewurlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB!'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));


//Usando as rotas
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);


// Rota raiz para confirmar que a API está funcionando
app.get('/', (req, res) => {
  res.send('Olá, mundo! Minha API está funcionando!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
