const bcrypt = require('bcrypt') //libreria para encriptar contraseñas

//TODO: Encriptamos password!!
const encrypt = async (textPlain) => {//TODO: Recibimos el texto plano
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(textPlain, salt);//TODO: Encriptamos el texto plano
    return hash;//TODO: Devolvemos el texto encriptado al controlador
}

//TODO: Comparamos password!!
const compare = async (passwordPlain, hashPassword) => {
    const result = await bcrypt.compare(passwordPlain, hashPassword);
    return result;
}

module.exports = { encrypt, compare };