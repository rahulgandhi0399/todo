import React from 'react';


import './App.css';
import  { ThemeContext, todo}  from "./context/tasks";
import TaskForm from './TaskForm';





function App() {
  const [todos, setTodos] = React.useState(todo);
  

  // const selectedTaskValue  = useContext(selectedTaskContext);
  // const tasksValue =   useContext(tasksContext);
  // tasksValue.push("dummy task")
  // console.log(selectedTaskValue,tasksValue);
  
  return (
    <ThemeContext.Provider  value={{todos,setTasks:setTodos}} >
    <div className="App">
      <header className="App-header">
       
        <p>
          <TaskForm/>
        </p>
        
      </header>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
