import React from "react";
import { useTheme} from "./context/tasks";


const TaskForm = () => {
  const { todos, setTasks , handleTodoRemove } = useTheme();
  const [taskname, setTaskName] = React.useState("");
  const [taskdesc, settaskDesc] = React.useState("");
 
  
  return (
    <div>
     
      <div>
        taskslist:
        {
          todos.map((to) => {
            return <div> 
              <p> Name  : {to.taskName} </p> <p> description : {to.taskDesc} </p> 
             <button onClick={()=> handleTodoRemove(to.id) }> remove  </button>
            </div>
          })
        }        
       
      </div>
      <div>
        <input id = "taskinfo"  onBlur = {(e)=> setTaskName( e.target.value ) } />
        <input id = "taskdesc"  onBlur = {(e)=> settaskDesc( e.target.value ) } />
        <button onClick= {() => setTasks( taskname,taskdesc )}> save </button>
        
        
      </div>
    </div>
  );
};
export default TaskForm;
