import { Outlet, Navigate } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
  const isAuthenticated = !!localStorage.getItem('user');

  // Sem mensagens de erro aqui! Se não estiver logado, tchau.
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="app-wrapper">
      <Header />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;