import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [add, setAdd] = useState(task.task);
  function handleSubmit(event) {
    event.preventDefault();
    editTodo(add, task.id);
    setAdd('')
  }
  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update Task"
          className="todo-input"
          onChange={(e) => setAdd(e.target.value)}
          value={add}
        />
        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
