import React from "react";
import Productlist from "../Productlist/Productlist";
import Cards from "../Cards/Cards";

function Medicines() {

  const data = Productlist.filter(
    (item) => item.category === "Medicines"
  );

  return (
    <section className="max-w-[1400px] mx-auto px-10 py-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Medicines
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {data.map((item) => (
          <Cards
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}

      </div>

    </section>
  );
}

export default Medicines;