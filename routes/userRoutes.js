const express = require('express');
const router =  express.Router();
const useController = require('../controllers/useController');


//rota para listar usuarios
router.get('/', userController.createUser);


module.exports = router;