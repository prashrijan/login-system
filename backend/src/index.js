import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})


import connectDb from "./db/connectDb.js";
import express from 'express'
const app = express()

app.get('/', (_, res) => {
    res.send("Hello world")
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`System is listening at port : http://localhost:${process.env.PORT}`);
})

connectDb()



