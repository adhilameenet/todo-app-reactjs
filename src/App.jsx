import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
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
          onClick={() =>
            setList([...list, { value: todo, status: false, id: Date.now() }])
          }
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
                }} value={data.status} type="checkbox" name="" id="" />
                <p>{data.value}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
