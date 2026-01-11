import './Main.css';
import { funcionalidadesMock } from '../../data/mockData';
// Importando a imagem da seção sobre (certifique-se de que o nome está igual na pasta assets)
import sobrenosImg from '../../assets/sobrenos.png';

export function Main() {
  return (
    <main>
      {/* Seção Hero - Exatamente como no seu index.html */}
      <section className="hero">
        <div className="hero-content">
          <h2>Teste e aprenda <br /> acessibilidade digital.</h2>
          <p>
            Com o AEMON, você simula, aprende e identifica <br /> 
            barreiras para tornar a web mais inclusiva.
          </p>
          <div className="cta-buttons">
            <button className="btn-mock">Aprenda</button>
            <button className="btn-mock">Simule</button>
            <button className="btn-mock">Contato</button>
          </div>
        </div>
      </section>

      {/* Seção Funcionalidades - Aqui entra o REQUISITO de dados mockados */}
      <section className="funcionalidades">
        {funcionalidadesMock.map((item) => (
          <div key={item.id} className="bloco">
            {/* O Vite busca imagens em assets se você importar ou usar caminhos relativos corretos */}
            <img src={`/src/assets/${item.imagem}`} alt={item.titulo} />
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </section>

      {/* Seção Sobre o Projeto - Conteúdo real do seu site */}
      <section className="sobre">
        <img src={sobrenosImg} alt="Imagem sobre o projeto AEMON" />
        <div className="texto-sobre">
          <h3>Sobre Nós</h3>
          <p>
            O AEMON é uma ferramenta que nasceu da necessidade de tornar o mundo digital mais acessível. 
            Inspirado por desafios reais enfrentados por pessoas com deficiência visual, ele busca auxiliar 
            desenvolvedores e testadores a aprenderem e simularem a acessibilidade de interfaces de forma 
            clara e eficiente. Este é o projeto piloto do futuro TCC em Sistemas para Internet do IFSUL.
          </p>
        </div>
      </section>
    </main>
  );
}