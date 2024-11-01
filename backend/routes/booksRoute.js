import express from "express"
import { Book } from "../models/bookModel.js"

const router = express.Router()

//POST a book
router.post('/', async (req,res)=>{
try {
    if (!req.body.title || !req.body.author || !req.body.price) {
        console.log("Send all required fields");
        return res.send("Send all required fields")
        
    }
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price
    }
    const book = await Book.create(newBook)
    return res.send(book)
} catch (error) {
    res.send(error)
}
})

//GET all books
router.get('/', async (req,res) =>{
    try {
        const books = await Book.find({})
        return res.send({
            count: books.length,
            data: books,
        })
    } catch (error) {
        return res.status(500).send(error)
    }
})

//Get books by id
router.get('/:id', async (req,res) =>{
    try {
        const {id} = req.params
        const books = await Book.findById(id)
        return res.send(books)
    } catch (error) {
        return res.status(500).send(error)
    }
})

//delete a book
router.delete('/:id', async (req,res) =>{
    try {
        const {id} = req.params
        const result = await Book.findByIdAndDelete(id)
        if (!result) {
            return res.send({message:"Book not found"})
        } else {
            return res.send({message:"Successfully deleted"})
        }
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.put('/:id', async (req,res) => {
    try {
        
        if (!req.body.title || !req.body.author || !req.body.price) {
            console.log("Send all required fields");
            return res.send("Send all required fields")
            
        }

        const {id} = req.params
        const result = await Book.findByIdAndUpdate(id, req.body)
        
        if (!result) {
         return res.send({message:'book not found'})       
        }
        return res.send({message:'Successful'})
    } catch (error) {
        console.log(error);
        res.send({message:error})
    }
})
    
export default router