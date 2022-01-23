require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const { dbConnect } = require('./config/mongo')

const PORT = process.env.PORT | 3000
app.use(cors())
app.use(express.json())

app.use('/api/1.0', require('./app/routes'))
dbConnect()
app.listen(PORT, () => {
    console.log('Api funcionando por  el puerto ', PORT)
})