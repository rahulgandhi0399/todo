import React from "react";
import { useTheme} from "./context/tasks";


const TaskForm = () => {
  const { todos, setTasks } = useTheme();
  const [taskname, setTaskName] = React.useState("");
  const [taskdesc, settaskDesc] = React.useState("");
 
  
  return (
    <div>
     
      <div>
        taskslist:
        {
          todos.map((to) => {
            return <div> <p> Name  : {to.taskName} </p> <p> description : {to.taskDesc} </p> </div>
          })
        }        
       
      </div>
      <div>
        <input id = "taskinfo"  onBlur = {(e)=> setTaskName( e.target.value ) } />
        <input id = "taskdesc"  onBlur = {(e)=> settaskDesc( e.target.value ) } />
        <button onClick= {() => setTasks( (prevState: any) => ([...prevState , {taskName:taskname,taskDesc:taskdesc}]) )}> save </button>
        
        
      </div>
    </div>
  );
};
export default TaskForm;
