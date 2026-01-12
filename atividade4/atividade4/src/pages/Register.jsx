import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (nome && email) {
      // Simula o cadastro salvando no localStorage
      localStorage.setItem('user', JSON.stringify({ nome, email }));
      navigate('/dashboard');
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <div className="card" style={{ padding: '40px', border: '2px solid black', backgroundColor: 'white' }}>
      <h2>Criar Conta</h2>
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <input 
          type="text" 
          placeholder="Seu Nome" 
          onChange={(e) => setNome(e.target.value)}
          style={{ padding: '10px', border: '2px solid black' }}
        />
        <input 
          type="email" 
          placeholder="Seu E-mail" 
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', border: '2px solid black' }}
        />
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
      <p style={{ marginTop: '15px' }}>
        Já tem conta? <Link to="/login" style={{ fontWeight: 'bold' }}>Fazer Login</Link>
      </p>
    </div>
  );
};

export default Register;