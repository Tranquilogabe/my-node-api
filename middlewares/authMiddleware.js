const jwt = require('jsonwebtoken');
const SECRET_KEY = 'sua_chave_secreta_aqui';



const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader){
        return res.status(401).json({ error: 'Token não fornecido'});
    }

    //formatando o token que vem em formato bearer
    const token = authHeader.split(' ')[1];

    jwt.verify(token , SECRET_KEY, (err, decoded) => {
        if(err){
            return res.status(403).json({ error: 'Falha na autenticação do token' });
        }

        // Armazenar o payload na requisicao, para caso precise dele mais adiante
        req.user = decoded;
        next();
    });
};



module.exports = { verifyToken };