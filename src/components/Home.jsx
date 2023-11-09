import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';

function Home({brewery}) {
    const [city,setCity] = useState(null);
    const [arr,setArr] =useState([]);
    // const [option,setOption] = useState('city');
    // const [clicked,setClicked] = useState(false);
    function changeHandler(event){
        // console.log(event.target.value);
        setCity(event.target.value);
    }

    // function changeHandler2(event){
    //     // console.log(event.target.value);
    //     setOption(event.target.value);
    //     console.log(option);
    //     console.log(brewery[0].name);
    // }

    // console.log(city);
    // let arr=[];
    // console.log(clicked)
    function addToArr(){
        const a=brewery.filter(b=>b.city===city);
        const b=brewery.filter(b=>b.name===city);
        const c=brewery.filter(b=>b.brewery_type===city);
        const ans=[...a,...b,...c];
        // console.log(ans);
        setArr(ans);
        // setClicked(true);
        // console.log(arr);
    }
  return (
    <div>
        <div className='flex flex-col justify-between items-center w-full border-b h-11'>
            <div className='flex justify-between items-center w-1/2 mt-2'>
                <p className='text-black text-2xl font-bold'>Brewery</p>
                <Link to='/'><div className='bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[4px]'>Logout</div></Link>
            </div>
            
        </div>
        <div className='flex flex-col items-center justify-center'>

      <div className='mt-6 mb-6 flex flex-col gap-6 items-center justify-center'>
        <h1 className='text-xl underline font-bold'>Search for brewery</h1>
        <div className='flex gap-2'>
        <input type="text" name="" id="" placeholder='Search' onChange={changeHandler} className='border p-2 rounded-md font-bold'/>
        <button onClick={addToArr} className='bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>Search</button>
        </div>
      </div>

      <div className='w-[80%] flex items-center justify-center'>
        {
            arr.length === 0 ? 
            (
                <div>
                    <h1 className='font-bold'>No city found</h1>
                </div>
            ) : 
            (
                <div className='flex flex-row flex-wrap gap-2'>
                    {
                        arr.map(sa=>{
                            return <Card key={sa.id} sa={sa}/>
                        })
                    }
                </div>
            )
          
        }
        </div>
        </div>
        
    </div>
  )
}

export default Home;
