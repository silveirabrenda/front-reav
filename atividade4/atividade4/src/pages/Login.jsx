import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulação: qualquer login funciona
    if (email && password) {
      const user = { email, nome: 'Usuário Teste' };
      localStorage.setItem('user', JSON.stringify(user));
      
      // REQUISITO: Navegação programática via Hook
      navigate('/dashboard');
    } else {
      alert('Preencha os campos!');
    }
  };

  return (
    <div className="card" style={{ padding: '40px', border: '2px solid black', backgroundColor: 'white' }}>
      <h2>Login - Todo List</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <input 
          type="email" 
          placeholder="Seu e-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', border: '2px solid black' }}
        />
        <input 
          type="password" 
          placeholder="Sua senha" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', border: '2px solid black' }}
        />
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
      <p style={{ marginTop: '15px' }}>
        Não tem conta? <Link to="/register" style={{ fontWeight: 'bold' }}>Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;