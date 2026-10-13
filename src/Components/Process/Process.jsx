import React from 'react'
import Heading from '../Heading/Heading'

function Process() {

  const steps = [
   {
    id: "01",
    title: "Upload Prescription",
    desc: "Upload your doctor prescription for safe and verified medicines.",
    icon: "📄"
  },

  {
    id: "02",
    title: "Medicine Verification",
    desc: "Our pharmacists carefully check and verify your prescription.",
    icon: "💊"
  },

  {
    id: "03",
    title: "Order Packaging",
    desc: "Medicines are packed safely with proper care and quality checks.",
    icon: "📦"
  },

  {
    id: "04",
    title: "Fast Delivery",
    desc: "Get your medicines delivered quickly to your doorstep.",
    icon: "🚚"
  }
  ]

  return (

    <section className='bg-zinc-100 '>

      <div className='max-w-[1400px] mx-auto px-6'>

        {/* Heading */}
        <div className='mb-20'>
    
      <Heading highlight='Our' Heading='Process' />
        </div>

        {/* Process Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

          {steps.map((item, index) => (

            <div
              key={item.id}
              className={`relative text-center ${
                index % 2 !== 0 ? 'mt-20' : ''
              }`}
            >

              {/* Number Circle */}
              <div className='w-24 h-24 mx-auto rounded-full border-4 border-dotted border-zinc-400 flex items-center justify-center bg-white'>

                <div className='w-16 h-16 rounded-full border-4 border-black flex items-center justify-center text-2xl font-bold text-zinc-800'>

                  {item.id}

                </div>

              </div>

              {/* Icon */}
              <div className='w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-2xl mx-auto mt-8 text-white shadow-lg'>

                {item.icon}

              </div>

              {/* Content */}
              <h3 className='text-2xl font-bold text-zinc-800 mt-5'>
                {item.title}
              </h3>

              <p className='text-zinc-500 leading-7 mt-3 px-2'>
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Process