import { useState } from 'react';
import '../styles/TaskForm.css';

const TaskForm = ({ onCreateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stepText, setStepText] = useState('');
  const [steps, setSteps] = useState([]);

  const addStep = (e) => {
    e.preventDefault();
    if (!stepText.trim()) return;
    setSteps([...steps, { id: Date.now(), text: stepText.trim(), completed: false }]);
    setStepText('');
  };

  const removeStep = (id) => setSteps(steps.filter(s => s.id !== id));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreateTask({ id: Date.now(), title, description, steps });
    setTitle(''); setDescription(''); setSteps([]); setStepText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição"></textarea>
      <div>
        <input value={stepText} onChange={e => setStepText(e.target.value)} placeholder="Adicionar passo" />
        <button type="button" onClick={addStep}>+ Passo</button>
      </div>
      {steps.map(s => (
        <div key={s.id}>
          {s.text} <button type="button" onClick={() => removeStep(s.id)}>x</button>
        </div>
      ))}
      <button type="submit">Criar Tarefa</button>
    </form>
  );
};

export default TaskForm;
