import React from 'react';
import {Link} from 'react-router-dom';

function Ho() {
  return (
    <div className='flex flex-col justify-center items-center h-screen relative w-full'>
        <div className='fixed top-0 border-b w-full flex justify-center items-center h-12'>
            <h1 className='text-black text-2xl font-bold'>Brewery</h1>
        </div>
      <div className='flex flex-col items-center gap-2'>
        <Link to="login">
            <p className='font-bold text-gray-500 text-xl hover:underline hover:text-gray-600'>Existing User</p>
        </Link>

        <Link to="signin">
            <p className='font-bold text-gray-500 text-xl hover:underline hover:text-gray-600'>New User</p>
        </Link>
      </div>
      
    </div>
  )
}

export default Ho;
