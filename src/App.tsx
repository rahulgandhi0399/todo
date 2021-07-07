import React from 'react';


import './App.css';
import  { ThemeContext, todo}  from "./context/tasks";
import TaskForm from './TaskForm';





function App() {
  const [todos, setTodos] = React.useState([todo]);

  const setTasks = (taskName:string,taskDesc:string) => {
    
    setTodos( (prevState: any) => ([...prevState , {taskName:taskName,taskDesc:taskDesc,id:Math.random()}]) )

    const tasksValue = JSON.stringify(todos);
    localStorage.setItem("tasks", tasksValue);
   
  }
  
  function handleTodoRemove(id: number) {
 
    const newTodosState = todos.filter((todo) => todo.id !== id)
    
    setTodos(newTodosState)

    const tasksValue = JSON.stringify(todos);
    localStorage.setItem("tasks", tasksValue);
    }

  return (
    <ThemeContext.Provider  value={{todos,setTasks:setTasks,handleTodoRemove:handleTodoRemove}} >
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
