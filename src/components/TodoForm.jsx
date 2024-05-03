import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [add, setAdd] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    addTodo(add);
    setAdd('')
  }
  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What is the task today?"
          className="todo-input"
          onChange={(e) => setAdd(e.target.value)}
          value={add}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
