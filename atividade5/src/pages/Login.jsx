import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify({ name: "Professor Gill" }));
    navigate('/dashboard');
  };

  return (
    <div className="card" style={{ border: '2px solid black', padding: '40px' }}>
      <h2>Bem-vindo</h2>
      <button onClick={handleLogin} className="btn-primary">Entrar no Sistema</button>
    </div>
  );
};
export default Login;