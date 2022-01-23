const mongoose = require('mongoose')
const { encrypt, compare } = require('../helpers/handleBcrypts')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/users')

//TODO: Login de usuario
exports.loginCtrl = async (req, res) => {
    try {
        const { email, password} = req.body
        const rol = await userModel.findOne({ email })
        if (!user) {
            res.status(404)
            res.send({error: 'Usuario no encontrado'})
        }
        //TODO: Validar que la clave exista, mediante compare
        const chackPassword = await compare(password, rol.password)
        const tokenSession = await tokenSign(user) //TODO: Generamos el token
        if (chackPassword) {//TODO: Si la clave es correcta
            res.send({
                data: rol,
                tokenSession
            })
            return
        }
        if (!chackPassword) {
            res.status(409)
            res.send({
                error: 'Contraseña incorrecta'
            })
            return
        }
    }
    catch (error) {
        res.status(500).send({
            error: 'Error en el servidor'
        })
    }
}

//TODO: Registramos el usuario! 
exports.registerCtrl = async (req, res) => {
    try {
        //TODO: Datos enviados desde el frontend
        const { usuario_Id, nombre, user, celular, email, password, rol, estado} = req.body
        const passwordHash = await encrypt(password)//TODO: Encriptamos la contraseña!!
        const registerUser = await userModel.create({
            usuario_Id,
            nombre,
            user,
            celular,
            email,
            password: passwordHash,
            rol,
            estado
        })
        res.send({ data: registerUser })
    }
    catch (error) {
        res.status(500)
        res.send({ error: error.message })
    }
     /* catch (error) {
        res.render('register', {
            title: 'Register',
            body: req.body,
            error: error.message
        })
    } */
}
