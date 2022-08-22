import React from 'react';
import './App.css';
import db from './indexedDb';
import {useState} from 'react';
import TodoList from './TodoList';
import {useLiveQuery} from 'dexie-react-hooks';

const App = () => {
    const [item, setItem] = useState(' ');

    const addItemToDb = async(event) => {
        await db.todos.add({item});
        clearState();
    }

    const allItems = useLiveQuery(() => 
        db.todos.toArray(),[]);
        if (!allItems) return null

    const clearState = () => {
        setItem(''); 
    };


    const handleChange = event => {
        setItem(event.target.value);
    }

    const deleteTask = async (id) => db.todos.delete(id)
    
    return (
      <div className="App">
          <h1>Todo App</h1>
          <input 
            type="text" 
            id="taskInput"
            value={item} onChange={handleChange} 
            className="itemField" 
            placeholder="Name of item" required />
        
          <button type="button" 
            className="waves-effect waves-light btn right" 
            onClick={addItemToDb}>Add item</button>

          <div className="list">
              <TodoList allItems={allItems} handleDelete={deleteTask} />
          </div>
      </div>
    );
}

export default App;