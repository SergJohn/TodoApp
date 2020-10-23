import React, {useState} from 'react';
import api from '../services/Api';

function Form() {

  const [todo, setTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = {todo};
    console.log(data);

    const response = api.post('/backend/addtodo', data);
    window.location.href = '/todos';
  }

  return (
    <div className="App">
      <form>
          <h4>Add a new task: </h4>
          <input 
                type="text" 
                placeholder="new task"
                value={todo}
                onChange={e => setTodo(e.target.value)} 
            />
          <button onClick={e => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}

export default Form;