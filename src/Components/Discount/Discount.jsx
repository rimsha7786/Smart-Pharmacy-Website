import React from 'react'
import Button from '../Button/Button'

function Discount() {
  return (
    <section className='bg-zinc-100 '>

      <div className='max-w-[1400px] mx-auto flex items-center justify-between'>

        {/* Left Content */}
        <div className='flex items-center gap-8'>

          <span className='text-[110px] text-orange-500 font-bold'>
            20%
          </span>

          <div className='max-w-[500px]'>
            <h3 className='text-5xl text-zinc-800 font-bold leading-tight'>
            SmartPharma <br /> Discount!
            </h3>

            <p className='text-zinc-600 my-5'>
              Enjoy exclusive pharmacy discounts on medicines,
              healthcare products, and daily essentials with
              fast delivery and trusted quality.
            </p>

            <Button content='Get Discount' />
          </div>

        </div>

        {/* Right Image */}
        <div>
        <img
  src="https://st2.depositphotos.com/1576106/10025/i/950/depositphotos_100255514-stock-photo-pile-of-medicines-and-syringes.jpg"
  alt="pharmacy"
  className='w-[450px] h-[300px] object-cover'
/>
        </div>

      </div>

    </section>
  )
}

export default Discount