import React, {useEffect, useState} from 'react'
import Spinner from '../components/Spinner'
import axios from "axios"
import {useParams} from 'react-router-dom'

const Showbook = () => {
  const [books, setBooks] = useState({})
  const [loading, setLoading] = useState(false)
  const {id} = useParams()

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/books/${id}`)
    .then((response)=>{
      setBooks(response.data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])

  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (<Spinner/>) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{books._id}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>title</span>
            <span>{books.title}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>author</span>
            <span>{books.author}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>price</span>
            <span>{books.price}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Showbook
