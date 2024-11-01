import express from "express"
import mongoose from "mongoose"
import {Book} from "./models/bookModel.js"
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"

const app = express()
const port = 3000
const uri = "mongodb://localhost:27017/Bookstore"

app.use(express.json());

app.use(cors())

mongoose.connect(uri)
.then(() => {
    console.log('Connected to MongoDB successfully!');
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err);
})

app.use('/books', booksRoute)