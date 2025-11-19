import React, { useState } from 'react'

const Login = ({handlelogin}) => {

  console.log(handlelogin);
  

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler =(e)=>{
    e.preventDefault();// Page reload nahi hota, aur tum JS code se apna logic likh sakte ho
    handlelogin(email,password)
console.log(" email submitted", email);
console.log(" password submitted", password);

setemail("")
setpassword("")

  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20'>
        <form 
        onSubmit={(e)=>{
        submitHandler(e);
        }}
        className='flex flex-col items-center justify-center'>
          <input value={email}
          onChange={(e)=>{
             setemail(e.target.value)
          }} required className='text-white border-2 bg-transparent outline-none py-4 px-5 rounded-full placeholder:text-white' type="email" placeholder='Enter Your Email' />
          <input value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }} required className=' text-white border-2 bg-transparent outline-none  py-4 px-5 rounded-full mt-3 placeholder:text-white' type="password" placeholder='Enter password' />
          <button className='mt-5 text-white border-none  outline-none bg-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-white'>Log in</button>
        </form>

      </div>
    
    </div>
  )
}

export default Login
