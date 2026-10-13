import React from 'react'
import Heading from '../Heading/Heading'
import { FaStar } from 'react-icons/fa'

function Testinomials() {

  const reviews = [
    {
      id: 1,
      name: "Ayesha Khan",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      review:
        "SmartPharma provides authentic medicines with super fast delivery. Their service is reliable and easy to use."
    },

    {
      id: 2,
      name: "Ali Raza",
      role: "Healthcare User",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      review:
        "I ordered medicines online and received them within hours. Very satisfied with SmartPharma support."
    },

    {
      id: 3,
      name: "Fatima Noor",
      role: "Regular Buyer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      review:
        "The prescription upload feature is very helpful. Medicines are original and prices are affordable."
    }
  ]

  return (

    <section className='bg-zinc-100 py-10'>

      <div className='max-w-[1400px] mx-auto px-6'>

        <div >
          <Heading highlight="Customer" Heading="Saying" />
        
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {reviews.map((item) => (

            <div
              key={item.id}
              className='bg-white p-6 rounded-2xl shadow-md hover:shadow-xl duration-300'
            >

              <div className='flex items-center gap-4'>

                <img
                  src={item.image}
                  alt={item.name}
                  className='w-16 h-16 rounded-full object-cover border-2 border-orange-400'
                />

                <div>

                  <h3 className='text-xl font-bold text-zinc-800'>
                    {item.name}
                  </h3>

                  <p className='text-zinc-500'>
                    {item.role}
                  </p>

                  {/* Stars */}
                  <div className='flex gap-1 text-yellow-400 mt-2'>

                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                  </div>

                </div>

              </div>

            
              <p className='text-zinc-600 leading-7 mt-6'>
                {item.review}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Testinomials