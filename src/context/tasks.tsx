import * as React from "react";
import { createContext, useContext } from 'react';

export const todo = {
   taskName:"aaaaa",
   taskDesc: "bb",
   id : 0.24545345,
  
}



export type ThemeContextType = {
  todos : {taskName:string , taskDesc:string,id:number}[];
  setTasks : (taskName:string,taskDesc:string) => void;
  handleTodoRemove : (id:number) => void;

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


function handleTodoRemove(id: number) {
 
  
  }

  



export const ThemeContext = createContext<ThemeContextType>({todos:[todo],setTasks,handleTodoRemove});
export const useTheme = () => useContext(ThemeContext);




  
  
   
  
  







