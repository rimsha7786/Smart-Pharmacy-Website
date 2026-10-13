import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import { useNavigate } from "react-router-dom";

const category = [
  {
    id: 1,
    title: "Medicines",
    description: "Trusted medicines for daily health and quick relief.",
    image: "https://images.pexels.com/photos/3683086/pexels-photo-3683086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Medical Devices",
    description: "Reliable devices for easy health monitoring and care.",
    image: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg"
  },
  {
    id: 3,
    title: "Daily Needs",
    description: "Essential pharmacy products for everyday wellness and hygiene.",
    image: "https://images.pexels.com/photos/3952236/pexels-photo-3952236.jpeg"
  }
]

function Categorys() {

  const navigate = useNavigate();

  const routes = {
    Medicines: "/medicine",
    "Medical Devices": "/devices",
    "Daily Needs": "/daily"
  };

  return (
    <div className='max-w-[1400px] mx-auto px-10 py-5'>

      <Heading highlight="Shop" Heading="By Category" />

      <div className='grid grid-cols-3 gap-6 mt-10'>

        {category.map((card) => (
          <div
            key={card.id}
            className='bg-zinc-100 rounded-2xl shadow-md overflow-hidden'
          >

            {/* IMAGE */}
            <img
              src={card.image}
              alt={card.title}
              className='w-full h-48 object-cover'
            />

            <div className='p-4 text-center'>

              <h3 className='font-bold text-lg'>{card.title}</h3>

              <p className='text-sm mt-2'>
                {card.description}
              </p>

              {/* BUTTON */}
              <div className='mt-4'>
                <Button 
                  content="See All" 
                  onClick={() => navigate(routes[card.title])}
                />
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Categorys