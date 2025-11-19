import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const { updateEmployeeTasks } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const NewTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    // ⭐ Update context properly
    updateEmployeeTasks(assignTo, NewTask);

    // Reset form
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className='py-10 flex items-center justify-center'>
      <form onSubmit={submitHandler} className='bg-neutral-900 p-8 rounded-2xl shadow-lg border border-gray-700 w-[400px] flex flex-col gap-5'>
        
        <div>
          <h3>Task Title</h3>
          <input 
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            placeholder='Create UI Design' 
          />
        </div>

        <div>
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e)=> setTaskDescription(e.target.value)}
            maxLength="20"
            className='border'
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div>
          <h3>Date</h3>
          <input 
            value={taskDate}
            onChange={(e)=> setTaskDate(e.target.value)}
            type="date" 
          />
        </div>

        <div>
          <h3>Assign to</h3>
          <input 
            value={assignTo}
            onChange={(e)=> setAssignTo(e.target.value)}
            type="text"
            placeholder='Employee name' 
          />
        </div>

        <div>
          <h3>Category</h3>
          <input 
            value={category}
            onChange={(e)=> setCategory(e.target.value)}
            type="text"
            placeholder='Design, Dev, etc' 
          />
        </div>

        <button className='rounded cursor-pointer bg-green-500'>Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;

