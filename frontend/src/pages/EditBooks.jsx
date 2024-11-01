import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import axios from 'axios'

const EditBooks = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        axios
        .get(`http://localhost:3000/books/${id}`)
        .then((response)=>{
            setAuthor(response.data.author)
            setTitle(response.data.title)
            setPrice(response.data.price)
            setLoading(false)
        }).catch((error)=>{
            setLoading(false)
            console.log(error);
        })
      },[])
    
    
    const handleEditBook = () =>{
      const data = {
        title,
        author,
        price
      }
      setLoading(true)
      axios.put(`http://localhost:3000/books/${id}`, data)
      .then(()=>{
        setLoading(false)
        navigate('/')
      })
      .catch((error)=>{
        setLoading(false)
        alert('Error occured')
        console.log(error);
        
      })
    }
  
    return (
      <div className='m-5 p-5 border-2 border-solid border-black rounded'>
        {loading ? (<Spinner/>) : ''}
        <label  className="block text-sm font-semibold leading-6 text-gray-900">Book title</label>
          <div className="mt-2.5">
            <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) } className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
  
        <label  className="block text-sm font-semibold leading-6 text-gray-900">Book Author</label>
          <div className="mt-2.5">
            <input type="text" value={author} onChange={ (e) => setAuthor(e.target.value) } className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "/>
          </div>
  
        <label  className="block text-sm font-semibold leading-6 text-gray-900">Price</label>
          <div className="mt-2.5">
            <input type="text" value={price} onChange={ (e) => setPrice(e.target.value) } className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "/>
          </div>
  
          <button type="button" className='p-2 m-8 bg-sky-300' onClick={handleEditBook}>Save</button>
      </div>
    )
}

export default EditBooks
