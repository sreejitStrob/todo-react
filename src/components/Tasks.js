import { useState } from 'react'



const Tasks = () => {
const [tasks, setTasks] = useState([
{
 id : 1,
 text: 'Doctors appointment',
 day: '15-05-2021 23:45',
},
{
 id : 2,
 text: 'Doctors appointment 2',
 day: '15-05-2021 23:45',
},
{
 id : 3,
 text: 'Doctors appointment 3',
 day: '15-05-2021 23:45',
}
])

 return (
  <>
   {tasks.map( (task) => {
   return  <h3 key={task.id}>{task.text}</h3>
   } )}
  </>
 )
}

export default Tasks
