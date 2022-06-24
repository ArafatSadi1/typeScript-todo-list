import React from 'react';
import { Todo } from '../models/models';
import "./style.css";

interface props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<props> = ({todo, todos, setTodos}) => {
  return (
    <div className='single_todo'>
        {todo.todo}
    </div>
  )
}

export default SingleTodo