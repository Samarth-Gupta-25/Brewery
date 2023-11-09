import React from 'react'

function Review(prop) {
  return (
    <div className='border-2 rounded-md p-2 flex flex-col items-center justify-center w-[200px]'>
        <p>{prop.review.comments}</p>
      <p className='text-gray-600'>{prop.review.rating}/5</p>
      
    </div>
  )
}

export default Review
