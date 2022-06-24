import React from 'react'
import { Todo } from '../models/models';
import SingleTodo from './SingleTodo';
import "./style.css";

interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoLists: React.FC<props> = ({todos, setTodos}) => {
  return (
    <div className='todo_list'>
        {
            todos?.map(todo => <SingleTodo 
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
            ></SingleTodo>)
        }
    </div>
  )
}

export default TodoLists