import React from 'react'

const Header = ({data}) => {
 
const logoutuser = ()=>{
  localStorage.setItem('loggedInUser','')
  window.location.reload();
  props.changeUser('')
}
  
  return (
    <div className='  flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>Hello<br /> <span className='text-3xl font-semibold'>❤️</span></h1>
      <button onClick={logoutuser} className='bg-red-500 text-white px-3 py-2 rounded-b-sm'>Log Out</button>
    </div>
  )
}

export default Header
