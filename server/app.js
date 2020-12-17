const express = require('express')
const cors = require('cors')
const router = require('./router')
const app = express()
const port = 8000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log(`Running at port ${port}`);
})