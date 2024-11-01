import React from 'react'
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className='animate-ping w-16 h-16 m-8 rounded-full border-sky-600'>
      <FaSpinner />
    </div>
  )
}

export default Spinner
