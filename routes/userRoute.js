// En tu archivo de rutas (userRoute.js)
const express = require('express');
const router = express.Router();
const { login } = require('../controllers/userController.js');

// Ruta para el inicio de sesión
router.post('/login', login); //la ruta es /api/users/login

module.exports = router;