import React, {useState, useEffect} from 'react';
import api from '../services/Api';
import './components.css';

function TodoList() {

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    async function loadTodos(){
      const response = await api.get('/todos');
      console.log(response.data);
      setTodo(response.data);
    }
    loadTodos();
  },[]);

  return (
    <div className="App">
      <div>{todo.map((data, index) => (
        <div key={index} className="list-div">
          {data.todo}
        </div>
      ))}</div>
    </div>
  );
}

export default TodoList;