import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {auth} from "./../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {
    const [formData,setFormData] = useState({
        firstName:"", lastName:"", email:"", password:"", confrimPassword:""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);

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
        createUserWithEmailAndPassword(auth, formData.email, formData.password).then((userCredentials) => {
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
        <div className='flex flex-col gap-6 w-1/3'>
            <div className='flex justify-between'>
                <input
                    required
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={changeHandler}
                    placeholder='First Name'
                    id='fn'
                    className='bg-gray-200 rounded-[0.5rem] w-[45%] p-[12px]'
                />


                <input 
                    required
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={changeHandler}
                    placeholder='Last Name'
                    id='ln'
                    className='bg-gray-200 rounded-[0.5rem] w-[45%] p-[12px]'
                />
            </div>
            <div>
            <input required 
                type="email" 
                value={formData.email}
                name='email'
                onChange={changeHandler}
                placeholder='Enter email id'
                id='email'
                className='bg-gray-200 rounded-[0.5rem] w-full p-[12px]'
            />
            </div>
            <div className='flex justify-between'>
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
                
                <label className='relative'>
                <input 
                    required
                    type={showPassword1 ? ('text') : ('password')}
                    value={formData.confrimPassword}
                    name='confrimPassword'
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                    id='confrimPassword'
                    className='bg-gray-200 rounded-[0.5rem] w-full p-[12px]'
                />
                <span onClick={()=>setShowPassword1((prev)=>!prev)}
                className='absolute right-3 top-[15px] cursor-pointer'>
                    {showPassword1 ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
                </label>
            </div>
            <button className='bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>Create Account</button>
        </div>
        </div>
    </form>
  )
}

export default SignUp
