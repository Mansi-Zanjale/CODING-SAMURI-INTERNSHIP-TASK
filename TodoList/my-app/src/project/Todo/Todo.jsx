import { useState, useEffect } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageData());

  // Update localStorage whenever tasks change
  useEffect(() => {
    setLocalStorageData(task);
  }, [task]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const contentmatch = task.find((curTask) => curTask.content === content);
    if (contentmatch) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  const handleCheckedTodo = (content) => {
    const updateTask = task.map((curTask) =>
      curTask.content === content
        ? { ...curTask, checked: !curTask.checked }
        : curTask
    );
    setTask(updateTask);
  };

  const handleClearTodo = () => setTask([]);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul className="todo-list">
          {task.map((curTask) => (
            <TodoList
              key={curTask.id}
              data={curTask.content}
              checked={curTask.checked}
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleCheckedTodo={handleCheckedTodo}
            />
          ))}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodo}>
          Clear All
        </button>
      </section>
    </section>
  );
};
