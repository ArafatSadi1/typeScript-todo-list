import React, { useRef } from "react";
import "./style.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAddTodo }) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        handleAddTodo(e);
        inputRef?.current?.blur();
      }}
      className="input"
    >
      <input type="text" ref={inputRef} value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder="Enter a todo" className="input_field" />
      <input type="submit" value="Add" className="input_btn" />
    </form>
  );
};

export default InputField;
