import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-indigo-600 hover:bg-indigo-700',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button 
    type={type}
    className= {`${className} ${bgColor} ${textColor} px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-lg hover:shadow-xl`}
    {...props}
    >
        {children} 
    </button>
  )
}

export default Button