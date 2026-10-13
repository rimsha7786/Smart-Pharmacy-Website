import React from 'react'
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Categorys from '../Categories/Categorys';
import Value from '../Value/Value';
import Products from '../Products/Products';
import Discount from '../Discount/Discount';
import Process from '../Process/Process';
import Testinomials from '../Testinomials/Testinomials';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    <Categorys/>
    <Value/>
    <Products/>
    <Discount/>
    <Process/>
    <Testinomials/>
    <Footer/>

    </div>
  )
}
