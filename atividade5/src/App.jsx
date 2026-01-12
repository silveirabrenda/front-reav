import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TodoProvider } from './contexts/TodoContext';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TodoDetail from './pages/TodoDetail';

function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          {/* Rota Raiz: Já joga para o Login sem escalas */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/task/:id" element={<TodoDetail />} />
          </Route>

          {/* Se a URL estiver errada, volta pro login em vez de mostrar botão de erro */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;