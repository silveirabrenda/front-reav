import { useState } from 'react';
import StepItem from './StepItem';
import '../styles/TaskCard.css';

const TaskCard = ({ task, onDeleteTask, onToggleStep, onDeleteStep, onAddStep }) => {
  const [newStep, setNewStep] = useState('');
  const completedSteps = task.steps.filter(s => s.completed).length;
  const allDone = task.steps.length > 0 && completedSteps === task.steps.length;

  const handleAddStep = e => {
    e.preventDefault();
    if (!newStep.trim()) return;
    onAddStep(task.id, newStep);
    setNewStep('');
  };

  return (
    <div className={`task-card ${allDone ? 'completed' : ''}`}>
      <div>
        <h3>{task.title}</h3>
        <button onClick={() => onDeleteTask(task.id)}>Deletar</button>
      </div>
      <p>{task.description}</p>

      {task.steps.map(s => (
        <StepItem key={s.id} step={s} taskId={task.id} onToggle={onToggleStep} onDelete={onDeleteStep} />
      ))}

      <form onSubmit={handleAddStep}>
        <input value={newStep} onChange={e => setNewStep(e.target.value)} placeholder="Novo passo..." />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default TaskCard;
