const getExpeditiousCache = require('express-expeditious')

const defaultOptions = {
    namespace: 'expresscache', //TODO: se usa la estrategia memory cache
    defaultTtl: '5 minute',//TODO: Si en menos de 1 minuto se hace la misma petición, se guarda en cache
    statusCodeExpires: {
        404: '15 minute',
        500: 0 //5 minute in milliseconds
    }
}

const cacheInit = getExpeditiousCache(defaultOptions)

module.exports = { cacheInit }