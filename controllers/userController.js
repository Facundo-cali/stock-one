const User = require('../models/userModel.js');

//Inicio de sesión

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        //Busca el usuario en la base de datos
        const user = await
            User.findOne({ username: username });

        //Si el usuario no existe, devuelve un error
        if (!user) {
            return res.status(404).json({ message: 'El usuario no existe.' });
        }

        //Si el usuario existe, verifica la contraseña
        const validPassword = await user.comparePassword(password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Contraseña incorrecta.' });
        }

        //Si la contraseña es correcta, devuelve el usuario
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { login };