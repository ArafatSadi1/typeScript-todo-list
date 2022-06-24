import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoLists from './components/TodoLists';
import { Todo } from './models/models';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) =>{
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("")
    }
  }
  console.log(todos)
  return (
    <div className="App">
      <span className='heading'>Todoist</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo}></InputField>
      <TodoLists todos={todos} setTodos={setTodos}></TodoLists>
    </div>
  );
}

export default App;
