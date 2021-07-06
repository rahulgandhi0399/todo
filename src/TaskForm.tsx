import { useTheme} from "./context/tasks";


const TaskForm = () => {
  const { todos } = useTheme();
  console.log(todos);
  return (
    <div>
     
      <div>
        taskslist:
        <p> {todos.taskName } </p>
        <p> {todos.taskDesc} </p>
       
      </div>
      <div>
        <input id = "taskinfo" />
        <button onClick = {()=> {
            let taskvalue = (document.getElementById("taskinfo") as unknown as HTMLInputElement).value;
            
            console.log(taskvalue)
            if (taskvalue ) {

             
            }
            
        }}>save </button>
        
        
      </div>
    </div>
  );
};
export default TaskForm;
