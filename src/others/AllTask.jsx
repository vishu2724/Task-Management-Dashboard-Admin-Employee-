import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      
      <div className='bg-red-500 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 font-bold text-blue-600'>Employee</h2>
        <h3 className='w-1/5 font-bold text-blue-600'>New Task</h3>
        <h3 className='w-1/5 font-bold text-blue-600'>Active</h3>
        <h3 className='w-1/5 font-bold text-blue-600'>Completed</h3>
        <h3 className='w-1/5 font-bold text-red-600'>Failed</h3>
      </div>

      {userData.employees.map((e) => (
        <div key={e.firstName} className='bg-emerald-600 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5 text-blue-600'>{e.firstName}</h2>
          <h3 className='w-1/5 text-blue-600'>{e.taskNumbers.newTask}</h3>
          <h3 className='w-1/5 text-blue-600'>{e.taskNumbers.active}</h3>
          <h3 className='w-1/5 text-blue-600'>{e.taskNumbers.completed}</h3>
          <h3 className='w-1/5 text-red-600'>{e.taskNumbers.failed}</h3>
        </div>
      ))}

    </div>
  );
};

export default AllTask;

