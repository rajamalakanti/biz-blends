import React from 'react'

const Callout = () => {
  return (
    <div className="w-full bg-yellow-100 text-yellow-900 text-sm sm:text-base px-4 py-3 flex items-center justify-center shadow-md">
    <span className="font-semibold">📣 New Location!</span>
    <span className="ml-2">
      I&apos;m no longer cutting at my house — catch me at <strong>Beauty Concepts</strong> located at <strong>4012 Fox Valley Center Dr, Aurora, IL 60504</strong> on <strong>Fridays and Saturdays</strong>!
    </span>
    </div>
  )
}

export default Callout