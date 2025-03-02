import React, { createContext, useContext, useState } from "react";

// Create Todo Context
const TodoContext = createContext();

// Todo Provider Component
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom Hook for using Todo Context
const useTodos = () => {
  return useContext(TodoContext);
};

// Todo Input Component
const TodoInput = () => {
  const { addTodo } = useTodos();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="mt-4 flex gap-2">
      <input
        type="text"
        className="p-2 border rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="p-2 border rounded" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

// Todo List Component
const TodoList = () => {
  const { todos, removeTodo, toggleTodo } = useTodos();

  return (
    <ul className="mt-4 w-64">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`p-2 border rounded flex justify-between items-center ${todo.completed ? "line-through text-gray-500" : ""}`}
        >
          <span onClick={() => toggleTodo(todo.id)} className="cursor-pointer">
            {todo.text}
          </span>
          <button className="ml-2 p-1 border rounded" onClick={() => removeTodo(todo.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

// Main App Component
const App = () => {
  return (
    <TodoProvider>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
