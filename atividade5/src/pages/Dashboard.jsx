import { useRef, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { tasks, addTask, deleteTask } = useContext(TodoContext);
  const inputRef = useRef(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      addTask(inputRef.current.value);
      inputRef.current.value = ''; 
    }
  };

  return (
    <div className="card">
      <h1>Minhas Tarefas</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input ref={inputRef} type="text" placeholder="O que precisa fazer?" />
        <button type="submit">Adicionar</button>
      </form>

      <div style={{ textAlign: 'left' }}>
        {tasks.map(t => (
          <div key={t.id} style={{ border: '2px solid black', padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <span>{t.titulo}</span>
            <div>
              <Link to={`/task/${t.id}`} style={{ marginRight: '10px' }}>Detalhes</Link>
              <button onClick={() => deleteTask(t.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;