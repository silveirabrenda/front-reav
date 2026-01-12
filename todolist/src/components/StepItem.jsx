const StepItem = ({ step, taskId, onToggle, onDelete }) => (
  <div className={`step-item ${step.completed ? 'done' : ''}`}>
    <input type="checkbox" checked={step.completed} onChange={() => onToggle(taskId, step.id)} />
    <span>{step.text}</span>
    <button onClick={() => onDelete(taskId, step.id)}>x</button>
  </div>
);

export default StepItem;
