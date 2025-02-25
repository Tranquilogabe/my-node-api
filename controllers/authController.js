const jtw = require('jsonwebtoken');

//
const SECRET_KEY = 'sua_chave_secreta_aqui';

//exemplo simples de login com credencial estatica

const login = (req,res) => {
    const { email, password } = req.body;

    //sistema real validaria o usuario no banco de dados

    if( email === 'user@example.com' && password === 'password123'){
        //cria o token com um payload; pode inclluir dados sensiveis
        const token = jtw.sign({ email }, SECRET_KEY, {expiresIn: '1h' });
        return res.json ({ token });
    } else {
        return res.status(401).json ({ error: 'Credenciais invalidas' });
    }
}

module.exports = { login };