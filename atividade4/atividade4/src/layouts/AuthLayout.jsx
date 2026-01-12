import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  // Se o usuário já estiver logado, manda direto para o Dashboard
  const isAuthenticated = localStorage.getItem('user');

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      backgroundColor: '#000' // Estilo brutalista (preto)
    }}>
      {/* Aqui dentro vai aparecer o seu Login ou seu Registro */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;