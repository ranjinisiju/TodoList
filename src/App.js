import React from 'react';
import './App.css';
import db from './indexedDb';
import {useState} from 'react';
//import TodoList from './TodoList';
import { useLiveQuery } from 'dexie-react-hooks';




const App = () => {

  const [input, setInput] = useState(' ');

  const addItemToDb = async(event) => {
    await db.todos.add({ 
          input});
      console.log("item added:" );
      clearState();
      
      
   }

   const clearState = () => {
    setInput('');
    
  };


  const handleChange = event => {
    setInput(event.target.value);
  }

  
  
  
  return (
    <div className="App">
      <h1>Todo App</h1>

     
      <input 
        type="text" 
        id="taskInput"
        value={input} onChange={handleChange} 
        className="itemField" 
        placeholder="Name of item" required />
     
     <button type="button" 
     className="waves-effect waves-light btn right" 
     onClick={addItemToDb}>Add item</button>

   
   
      
    </div>

  );
}


export default App;
