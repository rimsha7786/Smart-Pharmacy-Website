import React from 'react'

function Button(props) {
  return (
    <div className="flex justify-end p-4">
      <button
        onClick={props.onClick}   // ✅ ADD THIS LINE ONLY
        className="w-40 h-12 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
      >
        {props.content}
      </button>
    </div>
  )
}

export default Button