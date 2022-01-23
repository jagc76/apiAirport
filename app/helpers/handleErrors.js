const httpError = (res, err) => {
    console.log('Ocurre este error -->', err)
    res.status(500)
    res.send({ error: 'Algo no funciona'})
}

module.exports = { httpError }