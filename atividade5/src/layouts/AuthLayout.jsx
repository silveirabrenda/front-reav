import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f0f0f0' }}>
    <Outlet />
  </div>
);
export default AuthLayout;