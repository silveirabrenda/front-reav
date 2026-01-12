import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks } = useContext(TodoContext);

  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) return <h2>Tarefa não encontrada!</h2>;

  return (
    <div className="card">
      <button onClick={() => navigate(-1)}>← Voltar</button>
      <h2>{task.titulo}</h2>
      <p>ID: {id}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};
export default TodoDetail;