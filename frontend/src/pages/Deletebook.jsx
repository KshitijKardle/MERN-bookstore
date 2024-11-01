import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'

const Deletebook = () => {
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()

  const handleDelete = () =>{
    setLoading(true)
    axios.delete(`http://localhost:3000/books/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error);
    })
  }
  
  return (
    <div className='p-4'>
      {loading ? (<Spinner/>) : ''}
      <div className='flex flex-col items-center rounded border-black'>
        <h3 className='text-2xl '>Do you want to delete this book</h3>
        <button className='p-4 bg-red-600 text-white' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Deletebook
