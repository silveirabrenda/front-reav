import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="content">
        <Outlet /> {/* Aqui entram as páginas: Dashboard, Detalhes, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;