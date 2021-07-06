import * as React from "react";
import { createContext, useContext } from 'react';

export const todo = {
   taskName:"aaaaa",
   taskDesc: "bb",
  //  status = true,
}

export type ThemeContextType = {
  todos : {taskName:string , taskDesc:string};
  setTasks : (tasksContext: any  ) => void;
  // getTasks : () => void;
  // setSelectedTask : (tasksContext: any  ) => void;
  // getSelectedTask : (tasksContext: any  ) => void; 
 

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




  



export const ThemeContext = createContext<ThemeContextType>({todos:todo,setTasks});
export const useTheme = () => useContext(ThemeContext);




  
  
   
  
  







