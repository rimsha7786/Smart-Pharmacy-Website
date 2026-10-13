import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

function Cards({ title, price, image }) {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-4'>

      <div className='flex justify-between items-center mb-4'>
        <span className='text-red-500 cursor-pointer'>
          <FaHeart />
        </span>

        <button className='bg-blue-500 text-white p-2 rounded-full'>
          <FaPlus />
        </button>
      </div>

      <div>
        <img
          src={image}
          alt={title}
          className='w-full h-[200px] object-cover rounded-xl'
        />
      </div>

      <div className='mt-4'>
        <h3 className='text-xl font-semibold'>
          {title}
        </h3>

        <p className='text-gray-600 mt-2'>
          Rs.{price}
        </p>

        <div className='mt-4'>
          <Button content='Shop Now' />
        </div>
      </div>

    </div>
  )
}

export default Cards