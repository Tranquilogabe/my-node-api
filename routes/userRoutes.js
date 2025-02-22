const express = require('express');
const router =  express.Router();
const userController = require('../controllers/userController');


//rota listar usuarios
router.get('/', userController.getUsers);

//rota criar usuario
router.post('/', userController.createUser);

module.exports = router;