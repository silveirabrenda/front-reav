import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import './styles/global.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('my-todolist');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('my-todolist', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => setTasks([newTask, ...tasks]);
  const deleteTask = (taskId) => setTasks(tasks.filter(t => t.id !== taskId));
  const toggleStep = (taskId, stepId) => {
    setTasks(tasks.map(t => t.id === taskId
      ? { ...t, steps: t.steps.map(s => s.id === stepId ? { ...s, completed: !s.completed } : s) }
      : t
    ));
  };
  const deleteStep = (taskId, stepId) => {
    setTasks(tasks.map(t => t.id === taskId
      ? { ...t, steps: t.steps.filter(s => s.id !== stepId) }
      : t
    ));
  };
  const addStep = (taskId, stepText) => {
    setTasks(tasks.map(t => t.id === taskId
      ? { ...t, steps: [...t.steps, { id: Date.now(), text: stepText, completed: false }] }
      : t
    ));
  };

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <TaskForm onCreateTask={addTask} />
      {tasks.length === 0 ? <p>Sem tarefas ainda</p> :
        tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDeleteTask={deleteTask}
            onToggleStep={toggleStep}
            onDeleteStep={deleteStep}
            onAddStep={addStep}
          />
        ))
      }
    </div>
  );
}

export default App;
