import { useState, useRef } from 'react';
import '../styles/TaskForm.css';

const TaskForm = ({ onCreateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [steps, setSteps] = useState([]);
  const stepInputRef = useRef();

  const handleAddStep = (e) => {
    e.preventDefault();
    const stepText = stepInputRef.current.value.trim();
    if (stepText) {
      setSteps([...steps, { id: Date.now(), text: stepText, completed: false }]);
      stepInputRef.current.value = '';
      stepInputRef.current.focus();
    }
  };

  const handleRemoveStep = (stepId) => {
    setSteps(steps.filter(step => step.id !== stepId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      steps,
      createdAt: new Date().toISOString()
    };

    onCreateTask(newTask);
    setTitle('');
    setDescription('');
    setSteps([]);
    stepInputRef.current.value = '';
  };

  return (
    <div className="task-form">
      <h2>📝 Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título da Tarefa *</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Ex: Estudar React Hooks"
            required
          />
        </div>

        <div className="form-group">
          <label>Descrição (opcional)</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descreva sua tarefa..."
          />
        </div>

        <div className="form-group">
          <label>Passos da Tarefa</label>
          <div className="steps-input-container">
            <input
              type="text"
              ref={stepInputRef}
              placeholder="Ex: Assistir aula sobre useState"
            />
            <button type="button" className="btn-add-step" onClick={handleAddStep}>
              + Adicionar Passo
            </button>
          </div>

          {steps.length > 0 && (
            <div className="steps-list">
              {steps.map(step => (
                <div key={step.id} className="step-preview">
                  <span>{step.text}</span>
                  <button type="button" className="btn-remove-step" onClick={() => handleRemoveStep(step.id)}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="submit" className="btn-create-task" disabled={!title.trim()}>
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
