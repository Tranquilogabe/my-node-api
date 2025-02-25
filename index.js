const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware para JSON 
app.use(express.json());

//conectando ao mongo
mongoose.connect('mongodb://localhost:27017/my-api',{
  useNewurlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB!'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));


//Usando as rotas
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');


app.use('/users', userRoutes);
app.use('/auth,', authRoutes);

//



//Exemplo de rota protegida
const { verifyToken } = require('./middlewares/authMiddleware');
app.get('/protected', verifyToken, (req,res) => {
  res.json({ message: 'acesso autorizado a rota protegida', user: req.user });
});



// Rota raiz para confirmar que a API está funcionando
app.get('/', (req, res) => {
  res.send('Olá, mundo! Minha API está funcionando!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
