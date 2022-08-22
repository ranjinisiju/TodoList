const TodoList = ({allItems, handleDelete}) => {
    return ( 
    <div className="list">
     {allItems.map(allItem => (
        <div className="preview" key={allItem.id} >
             { allItem.item }
             <button onClick={() => handleDelete(allItem.id)}>delete</button>
        </div>
      ))}
    </div>
      );
}
 
export default TodoList;