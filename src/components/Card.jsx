import React from 'react'
import { NavLink } from 'react-router-dom';

function Card({sa}) {
  return (
    <NavLink to={`singlecard/${sa.id}`}>
      <div className='border rounded-md w-[350px] p-2'>
      <div>
            <h1><span>Name : </span>{sa.name}</h1>
            <h1><span>Address : </span>{sa.address_1}</h1>
            <h1><span>Contact info : </span>{sa.phone}</h1>
            <h1><span>Website : </span>{sa.website_url}</h1>
            <h1><span>State : </span>{sa.state}</h1>
            <h1><span>City : </span>{sa.city}</h1>
        </div>
    </div>
    </NavLink>
    
  )
}

export default Card;
