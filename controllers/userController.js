const User = require('../models/user');

//GET

const getUsers = async (req, res) => {
try {
    const users = await User.find();
    res.json(users);
} catch (error) {
    res.status(500).json({ error: error.message });
    }
};


//POST

const createUser = async (req, res) =>{
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};


//PUT
const updateUser = async (req, res) => {
    try{
        
        const id = req.params.id;
        const updatedData = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedUser) {
            

        }
        return res.status(404).json({ error: 'Não achamos nem um pilantra'});

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


//DELETE

const deleteUser = async (req,res) => {
    try{
        const id = req.params.id;

      

        const deletedUser = await User.findByIdAndDelete(id);

        if(!deletedUser) {
            return res.status(404).json({ error:'Nao achamos o pilantra'});
        }
        res.json({ message: 'Deletamos o pilantra'});
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};










module.exports = { getUsers, createUser, updateUser , deleteUser };