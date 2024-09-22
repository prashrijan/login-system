import connectDb from "./db/connectDb.js";
import express from 'express'
const app = express()

app.get('/', () => {

})

app.listen(process.env.PORT || 8000, () => {
    console.log("System is listening at port ", process.env.POR);
})

connectDb()



