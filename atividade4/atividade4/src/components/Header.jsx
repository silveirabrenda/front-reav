import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '20px', background: '#000', color: '#fff' }}>
      <Link to="/dashboard" style={{ color: '#fff' }}>Tarefas</Link>
      <Link to="/perfil" style={{ color: '#fff' }}>Perfil</Link>
    </nav>
  );
};

export default Header;