import * as React from "react";

export const TodoContext = React.createContext({});


const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [todos, setTodos] = React.useState<any>({
    id: Math.random(), 
    title: "abc",
    description: "xyz",
    status: false
  });

  
   const setTasks = (tasksContext: any = []) => {
    const newTodo = {
      id: Math.random(), 
      title: tasksContext.title,
      description: tasksContext.description,
      status: false
    };
    setTodos([...todos, newTodo]);
    const tasksValue = JSON.stringify(tasksContext);
    
    localStorage.setItem("tasks", tasksValue);
  };
  
   const getTasks = () => {
    let tasks = localStorage.getItem("tasks");
    if (!tasks) {
      return [];
    }
    return JSON.parse(tasks);
  };
  
  //  const setSelectedTask = (selectedTasksContext: any = null) => {
  //   if (!selectedTasksContext) {
  //     localStorage.deleteItem("selectedTask");
  //   } else {
  //     const selectedTaskValue = JSON.stringify(selectedTaskContext);
  
  //     localStorage.setItem("selectedTask", selectedTaskValue);
  //   }
  // };
  
   const getSelectedTask = () => {
    let selectedTask = localStorage.getItem("selectedTask");
    if (!selectedTask) {
      return null;
    }
    return JSON.parse(selectedTask);
  };
  

  

  return (
    <TodoContext.Provider value={{ todos, setTasks  }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;




