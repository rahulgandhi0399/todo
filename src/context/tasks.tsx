import * as React from "react";
import { createContext, useContext } from 'react';


export type ThemeContextType = {
  
  setTasks : (tasksContext: any  ) => void;
  getTasks : (tasksContext: any  ) => void;
  setSelectedTask : (tasksContext: any  ) => void;
  getSelectedTask : (tasksContext: any  ) => void; 
 

}
const setTasks = (tasksContext: any = []) => {
  const newTodo = {
    id: Math.random(), 
    title: tasksContext.title,
    description: tasksContext.description,
    status: false
  }
   const tasksValue = JSON.stringify(tasksContext);

 localStorage.setItem("tasks", tasksValue);
}

const getTasks = () => {
  let tasks = localStorage.getItem("tasks");
  if (!tasks) {
    return [];
  }
  return JSON.parse(tasks);
};

export const setSelectedTask = (selectedTasksContext: any = null) => {
  if (!selectedTasksContext) {
    localStorage.deleteItem("selectedTask");
  } else {
    const selectedTaskValue = JSON.stringify(selectedTasksContext);

    localStorage.setItem("selectedTask", selectedTaskValue);
  }
};

export const getSelectedTask = () => {
  let selectedTask = localStorage.getItem("selectedTask");
  if (!selectedTask) {
    return null;
  }
  return JSON.parse(selectedTask);
};


  



export const ThemeContext = createContext<ThemeContextType>({setTasks,getTasks,getSelectedTask,setSelectedTask });
export const useTheme = () => useContext(ThemeContext);




  
  
   
  
  







