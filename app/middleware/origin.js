const checkOrigin = (req, res, next) => {
    if (req.headers.origin) {
        res.header('Acceso-Control-Permitir-Origin', req.headers.origin);
    }
    next();
}

module.exports = checkOrigin