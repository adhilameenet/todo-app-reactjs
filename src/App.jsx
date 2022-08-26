import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  const resetField = () => {
    setTodo("");
  }

  const handleNullValues = (e) => {
    e.preventDefault();
    if(todo === "") {
      window.alert("Text Field Must be Filled Out")
    } else {
      setList([...list, { value: todo, status: false, id: Date.now()}])
      resetField();
    }
  }

  const deleteTodo = (i) => {
    var deletePermission = window.confirm("Do you want to delete the task ?");
    if(deletePermission) {
      const  todoTask = [...list];
      todoTask.splice(i,1);
      setList(todoTask);
    }
  }

  return (
    <div className="container">
      <div className="main-title">
        <h1>ToDo List</h1>
      </div>
      
     <div className="add-task-input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Add a New Task"
        />
        <i
          onClick={handleNullValues}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {list.map((data) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  setList(list.filter(newData => {
                    if(newData.id === data.id) {
                      newData.status = e.target.checked ; 
                    }
                    return newData;
                  }))
                }} value={data.status} type="checkbox"/>
                { data.status ? <strike><p>{data.value}</p></strike> : <p>{data.value}</p>}
              </div>
              <div className="right">
                <i onClick={deleteTodo} className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
