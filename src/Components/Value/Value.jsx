import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeartCircleCheck, FaHandshakeSimple } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { GiTeamIdea } from "react-icons/gi";

const valuesData = [
  {
    id: 1,
    title: "Customer Satisfaction",
    para: "Your health and satisfaction is our first priority",
    icon: <FaHeartCircleCheck />
  },
  {
    id: 2,
    title: "Quality Always",
    para: "Premium medicines and healthcare products",
    icon: <TiTick />
  },
  {
    id: 3,
    title: "Happy Team",
    para: "Empowered professionals delivering excellence",
    icon: <GiTeamIdea />
  },
  {
    id: 4,
    title: "Respect Always",
    para: "Treating everyone with dignity and care",
    icon: <FaHandshakeSimple />
  }
]

function Value() {
  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-10">
        <Heading highlight="Our" Heading="Values" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-10">

          {/* Left values */}
          <div className="space-y-20">
            {valuesData.slice(0, 2).map((item) => (
              <div key={item.id} className="flex gap-5 items-start">
                <div className="text-orange-500 text-4xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.para}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/19471013/pexels-photo-19471013.jpeg"
              alt="values"
              className="rounded-full w-full max-w-[350px]"
            />
          </div>

          {/* Right values */}
          <div className="space-y-20">
            {valuesData.slice(2, 4).map((item) => (
              <div key={item.id} className="flex gap-6 items-start">
                <div className="text-orange-500 text-4xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.para}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Value