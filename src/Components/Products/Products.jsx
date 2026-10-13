import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Productlist from '../Productlist/Productlist'
import Cards from '../Cards/Cards'

const Products = () => {

  const Categories = [
    'All',
    'Medicines',
    'Medical Devices',
    'Daily Needs'
  ]

  const [activetab, setactivetab] = useState('All')

  // Filter Products
  const filteredProducts =
    activetab === 'All'
      ? Productlist
      : Productlist.filter((product) => product.category === activetab)

  // Render Cards
  const renderCards = filteredProducts.map((product) => {
    return (
      <Cards
        key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
      />
    )
  })

  return (
    <section>

      <div className='max-w-[1400px] mx-auto  '>

      <Heading highlight='Our' Heading='Products' />

        {/* Buttons */}
        <div className='flex gap-4 justify-center mt-10'>

          {Categories.map((Category) => {
            return (
              <button
                key={Category}
                className={`px-5 py-2 rounded-xl text-lg cursor-pointer ${
                  activetab === Category
                    ? 'bg-blue-500 text-white'
                    : 'bg-zinc-200'
                }`}
                onClick={() => setactivetab(Category)}
              >
                {Category}
              </button>
            )
          })}

        </div>

        {/* Product Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>

          {renderCards}

        </div>

      </div>

    </section>
  )
}

export default Products