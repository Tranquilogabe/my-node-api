const express = require('express');
const router =  express.Router();
const userController = require('../controllers/userController');


//ROTA DO GET
router.get('/', userController.getUsers);

//ROTA DO POST
router.post('/', userController.createUser);

//ROTA DO PUT
router.put('/:id', userController.updateUser);

//ROTA DO DELETE
router.delete('/:id', userController.deleteUser);





module.exports = router;