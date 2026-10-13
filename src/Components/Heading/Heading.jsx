import React from 'react'

function Heading(props) {
  return (
    <section>
    <div className='py-20 '>
<div>
<h2 className=' text-4xl font-bold text-center'>
  <span className='text-blue-500'>{props.highlight}</span> {props.Heading} 
</h2>
<div className='w-12 h-1 bg-blue-400   mt-4 mx-auto'></div>
</div>
    </div>
  </section>
  )
}

export default Heading
