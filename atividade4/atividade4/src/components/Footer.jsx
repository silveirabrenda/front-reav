const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      marginTop: 'auto',
      borderTop: '4px solid #000'
    }}>
      <div className="container">
        <p>&copy; 2026 Meu Todo List - Atividade 04 Front-End II</p>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Desenvolvido com React Router Dom
        </p>
      </div>
    </footer>
  );
};

export default Footer;