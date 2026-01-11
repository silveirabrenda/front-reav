import './Header.css';

export function Header() {
  return (
    <header className="top-header">
      <h1 className="logo">ÆMON</h1>
      <nav className="nav-menu">
        <a href="#">Aprenda</a>
        <a href="#">Simule</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}