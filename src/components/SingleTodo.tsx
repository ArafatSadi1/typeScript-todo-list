import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../models/models";
import { MdDelete, MdDone } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import "./style.css";

interface props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEditTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos?.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  const editRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    editRef?.current?.focus();
  }, [edit]);

  const handleDelete = (id: number) => {
    setTodos(todos?.filter((todo) => todo.id !== id));
  };

  const handleIsDone = (id: number) => {
    setTodos(
      todos?.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form onSubmit={(e) => handleEditTodo(e, todo.id)} className="single_todo">
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={editRef}
          className="edit_todo_text"
        />
      ) : todo.isDone ? (
        <s className="single_todo_text">{todo.todo}</s>
      ) : (
        <span className="single_todo_text">{todo.todo}</span>
      )}
      <div className="icons">
        <span
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
          className="edit_icon"
        >
          <BiEdit />
        </span>
        <span onClick={() => handleDelete(todo.id)} className="delete_icon">
          <MdDelete />
        </span>
        <span onClick={() => handleIsDone(todo.id)} className="tick_icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
