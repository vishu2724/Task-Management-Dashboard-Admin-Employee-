import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap  w-full py-5  mt-10'>
     {data.tasks.map((e,idx)=>{
      if(e.active){
         return <AcceptTask data= {e} key={idx}/>
      }
      if(e.newTask){
         return <NewTask data= {e} key={idx}/>
      }
      if(e.completed){
         return <CompleteTask data= {e} key={idx}/>
      }
      if(e.failed){
         return <FailedTask data= {e} key={idx}/>
      }
      
     })}

       

       
      
    </div>
  )
}

export default TaskList


