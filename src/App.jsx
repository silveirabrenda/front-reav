import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container">
      <Header setPage={setCurrentPage} />
      <Main page={currentPage} />
      <Footer />
    </div>
  );
}

export default App;