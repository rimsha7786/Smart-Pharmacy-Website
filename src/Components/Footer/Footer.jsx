import React from 'react'

function Footer() {
  return (
    <footer className='max-w-[1400px] mx-auto px-10 py-10 mt-16'>
      
      <div className='bg-zinc-100 rounded-3xl shadow-md p-10 grid grid-cols-1 md:grid-cols-4 gap-8'>

      
        <div>
          <h1 className='text-3xl font-bold mb-4'>
  <span className='text-black'>Smart</span>
  <span className='text-orange-500'>P</span>harma
</h1>

          <p className='text-zinc-600 leading-7 text-sm'>
            SmartPharma provides trusted medicines, healthcare products,
            and fast delivery services for your family wellness.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-bold mb-4 text-zinc-800'>
            Quick Links
          </h2>

          <ul className='space-y-3 text-zinc-600'>
            <li className='hover:text-orange-600 cursor-pointer transition'>
              Home
            </li>

            <li className='hover:text-orange-600 cursor-pointer transition'>
              Medicines
            </li>

            <li className='hover:text-orange-600 cursor-pointer transition'>
              Categories
            </li>

            <li className='hover:text-orange-600 cursor-pointer transition'>
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-bold mb-4 text-zinc-800'>
            Services
          </h2>

          <ul className='space-y-3 text-zinc-600'>
            <li>Online Medicine Order</li>
            <li>Prescription Upload</li>
            <li>24/7 Customer Support</li>
            <li>Fast Home Delivery</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-bold mb-4 text-zinc-800'>
            Contact Us
          </h2>

          <div className='space-y-3 text-zinc-600'>
            <p>📍 Pakistan</p>
            <p>📞 +92 323 5547658</p>
            <p>✉ smartpharma@gmail.com</p>
          </div>
        </div>

      </div>

      <div className='text-center mt-6 text-zinc-500 text-sm'>
        © 2026 SmartPharma. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer