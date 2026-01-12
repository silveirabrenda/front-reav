import { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('myTasks');
    return saved ? JSON.parse(saved) : [
      { id: 1, titulo: "Estudar Context API", status: "pendente" }
    ];
  });

  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (titulo) => {
    const newTask = { id: Date.now(), titulo, status: 'pendente' };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TodoContext.Provider>
  );
};