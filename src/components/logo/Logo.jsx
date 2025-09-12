import React from 'react'

function Logo({
    width = '100px'
}) {
  return (
    <div className="flex items-center">
      <h1 
        className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
        style={{ width }}
      >
        BlogSite
      </h1>
    </div>
  )
}

export default Logo