import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav style={{ background: '#000', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-around' }}>
      <Link to="/dashboard" style={{ color: '#fff' }}>Tarefas</Link>
      <button onClick={logout} style={{ background: 'red', color: 'white', border: 'none' }}>Sair</button>
    </nav>
  );
};
export default Header;