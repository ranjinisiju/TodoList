import Dexie from "dexie";


const db = new Dexie('todoApp02');
db.version(1).stores(
    {todos: '++id, item'}
  );

  export default db;