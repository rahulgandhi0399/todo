import React, { useContext } from 'react';
import TodoProvider from './context/tasks'

import './App.css';
import  todos  from "./context/tasks";
import TaskForm from './TaskForm';





function App() {
 
  // const selectedTaskValue  = useContext(selectedTaskContext);
  // const tasksValue =   useContext(tasksContext);
  // tasksValue.push("dummy task")
  // console.log(selectedTaskValue,tasksValue);
  
  return (
    <TodoProvider>
    <div className="App">
      <header className="App-header">
       
        <p>
          
          
          
          <TaskForm/>
          
        </p>
        
      </header>
    </div>
    </TodoProvider>
  );
}

export default App;
