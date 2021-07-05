import { ContextType, useContext } from "react";
import { TodoContext } from './context/tasks'

const TaskForm = () => {
  const [todos] = useContext(TodoContext)   ; 
  
  console.log(todos.setTasks)
 
  return (
    <div>
      {/* <div> selected task : {selectedTask} </div> */}
      <div>
        taskslist:
        {/* <ul>
          {todos.map((toe: any) => (
            <li> {toe} </li>
          ))}
        </ul> */}
      </div>
      <div>
        <input id = "taskinfo" />
        <button onClick = {()=> {
            let taskvalue = (document.getElementById("taskinfo") as unknown as HTMLInputElement).value;
            
            console.log(taskvalue)
            if (taskvalue ) {

             //  let newresult = [...tasks ,taskvalue]
              // setTasks(newresult)
            }
            
        }}>save </button>
        
        
      </div>
    </div>
  );
};
export default TaskForm;
