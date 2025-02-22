const User = require('../models/user');

//Listar usuários

const getUsers = async (req, res) => {
try {
    const users = await User.find();
    res.json(users);
} catch (error) {
    res.status(500).json({ error: error.message });
    }
};


//Criar usuario

const createUser = async (req, res) =>{
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};


//implementar no futuro funcoes como uptade e delete user.



module.exports = { getUsers, createUser };