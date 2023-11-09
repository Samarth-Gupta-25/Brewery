import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "./../firebase"
function LogIn() {

    const [formData,setFormData] = useState({
        email:"", password:""
    });

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        signInWithEmailAndPassword(auth, formData.email, formData.password).then((userCredentials) => {
            console.log(userCredentials)
            navigate("/dashboard");
        }).catch((err) => {
            console.log("Sign Up error", err)
        });
        // console.log(formData);
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='flex flex-col justify-center items-center h-screen relative w-full'>
        <div className='fixed top-0 border-b w-full flex justify-center items-center h-12'>
            <Link to='/'>
                <h1 className='text-black text-2xl font-bold'>Brewery</h1>
            </Link>
        </div>
        <div className='flex flex-col gap-6 w-1/4'> 
        <input required 
            type="email" 
            value={formData.email}
            name='email'
            onChange={changeHandler}
            placeholder='Enter email id'
            id='email'
            className='bg-gray-200 rounded-[0.5rem] w-full p-[12px]'
        />
        <label className='relative'>
        <input 
            required
            type={showPassword ? ('text') : ('password')}
            value={formData.password}
            name='password'
            onChange={changeHandler}
            placeholder='Enter Password'
            id='password'
            className='bg-gray-200 rounded-[0.5rem] w-full p-[12px]'
        />
        <span onClick={()=>setShowPassword((prev)=>!prev)}
        className='absolute right-3 top-[15px] cursor-pointer'>
            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
        </span>
        </label>
        <button className='bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>Sign In</button>
        
        </div>
        </div>
        
    </form>
  )
}

export default LogIn;
