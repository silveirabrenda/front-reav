import { useParams, useNavigate } from 'react-router-dom';
import todosData from '../data/todos.json';

const TodoDetail = () => {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();

  const tarefa = todosData.find(t => t.id === parseInt(id));

  if (!tarefa) return <h2>Tarefa não encontrada!</h2>;

  return (
    <div className="card">
      <button onClick={() => navigate('/dashboard')}>← Voltar</button>
      <h1>{tarefa.titulo}</h1>
      <p><strong>Prioridade:</strong> {tarefa.prioridade}</p>
      <p><strong>Descrição:</strong> {tarefa.descricao}</p>
      <span className={`badge ${tarefa.status}`}>{tarefa.status}</span>
    </div>
  );
};

export default TodoDetail;