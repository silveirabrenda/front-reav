import { Link } from 'react-router-dom';
import todosData from '../data/todos.json';

const Dashboard = () => {
  return (
    <div className="container">
      <header style={{ marginBottom: '30px' }}>
        <h1>Minhas Tarefas</h1>
        <p>Gerencie seus afazeres escolares abaixo:</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {todosData.map((task) => (
          <div key={task.id} className="card" style={{ border: '2px solid black', padding: '20px' }}>
            <h3>{task.titulo}</h3>
            <p>Status: <strong>{task.status}</strong></p>
            <div style={{ marginTop: '15px' }}>
              {/* O Link abaixo leva para a rota de detalhes com o ID */}
              <Link to={`/task/${task.id}`} className="btn btn-primary" style={{ fontSize: '14px' }}>
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;