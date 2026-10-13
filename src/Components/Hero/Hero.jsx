import React from "react";
import Button from "../Button/Button"
function Hero() {
  return (
    <section className="w-full min-h-screen bg-gray-100  pt-[50px] ">

      <div className="max-w-[1400px] mx-auto px-6 py-10">

        <div className="relative rounded-3xl overflow-hidden shadow-lg">

   
          <img
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974&auto=format&fit=crop"
            alt="Medical"
            className="w-full h-[80vh] object-cover "
          />

          <div className="absolute inset-0 bg-black/50 "></div>

         
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white">

      
            <span className="bg-orange-500 text-white px-5 py-2 rounded-full w-fit text-sm font-semibold mb-5">
              Export Best Quality
            </span>

        
            <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight mb-6">
              Trusted Medical & Pharmacy Services
            </h1>

            
            <p className="text-lg max-w-xl text-gray-200 mb-8">
              We provide high-quality medicines, healthcare products,
              and professional pharmacy services for your better health.
            </p>
<Button content="Visit Website" />
         
            <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md">

              <input
                type="text"
                placeholder="Search medicine..."
                className="flex-1 px-5 py-3 text-black outline-none"
              />

              <button className="bg-orange-500 text-white px-6 py-3 hover:bg-orange-600 transition">
                Search
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;