import { useNavigate } from 'react-router-dom';

const Perfil = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="card" style={{ padding: '20px', border: '2px solid black' }}>
      <h1>Meu Perfil</h1>
      <p><strong>Nome:</strong> {user.nome || 'Usuário'}</p>
      <p><strong>E-mail:</strong> {user.email || 'Não informado'}</p>
      <button className="btn btn-danger" onClick={handleLogout} style={{ marginTop: '20px' }}>
        Sair do Sistema
      </button>
    </div>
  );
};

export default Perfil;